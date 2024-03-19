function InfoCard({ info }) {
	return (
		<div className="w-full rounded-xl">
			<div className="relative flex flex-col items-center justify-center my-auto">
				<img
					className="h-64 w-64 object-contain hover:cursor-pointer bg-white p-8 border border-green-500 border-opacity-20"
					src={info.image}
					alt={info.title}
				/>
				<h4 className="text-2xl text-white my-2 font-serif font-medium text-center underline underline-offset-4 absolute top-[260px]">
					{info.title}
				</h4>
				<div className="bg-green-500 w-64 h-64 text-white flex flex-col justify-around items-center gap-12">
					<ul className="list-none mx-auto text-center">
						{info.items.map((item, key) => (
							<li key={key} className="text-white text-lg my-2">
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default InfoCard;
