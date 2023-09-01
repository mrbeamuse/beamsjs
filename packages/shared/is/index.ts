export const isClient = typeof window !== "undefined";

export const isIOS =
  /* #__PURE__ */ isClient &&
  window?.navigator?.userAgent &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent);

export const isString = (val: unknown): val is string =>
  typeof val === "string";
