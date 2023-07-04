import EventItem from "./EventItem"

const EventList = ({ events }) => {

    return (
        <>
            {events.map((event) => (
                <EventItem 
                    key={event.id}
                    id={event.id}
                    image={event.image}
                    title={event.title}
                    address={event.address}
                    description={event.description}
                />
            ))}
        </>
    )
}

export default EventList