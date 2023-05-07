'use client';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';

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
      end: `${event.end_time.substr(0, 10)}`,
    };
  });
  return (
    <div className={styles.calendarContent}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridDay"
        weekends={true}
        locale={'es'}
        events={EventsInfo}
        // eventContent={renderEventContent}
        headerToolbar={{
          left: 'today prev,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
      />
    </div>
  );
}

// function renderEventContent(eventInfo: any) {
//   return (
//     <div style={{ backgroundColor: 'white' }}>
//       <b>{eventInfo.timeText}</b>
//       <i>{eventInfo.event.title}</i>
//     </div>
//   );
// }
