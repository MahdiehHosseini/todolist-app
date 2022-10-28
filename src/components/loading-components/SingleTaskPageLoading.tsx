function SingleTaskageLoading () {
	return (
		<div className=' h-screen overflow-hidden animate-pulse'>
			<span className='flex justify-center my-5'>
				<div className=" my-4 bg-gray-200 h-5 w-20 rounded-3xl"></div>
			</span>	
			<div className=" mx-6 block">
				<div className=" bg-gray-200 w-28 rounded-3xl h-3 my-5"></div>
				<div className=" bg-gray-200 w-28 rounded-3xl h-3 my-5"></div>
				<div className=" bg-gray-200 w-28 rounded-3xl h-3 my-5"></div>
			</div>
			<span className=" flex justify-center overflow-x-hidden"> 
				<div className="border border-gray-200 sm:mt-28 mt-60 rounded-full">
					<div className="border-dotted border-gray-200 border-15 relative sm:p-52 flex justify-center m-2 p-96 rounded-full">
						<div className=" absolute sm:text-center top-24 sm:top-44 inset-y-0 bg-gray-200 h-5 w-40 rounded-3xl"></div>
					</div>
				</div>
			</span>
		</div>
	)
}

export default SingleTaskageLoading