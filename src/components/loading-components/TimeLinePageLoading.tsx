function TimeLineLoading() {
	return (
		<div className=" animate-pulse">
			<span className=" flex justify-center">
				<div className=' bg-gray-200 h-4 w-24 mt-7 rounded-3xl'></div>
			</span>
			<div className='lg:flex lg:justify-around'>
				<section className='my-5 mx-6'>
					<div className="mt-6 bg-gray-200 h-3 w-40 rounded-3xl"></div>
					<canvas id="line-chart-widget" height="200"></canvas> 
				</section>
				<section className='my-5 mx-6'>
					<div className="mt-6 bg-gray-200 h-3 w-40 rounded-3xl"></div>
					<canvas id="line-chart-widget" height="200"></canvas> 
				</section>
			</div>
		</div>
	)
}

export default TimeLineLoading