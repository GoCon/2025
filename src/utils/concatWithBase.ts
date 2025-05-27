// パスを組み立てるときに環境変数を使ってルート情報を追加する関数。
// GitHub Pages で公開する都合で astro.config.ts で base を指定している。
// Netlifyで公開するときはbaseを上書きして公開しているので動的に指定する必要がある。
export function concatWithBase(path?: string): string {
  if (!path) {
    return import.meta.env.BASE_URL;
  }
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  if (import.meta.env.BASE_URL === "/") {
    return `/${cleanPath}`;
  }
  return `${import.meta.env.BASE_URL}/${cleanPath}`;
}

export function concatWithBaseUrl(path?: string, astroUrl?: URL): string {
  // Netlify環境では URL を優先使用
  const baseOrigin = import.meta.env.URL || astroUrl?.origin;
  return `${baseOrigin}${concatWithBase(path)}`;
}
