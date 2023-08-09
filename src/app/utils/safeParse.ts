export function safeParse<T>(json: string, safe = true): T | null {
  try {
    return JSON.parse(json) as T;
  } catch (e) {
    if (safe) {
      return null;
    }

    throw new Error(`You're trying to decode an invalid JSON String: ${json}`);
  }
}
