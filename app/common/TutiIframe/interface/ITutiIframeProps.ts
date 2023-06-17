/** This is the interface  for the TutiIframe component. */

/* Defining an interface named `ITutiIframeProps`. */
export interface ITutiIframeProps {
  width: string;
  height: string;
  src: string;
  title?: string;
  allow?: string;
  allowFullScreen?: boolean;
}
