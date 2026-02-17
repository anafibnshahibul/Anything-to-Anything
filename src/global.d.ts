import type { FileFormat } from "./FormatHandler.js";

declare global {
  interface Window {
    supportedFormatCache: Map<string, FileFormat[]>;
    printSupportedFormatCache: () => string;
    showPopup: (html: string) => void;
    hidePopup: () => void;
  }
}

export { };
