export function buildSrcSet(src, widths = [320,480,768,1024,1600]) {
  if (!src) return undefined;
  try {
    const u = new URL(src);
    return widths.map(w => {
      const v = new URL(src);
      v.searchParams.set('w', String(w));
      return `${v.toString()} ${w}w`;
    }).join(', ');
  } catch (e) {
    return undefined;
  }
}

export function pickBest(src, preferredWidth = 1024) {
  if (!src) return src;
  try {
    const v = new URL(src);
    v.searchParams.set('w', String(preferredWidth));
    return v.toString();
  } catch (e) {
    return src;
  }
}
