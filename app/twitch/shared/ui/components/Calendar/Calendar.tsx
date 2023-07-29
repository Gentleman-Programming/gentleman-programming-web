import styles from './Calendar.module.scss';
import { Segment } from '../../../../models/event.model';
interface Props {
  events: Segment[];
}
interface EventsInfo {
  title: string;
  start: string;
  endTime: string;
  startTime: string;
}
export function Calendar({ events }: Props) {
  const EventsInfo = events.map((event) => {
    return {
      title: `${event.title}`,
      start: `${event.start_time.substr(0, 10)}`,
      endTime: `${event.end_time.split('T')[1].slice(0, -4)}`,
      startTime: `${event.start_time.split('T')[1].slice(0, -4)}`,
    };
  });

  function obtenerDiaSemana(fecha: Date) {
    const diasSemana = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
    ];

    const dia = fecha.getUTCDay();
    return diasSemana[dia];
  }
  function getDatesForNextSevenDays() {
    const currentDate = new Date();
    const dates = [];
    for (let i = 0; i < 5; i++) {
      const nextDate = new Date(
        currentDate.getTime() + i * 24 * 60 * 60 * 1000
      );
      dates.push(formatDate(nextDate.toISOString()));
    }
    return dates;
  }

  function getEventsGroupedByDate() {
    const eventsGrouped: { [date: string]: EventsInfo[] } = {};
    EventsInfo.forEach((event) => {
      const date = formatDate(event.start);
      if (!eventsGrouped[date]) {
        eventsGrouped[date] = [];
      }
      eventsGrouped[date].push(event);
    });
    return eventsGrouped;
  }

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(
      2,
      '0'
    )}-${String(date.getUTCDate()).padStart(2, '0')}`;
  }
  return (
    <div className={styles.calendarContent}>
      <div className={styles.calendar}>
        <div className={styles.days}>
          {getDatesForNextSevenDays().map((date) => {
            const formattedDate = formatDate(date);
            const currentDate = new Date();
            const isCurrentDay =
              formattedDate === formatDate(currentDate.toISOString());
            const eventsGrouped = getEventsGroupedByDate();
            const eventsForDate = eventsGrouped[formattedDate] || [];

            return (
              <div
                key={formattedDate}
                className={`${styles.day} ${isCurrentDay ? styles.test : ''}`}
              >
                <h2 className={styles.dateTime}>
                  {obtenerDiaSemana(new Date(formattedDate))}
                  <br />
                  {formattedDate.substr(5, 10)}
                </h2>
                <div className={styles.eventsContainer}>
                  {eventsForDate.map((event, index) => (
                    <div key={index} className={styles.eventCard}>
                      <h3 className={styles.title}>{event.title} </h3>
                      <p className={styles.time}>
                        {<span className={styles.span}>1</span>}
                        {`  ${obtenerDiaSemana(new Date(event.start))},
${event.startTime} - ${event.endTime}`}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
