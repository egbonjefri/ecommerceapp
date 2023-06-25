// utils/createEmotionCache.ts
import createCache from "@emotion/cache";

const isBrowser = typeof document !== "undefined";

// This function creates a meta tag at the top of the <head> and set it as insertionPoint on the client side.
// This assures that MUI styles are loaded first.
// It also allows us to easily override MUI styles with other styling solutions, like CSS modules.
export default function createEmotionCache() {
  let insertionPoint;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]'
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({ key: "mui-style", insertionPoint });
}
