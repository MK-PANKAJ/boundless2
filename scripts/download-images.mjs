import fs from 'fs/promises';
import { pipeline } from 'stream/promises';
import { createWriteStream } from 'fs';
import path from 'path';
import https from 'https';
import eventsData from '../src/data/events.js';

async function ensureDir(dir){ await fs.mkdir(dir, { recursive: true }); }

function download(url, outPath){
  return new Promise((resolve, reject)=>{
    const opts = new URL(url);
    opts.headers = { 'User-Agent': 'Mozilla/5.0 (compatible; Node)' };
    https.get(opts, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // follow redirects
        return resolve(download(res.headers.location, outPath));
      }
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      const fileStream = createWriteStream(outPath);
      pipeline(res, fileStream).then(() => resolve()).catch(reject);
    }).on('error', reject);
  });
}

async function run(){
  const root = path.resolve('public','images');
  for(const ev of eventsData){
    const evDir = path.join(root, ev.id);
    await ensureDir(evDir);
    if (ev.image){
      const out = path.join(evDir, 'main.jpg');
      try{ await download(ev.image, out); console.log('Downloaded', out); } catch(e){ 
        console.error('Failed', ev.image, e.message);
        const alt = ev.image.split('?')[0];
        if (alt !== ev.image){
          try{ await download(alt, out); console.log('Downloaded alt', out); } catch(err){ console.error('Alt failed', alt, err.message); }
        }
      }
    }
    for(const sub of (ev.subEvents||[])){
      const out = path.join(evDir, `${sub.id}.jpg`);
      if (sub.image){
        try{ await download(sub.image, out); console.log('Downloaded', out); } catch(e){ 
          console.error('Failed', sub.image, e.message);
          // try without query string
          const alt = sub.image.split('?')[0];
          if (alt !== sub.image){
            try{ await download(alt, out); console.log('Downloaded alt', out); continue; } catch(err){ console.error('Alt failed', alt, err.message); }
          }
        }
      }
    }
  }
  console.log('All downloads attempted');
}

run().catch(err=>{ console.error(err); process.exit(1); });
