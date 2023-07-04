// import axios from "axios"

import NewEventForm from "../components/NewEventForm";

const NewEvent = () => {
    const onAddEventHandler = (eventData) => {

    }
	return (
		<section>
			<NewEventForm 
                onAddEventHandler={onAddEventHandler}
            />
		</section>
	);
};

export default NewEvent;
