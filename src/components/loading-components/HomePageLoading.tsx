function HomePageLoading () {
	return (
		<div className="animate-pulse">
			<header className=' flex justify-between items-center mb-5 mx-6 pt-10'>
				<span className="flex flex-col">
					<span className=' bg-gray-200 h-5 w-40 rounded-3xl inline-block'></span>
					<span className=' bg-gray-200 inline-block rounded-3xl mt-5 h-3 w-52'></span>
				</span>
				<span className=" relative">
					<i className='material-icons cursor-pointer text-3xl text-gray-200'>notifications</i>
				</span>
			</header>
			<section>
				<span className=" bg-gray-200 h-4 rounded-3xl w-40 inline-block my-3 ml-6"></span>
				<div className='flex snap-x overflow-x-auto overflow-y-hidden snap-mandatory ml-6 '>
					<div className=" border rounded-3xl mr-7 flex flex-shrink-0 flex-col py-4 sm:px-5 sm:py-6 px-4 sm:w-64 w-48 my-3">
						<span className=" font-bold rounded-3xl h-3 w-24 bg-gray-200"></span>
						<span className=" my-5 bg-gray-200 h-2 w-32 rounded-3xl"></span>
						<div className="w-full rounded-full h-4 sm:h-5 border">
							<div className=" bg-teal-400 h-full rounded-l-full w-0"></div>
						</div>
					</div>
					<div className=" border rounded-3xl mr-7 flex flex-shrink-0 flex-col py-4 sm:px-5 sm:py-6 px-4 sm:w-64 w-48 my-3">
						<span className=" font-bold rounded-3xl h-3 w-24 bg-gray-200"></span>
						<span className=" my-5 bg-gray-200 h-2 w-32 rounded-3xl"></span>
						<div className="w-full rounded-full h-4 sm:h-5 border">
							<div className=" bg-teal-400 h-full rounded-l-full w-0"></div>
						</div>
					</div>
					<div className=" border rounded-3xl mr-7 flex flex-shrink-0 flex-col py-4 sm:px-5 sm:py-6 px-4 sm:w-64 w-48 my-3">
						<span className=" font-bold rounded-3xl h-3 w-24 bg-gray-200"></span>
						<span className=" my-5 bg-gray-200 h-2 w-32 rounded-3xl"></span>
						<div className="w-full rounded-full h-4 sm:h-5 border">
							<div className=" bg-teal-400 h-full rounded-l-full w-0"></div>
						</div>
					</div>
				</div>
			</section>
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

export default HomePageLoading 