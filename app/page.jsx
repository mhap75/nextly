import { AddSchedule } from "@/components";
import { getEvents } from "@/lib/getEvents";

export default async function Home() {
  const events = await getEvents();

  // ToDo: Using api routes, events will be fetched from the GOOGLE CALENDER api
  // ToDo: In the events list, there will be a search function and the EventCard component for each event. It will be a CLIENT component.

  return (
    <section className="h-[600px]">
      <AddSchedule />
      {/* <EventsList events={events} /> */}
    </section>
  );
}
