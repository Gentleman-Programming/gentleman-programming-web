/* `import { FC } from 'react';` */
import { FC } from 'react';

/* Importing various icons/components from the `@app/components` module. */
import {
  BookIcon, // Book icon
  ContactIcon, // Contact icon
  DiscordIcon, // Discord icon
  GentlemanProgrammingIcon, // GentlemanProgramming icon
  LinkedInIcon, // LinkedIn icon
  TwitchIcon, // Twitch icon
  TwitterIcon, // Twitter icon
  YouTubeIcon, // YouTube icon
} from '@app/components';

/*`import styles from './styles/navButton.module.css';` */
import styles from './styles/navButton.module.css';

/* The `interface PropsNB` is defining the props that can be passed to the `NavButton` component. */
interface PropsNB {
  id?: string; // id of the button
  selected?: boolean; // whether the button is selected
  isHome?: boolean; // whether the button is the home button
  hasNotifications?: boolean; // whether the button has notifications
  isLive?: boolean; // whether the button represents a live stream
  mentions?: number; // number of mentions
  img?: string; // image to be displayed on the button
  description?: string; // description of the button
  link?: string; // link associated with the button
}
/**
 * Renders a NavButton component.
 * @returns {JSX.Element} The rendered component.
 */
export const NavButton: FC = ({
  img, // image to be displayed on the button
  hasNotifications, // whether the button has notifications or not
  isLive, // whether the button represents a live stream or not
  mentions, // number of mentions displayed on the button
  description, // description of the button
  link, // link associated with the button
}: PropsNB) => {
  const Tag = link ? 'a' : 'button'; // determine whether the button should be an anchor or button element
  const appDir = 'DS'; // directory associated with the app

  return (
    <Tag
      dataNotifications={hasNotifications} // set data attribute to indicate if button has notifications
      dataSelected={description == appDir && true} // set data attribute to indicate if button is selected
      dataIsLive={isLive} // set data attribute to indicate if button represents a live stream
      dataHasmentions={mentions && mentions > 0} // set data attribute to indicate if button has mentions
      dataMentions={mentions} // set data attribute to indicate number of mentions
      dataIsHome={description == 'HM' && true} // set data attribute to indicate if button is the home button
      className={styles.button} // set class name for styling
      href={link} // set link for anchor element
      target={link ? '_blank' : undefined} // set target attribute if link exists
    >
      {
        img == 'HM' && (
          <GentlemanProgrammingIcon />
        ) /*display GentlemanProgrammingIcon if img is 'HM' */
      }
      {img == 'TW' && <TwitchIcon /> /* display TwitchIcon if img is 'TW'*/}
      {img == 'DS' && <DiscordIcon /> /* display DiscordIcon if img is 'DS'*/}
      {img == 'YT' && <YouTubeIcon /> /* display YouTubeIcon if img is 'YT'*/}
      {img == 'TT' && <TwitterIcon /> /* display TwitterIcon if img is 'TT'*/}
      {img == 'LK' && <LinkedInIcon /> /* display LinkedInIcon if img is 'LK'*/}
      {img == 'BK' && <BookIcon /> /* display BookIcon if img is 'BK'*/}
      {img == 'CT' && <ContactIcon /> /* display ContactIcon if img is 'CT'*/}
    </Tag>
  );
};
