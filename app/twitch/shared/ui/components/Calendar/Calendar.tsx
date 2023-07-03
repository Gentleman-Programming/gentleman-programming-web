// eslint-disable-next-line import/order
import styles from './Calendar.module.scss';
import dataCalendar from './mock.json';
import { Segment } from '../../../../models/event.model';
interface Props {
  events: Segment[];
}
export function Calendar(events: Props) {
  return (
    <div className={styles.calendarContent}>
      <div className={styles.calendarContent}>
        {Object.entries(dataCalendar.calendar).map(([date, events]) => (
          <div key={date} className={styles.contentData}>
            <h2 className={styles.dateTime}>{date}</h2>
            {events.map((event, index) => (
              <div key={index} className={styles.card}>
                <h3 className={styles.title}>{event.title}</h3>
                <p className={styles.time}>
                  {event.startTime} - {event.endTime}
                </p>
                <p className={styles.description}>{event.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
