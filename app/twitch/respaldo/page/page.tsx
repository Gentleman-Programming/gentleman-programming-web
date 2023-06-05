import { getCalendar } from '@app/twitch/services';

import pageStyles from './page.module.scss';
import Avatar from '../../shared/ui/components/Avatar/Avatar';
import Button from '../../shared/ui/components/Button/Button';
import { Calendar } from '../../shared/ui/components/Calendar/Calendar';

export const metadata = {
  title: 'GP -> Twitch',
  description: 'Twitch page',
};
async function Twitch() {
  async function fetchEvents() {
    return await getCalendar();
  }
  const events = await fetchEvents();
  return (
    <div className={pageStyles.root}>
      <div className={pageStyles.container}>
        <header className={pageStyles.header}>
          <div className={pageStyles.gentleman}>
            <Avatar />
            <Button>
              <div className={pageStyles.contentButton}>
                <div className={pageStyles.contentSvg}>
                  <svg
                    style={{ color: 'white' }}
                    width="20px"
                    height="20px"
                    fill="#efefef"
                    version="1.1"
                    viewBox="0 0 20 20"
                    x="0px"
                    y="0px"
                  >
                    <g>
                      <path
                        fillRule="evenodd"
                        d="M11.456 8.255L10 5.125l-1.456 3.13-3.49.485 2.552 2.516-.616 3.485L10 13.064l3.01 1.677-.616-3.485 2.553-2.516-3.491-.485zM7.19 6.424l-4.2.583c-.932.13-1.318 1.209-.664 1.853l3.128 3.083-.755 4.272c-.163.92.876 1.603 1.722 1.132L10 15.354l3.579 1.993c.846.47 1.885-.212 1.722-1.132l-.755-4.272 3.128-3.083c.654-.644.268-1.723-.664-1.853l-4.2-.583-1.754-3.77c-.406-.872-1.706-.872-2.112 0L7.19 6.424z"
                        clipRule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className={pageStyles.contentText}>
                  Ir al canal de Twitch
                </div>
              </div>
            </Button>
          </div>
        </header>

        <section>
          <Calendar events={events.data.segments} />
        </section>
      </div>
    </div>
  );
}
export default Twitch;
