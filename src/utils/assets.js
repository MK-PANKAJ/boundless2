/**
 * Resolves static asset paths by prefixing them with the app's configured base URL (e.g. /boundless2/).
 * This ensures that absolute asset paths work correctly when the app is hosted under a nested base path.
 */
export const getAssetUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};
