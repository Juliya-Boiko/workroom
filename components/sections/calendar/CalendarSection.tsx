'use client';
import styles from './calendarSection.module.scss';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
// import { DateSelectArg, EventClickArg } from '@fullcalendar/core';
import { useState, useEffect } from 'react';
import { useCalendarEvents, eventsType } from '@/utils';
import { ECategoryEvent, EPriority } from '@/typings';
import { BadgePriopity } from '@/components/ui';

interface EventBase {
  id: string;
  title: string;
  start: Date;
  priority: EPriority;
}

interface IEventInfo {
  event: {
    title: string;
    extendedProps: {
      priority: EPriority;
      category: ECategoryEvent;
    };
  };
}

export const CalendarSection = () => {
  const { data } = useCalendarEvents();
  const [currentEvents, setCurrentEvents] = useState<EventBase[]>([]);

  useEffect(() => {
    if (data) {
      const events = data.map((el) => ({
        id: el._id,
        title: el.name,
        start: el.date,
        priority: el.priority,
        category: el.category,
      }));
      setCurrentEvents(events);
    }
  }, [data]);

  const renderEventContent = (eventInfo: IEventInfo) => {
    const priority = eventInfo.event.extendedProps.priority;

    return (
      <div className={styles.event}>
        <div
          className={styles.line}
          style={{ backgroundColor: eventsType(eventInfo.event.extendedProps.category).color }}
        />
        <div className={styles.title}>{eventInfo.event.title}</div>
        <BadgePriopity crop label={priority} />
      </div>
    );
  };

  return (
    <section className={styles.calendarSection}>
      <div className="">
        <div className="">
          <FullCalendar
            themeSystem="bootstrap"
            headerToolbar={{
              left: 'prev',
              center: 'title',
              right: 'next',
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={2}
            events={currentEvents}
            hiddenDays={[0, 6]}
            firstDay={1}
            eventDisplay="block"
            eventContent={renderEventContent}
            eventBackgroundColor="#F4F9FD"
            eventBorderColor="#F4F9FD"
            eventTextColor="inherit"
          />
        </div>
      </div>
    </section>
  );
};
//  select={handleDateClick} // Handle date selection to create new events.
//             eventClick={handleEventClick} // Handle clicking on events (e.g., to delete them).
// const handleDateClick = () => {};

// const handleEventClick = () => {};

// const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
// const [selectedDate, setSelectedDate] = useState<DateSelectArg | null>(null);

// const handleCloseDialog = () => {
//   setIsDialogOpen(false);
//   setNewEventTitle('');
// };

// const handleAddEvent = (e: React.FormEvent) => {
//   e.preventDefault();
//   if (newEventTitle && selectedDate) {
//     const calendarApi = selectedDate.view.calendar; // Get the calendar API instance.
//     calendarApi.unselect(); // Unselect the date range.

//     const newEvent = {
//       id: `${selectedDate.start.toISOString()}-${newEventTitle}`,
//       title: newEventTitle,
//       start: selectedDate.start,
//       end: selectedDate.end,
//       allDay: selectedDate.allDay,
//     };

//     calendarApi.addEvent(newEvent);
//     handleCloseDialog();
//   }
// };
