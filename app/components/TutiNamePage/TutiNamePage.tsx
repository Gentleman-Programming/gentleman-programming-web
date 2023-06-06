/* The TutiNamePage component is importing the `ITutiNamePageProps` interface. */
import { ITutiNamePageProps } from './interface';
/**
 * Renders a TutiNamePage component.
 * @returns {JSX.Element} The rendered component.
 */
export function TutiNamePage({ linkPage }: ITutiNamePageProps): string {
  const parts =
    linkPage.split('/'); /* The split method splits a string into an array. */
  return parts[
    parts.length - 1
  ]; /* The last element of the array is the name of the page. */
}
