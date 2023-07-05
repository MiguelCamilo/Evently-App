const EventItem = ({ title, image, address, description }) => {
	return (
			<div className="bg-white p-4 mb-5 lg:w-1/4 md:w-1/2">
				<div className="h-full flex flex-col items-center text-center">
					<img
						alt="team"
						className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
						src={image}
					/>
					<div className="w-full">
						<h2 className="title-font font-bold text-xl text-black">
							{title}
						</h2>
						<address className="text-gray-500 mb-3">{address}</address>
						<p className="mb-4">{description}</p>
						<span className="inline-flex">
							{/* HEART ICON */}
						</span>
					</div>
				</div>
			</div>
	);
};

export default EventItem;
