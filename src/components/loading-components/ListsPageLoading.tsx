function ListsPageLoading() {
	return (
		<div className=" animate-pulse">
			<div className="mt-6 bg-gray-200 h-4 w-40 ml-6 mb-4 rounded-3xl"></div>
			<div className="mx-6 mt-5">
				<div className='md:flex md:justify-around'>
					<div className=" border-b my-3 md:w-full md:mr-5">
						<div className=" bg-gray-200 w-20 rounded-3xl h-4"></div>
						<div className=" bg-gray-200 w-28 rounded-3xl h-3 my-5"></div>
						<div className=" bg-gray-200 w-24 rounded-3xl h-3 my-5"></div>
						<div className="w-full rounded-full h-4 border mb-4 mt-2">
							<div className=" bg-teal-400 h-full rounded-l-full w-0"></div>
						</div>
					</div>
					<div className=" border-b my-3 md:w-full md:mr-5">
						<div className=" bg-gray-200 w-20 rounded-3xl h-4"></div>
						<div className=" bg-gray-200 w-28 rounded-3xl h-3 my-5"></div>
						<div className=" bg-gray-200 w-24 rounded-3xl h-3 my-5"></div>
						<div className="w-full rounded-full h-4 border mb-4 mt-2">
							<div className=" bg-teal-400 h-full rounded-l-full w-0"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default ListsPageLoading