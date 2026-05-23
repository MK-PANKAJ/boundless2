import fs from 'fs/promises';
import path from 'path';
import eventsData from '../src/data/events.js';

const out = path.resolve('dist');

function escapeHtml(s){
  return String(s)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#39;');
}

async function ensureDir(dir){
  await fs.mkdir(dir, { recursive: true });
}

function eventHtml(event){
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(event.title)} — Boundless Tenure Report</title>
<link rel="icon" href="/favicon.svg">
<link href="/assets/index-h_-QVtvo.css" rel="stylesheet">
</head>
<body>
  <main style="max-width:900px;margin:40px auto;font-family:Inter,system-ui,Arial,sans-serif;color:#222">
    <h1>${escapeHtml(event.title)}</h1>
    <p><em>${escapeHtml(event.tagline || '')}</em></p>
    <img src="${escapeHtml(event.image)}" alt="${escapeHtml(event.title)}" style="width:100%;height:auto;border-radius:8px;">
    <section style="margin-top:18px">
      <h2>Description</h2>
      <p>${escapeHtml(event.description || '')}</p>
    </section>
    <section style="margin-top:18px">
      <h2>City Meetups</h2>
      <ul>
        ${ (event.subEvents||[]).map(s => `<li><a href="/events/${event.id}/${s.id}/index.html">${escapeHtml(s.title)} — ${escapeHtml(s.date)} — ${escapeHtml(s.location)}</a></li>`).join('') }
      </ul>
    </section>
    <p style="margin-top:36px;font-size:13px;color:#666">Generated static page</p>
  </main>
</body>
</html>`;
}

function subEventHtml(event, sub){
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(sub.title)} — ${escapeHtml(event.title)}</title>
<link rel="icon" href="/favicon.svg">
<link href="/assets/index-h_-QVtvo.css" rel="stylesheet">
</head>
<body>
  <main style="max-width:900px;margin:40px auto;font-family:Inter,system-ui,Arial,sans-serif;color:#222">
    <a href="/events/${event.id}/index.html">← Back to ${escapeHtml(event.title)}</a>
    <h1>${escapeHtml(sub.title)}</h1>
    <p><strong>${escapeHtml(sub.date)}</strong> — ${escapeHtml(sub.location)}</p>
    <img src="${escapeHtml(sub.image || event.image)}" alt="${escapeHtml(sub.title)}" style="width:100%;height:auto;border-radius:8px;">
    <section style="margin-top:18px">
      <h2>Overview</h2>
      <p>${escapeHtml(sub.description|| '')}</p>
    </section>
    <p style="margin-top:36px;font-size:13px;color:#666">Generated static page</p>
  </main>
</body>
</html>`;
}

async function run(){
  // ensure dist exists
  try{ await fs.access(out); }catch(e){ console.error('dist/ not found — run `npm run build` first'); process.exit(1); }

  for(const event of eventsData){
    const dir = path.join(out, 'events', event.id);
    await ensureDir(dir);
    await fs.writeFile(path.join(dir, 'index.html'), eventHtml(event), 'utf8');
    for(const sub of (event.subEvents||[])){
      const subdir = path.join(dir, sub.id);
      await ensureDir(subdir);
      await fs.writeFile(path.join(subdir, 'index.html'), subEventHtml(event, sub), 'utf8');
    }
  }
  console.log('Generated static pages under dist/events/');
}

run().catch(err=>{ console.error(err); process.exit(1); });
