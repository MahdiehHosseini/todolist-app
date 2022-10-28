function CalendarPageLoading() {
	return (
		<div className=" animate-pulse">
			<header>
				<span className=" flex justify-center items-center my-5">
					<i className='material-icons text-4xl-without-lineheigh mt-1 border cursor-pointer border-gray-200 text-gray-200 rounded-full'>keyboard_arrow_left</i>
					<div className="mx-7 bg-gray-200 h-4 w-28 rounded-3xl"></div>
					<i className='material-icons text-4xl-without-lineheigh mt-1 cursor-pointer border border-gray-200 text-gray-200 rounded-full'>keyboard_arrow_right</i>
				</span>
				<div className=" flex overflow-x-auto ml-4 my-9">
					<span className=" border p-2 rounded-3xl mr-4 cursor-pointer">
						<div className="bg-gray-200 w-8 h-6 rounded-3xl"></div>
						<div className=" bg-gray-200 w-8 h-4 rounded-lg mt-5"></div>
					</span>
				</div>
			</header>
			<section className='mx-6 relative mb-20'>
				<span className=' my-7 flex items-center justify-between'>
					<span className="flex">
						<span className=' bg-gray-200 h-4 w-32 rounded-3xl'></span>
					</span>
					<p className=' text-gray-200 text-xl font-bold'>...</p>
				</span>
				<div>
					<div className="md:flex md:justify-around">
						<div className="flex flexrow items-center justify-between border-b p-3 md:w-full md:mr-5">
							<span>
								<span className="flex items-center">
									<span className=" bg-gray-200 h-3 w-16 rounded-3xl"></span>
									<i className='material-icons text-gray-200 text-xl ml-2'>access_alarm</i>
								</span>
								<span className="h-2 w-28 mt-3 bg-gray-200 rounded-3xl block"></span>
							</span>
							<span className=" rounded-full border-gray-200 p-0.5 border flex"><i className=" text-xl-without-lineheigh material-icons text-gray-200">done</i></span>
						</div>
						<div className="flex flexrow items-center justify-between border-b p-3 md:w-full md:ml-5">
							<span>
								<span className="flex items-center">
									<span className=" bg-gray-200 h-3 w-16 rounded-3xl"></span>
									<i className='material-icons text-gray-200 text-xl ml-2'>access_alarm</i>
								</span>
								<span className="h-2 w-28 mt-3 bg-gray-200 rounded-3xl block"></span>
							</span>
							<span className=" rounded-full border-gray-200 p-0.5 border flex"><i className=" text-xl-without-lineheigh material-icons text-gray-200">done</i></span>
						</div>
					</div>
					<div className="md:flex md:justify-around">
						<div className="flex flexrow items-center justify-between border-b p-3 md:w-full md:mr-5">
							<span>
								<span className="flex items-center">
									<span className=" bg-gray-200 h-3 w-16 rounded-3xl"></span>
									<i className='material-icons text-gray-200 text-xl ml-2'>access_alarm</i>
								</span>
								<span className="h-2 w-28 mt-3 bg-gray-200 rounded-3xl block"></span>
							</span>
							<span className=" rounded-full border-gray-200 p-0.5 border flex"><i className=" text-xl-without-lineheigh material-icons text-gray-200">done</i></span>
						</div>
						<div className="flex flexrow items-center justify-between border-b p-3 md:w-full md:ml-5">
							<span>
								<span className="flex items-center">
									<span className=" bg-gray-200 h-3 w-16 rounded-3xl"></span>
									<i className='material-icons text-gray-200 text-xl ml-2'>access_alarm</i>
								</span>
								<span className="h-2 w-28 mt-3 bg-gray-200 rounded-3xl block"></span>
							</span>
							<span className=" rounded-full border-gray-200 p-0.5 border flex"><i className=" text-xl-without-lineheigh material-icons text-gray-200">done</i></span>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default CalendarPageLoading