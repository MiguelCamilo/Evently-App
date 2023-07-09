import { useNavigate } from "react-router-dom"
import axios from "axios"

import NewEventForm from "../components/NewEventForm";
import { db_env } from "../db.env.config";

const NewEvent = () => {
    // const [data, setData] = useState([])
    const navigate = useNavigate()

    const onAddEventHandler = (eventData) => {
        axios.post(db_env.database_api, { eventData })
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
