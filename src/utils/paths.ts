const ABSOLUTE_PATH_PATTERN = /^(?:[a-z][a-z\d+.-]*:|\/\/)/i;

export function withBase(path: string) {
  if (!path || path.startsWith("#") || ABSOLUTE_PATH_PATTERN.test(path)) {
    return path;
  }

  const baseUrl = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  if (path === "/") {
    return baseUrl;
  }

  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;

  return `${baseUrl}${normalizedPath}`;
}
