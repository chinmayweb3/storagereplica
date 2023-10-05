/**
 * @default 2 seconds
 * @param ms milliseconds
 * @returns  milliseconds of rest
 */
export const wait = (ms: number = 2000) => new Promise((r, j) => setTimeout(r, ms));
