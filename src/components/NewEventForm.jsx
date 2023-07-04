import { useState, useRef } from "react"

const NewEventForm = ({ onAddEventHandler }) => {
    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const addressInputRef = useRef()
    const descriptionInputRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

        const enteredTitle = titleInputRef.current.value
        const enteredImage = imageInputRef.current.value
        const enteredAddress = addressInputRef.current.value
        const enteredDescription = descriptionInputRef.current.value

        // stores event input data in an object
        const eventData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        }
        onAddEventHandler(eventData)
        // console.log(eventData)
    }
	return (
		<section className="bg-white">
			<div className="py-8 lg:py-16 px-[2rem] lg:px-[15rem] my-0 lg:my-6 w-full">
				<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
					Add A New Event
				</h2>
				<p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
					Lets create a new event, what are the details?
				</p>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label
							htmlFor="title"
							className="block mb-2 text-sm font-medium text-gray-900"
						>
							Event Title
						</label>
						<input
                            ref={titleInputRef}
							type="text"
							id="title"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                            placeholder="Ex: Family Reunion"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="image"
							className="block mb-2 text-sm font-medium text-gray-900"
						>
							Event Image
						</label>
						<input
                            ref={imageInputRef}
							type="url"
							id="image"
							className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="address"
							className="block mb-2 text-sm font-medium text-gray-900"
						>
							Event Address
						</label>
						<input
                            ref={addressInputRef}
							type="text"
							id="address"
							className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                            placeholder="123 Example Street"
							required
						/>
					</div>
					<div className="sm:col-span-2">
						<label
							htmlFor="description"
							className="block mb-2 text-sm font-medium text-gray-900 "
						>
                            Event Description
						</label>
						<textarea
                            ref={descriptionInputRef}
							id="description"
							rows={6}
							className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
							placeholder="Tell us what this event is about..."
							defaultValue={""}
                            required
						/>
					</div>
					<button
						type="submit"
						className="flex w-full justify-center py-3 px-5 text-sm  font-medium text-white bg-orange-300 hover:shadow-xl duration-150 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
					>
						Add Event
					</button>
				</form>
			</div>
		</section>
	);
};

export default NewEventForm;
