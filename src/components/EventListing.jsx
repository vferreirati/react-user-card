import EventCard from './EventCard';

const imageUrl =
  'https://superticket-assets.s3.amazonaws.com/eventos/53644963-36b0-4c31-bab8-2452b8c902a1';
const events = [
  { name: 'Evento 1', imageUrl: imageUrl, id: 1 },
  { name: 'Evento 1', imageUrl: imageUrl, id: 2 },
  { name: 'Evento 1', imageUrl: imageUrl, id: 3 },
  { name: 'Evento 1', imageUrl: imageUrl, id: 4 },
  { name: 'Evento 1', imageUrl: imageUrl, id: 5 },
  { name: 'Evento 1', imageUrl: imageUrl, id: 6 },
];

const EventListing = () => {
  return (
    <section>
      <h1 className="text-blue-600 font-bold text-2xl text-center mb-4">
        Eventos
      </h1>
      <div className="grid grid-cols-4 mt-8 gap-4">
        {events.map((event) => (
          <EventCard
            name={event.name}
            imageUrl={event.imageUrl}
            key={event.id}
          />
        ))}
      </div>
    </section>
  );
};

export default EventListing;
