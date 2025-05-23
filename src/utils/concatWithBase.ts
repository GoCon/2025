// パスを組み立てるときに環境変数を使ってルート情報を追加する関数。
// GitHub Pages で公開する都合で astro.config.ts で base を指定している。
// Netlifyで公開するときはbaseを上書きして公開しているので動的に指定する必要がある。
export function concatWithBase(path?: string): string {
  const isNetlify =
    typeof window !== "undefined" &&
    window.location.hostname.includes("netlify.app");

  // ベースパスを決定（Netlifyの場合は空、それ以外はBASE_URL）
  const basePath = isNetlify ? "" : import.meta.env.BASE_URL;

  if (!path) {
    return basePath;
  }

  const cleanPath = path.startsWith("/") ? path.substring(1) : path;
  if (!basePath || basePath === "/") {
    return `/${cleanPath}`;
  }
  return `${basePath}/${cleanPath}`;
}
