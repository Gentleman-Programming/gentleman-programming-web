export interface INavButtonProps {
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
