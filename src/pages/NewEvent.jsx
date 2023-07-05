import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios"

import NewEventForm from "../components/NewEventForm";

const NewEvent = () => {
    // const [data, setData] = useState([])
    const navigate = useNavigate()

    const onAddEventHandler = (eventData) => {
        axios.post('https://evenly-app-client-default-rtdb.firebaseio.com/events.json', { eventData })
            .then((res) => {
                if(res.status === 200) {
                    navigate("/", { replace: true })
                }
                console.log(res)                
            }).catch((error) => {
                console.log(error)
            })
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
