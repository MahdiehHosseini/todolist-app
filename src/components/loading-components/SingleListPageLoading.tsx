function SingleListPageLoading () {
	return (
		<div className=" animate-pulse">
			<span className='flex justify-center my-5'>
				<div className=" my-4 bg-gray-200 h-5 w-20 rounded-3xl"></div>
			</span>	
			<div className=" mx-6">
				<div className=" bg-gray-200 w-28 rounded-3xl h-3 my-5"></div>
				<div className=" bg-gray-200 w-28 rounded-3xl h-3 my-5"></div>
			</div>
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

export default SingleListPageLoading