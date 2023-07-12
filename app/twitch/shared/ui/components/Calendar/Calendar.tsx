'use client';

import styles from './Calendar.module.scss';
import { Segment } from '../../../../models/event.model';
interface Props {
  events: Segment[];
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
  function obtenerDiaSemana(fecha: any) {
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
  const fecha = new Date('2023-06-25');
  const diaSemana = obtenerDiaSemana(fecha);
  console.log('El día de la semana es: ' + diaSemana);
  return (
    <div className={styles.calendarContent}>
      <div className={styles.calendarContent}>
        {EventsInfo.map((event, i) => (
          <div key={i} className={styles.contentData}>
            <h2 className={styles.dateTime}>
              {obtenerDiaSemana(new Date(event.start))}
              <br />
              {event.start.replace(/2023-/g, '')}
            </h2>
            <div className={styles.card}>
              <h3 className={styles.title}>{event.title} </h3>
              <p className={styles.time}>
                {<span className={styles.span}>1</span>}
                {`  ${obtenerDiaSemana(new Date(event.start))}, 
                ${event.startTime} - ${event.endTime}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
