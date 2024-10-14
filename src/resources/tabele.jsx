import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound'

const Inputs = () => {
	return (
		<div className="mt-5 md:mt-8 ">
			<p>Mortage Amount</p>
			<div className="mt-1 md:mt-4 border border-gray-500 rounded flex items-center">
				<div className="w-10 h-10 bg-blue-200 flex justify-center items-center">
					<CurrencyPoundIcon fontSize="inherit" />
				</div>
				<input type="number" className="w-full h-10 px-3 focus:outline-none" placeholder="Enter amount" />
			</div>
		</div>
	)
}

export const Years = () => {
	return (
		<div className="mt-5 md:mt-8 w-1/2">
			<p>Mortgage Term</p>
			<div className="mt-1 md:mt-4 border border-gray-500 rounded flex flex-row-reverse ">
				<div className="w-14 h-10 bg-blue-200 flex justify-center items-center">
					<p className="font-bold text-sm">years</p>
				</div>
				<input type="number" className="w-full h-10 px-3 focus:outline-none" placeholder="Enter amount" />
			</div>
		</div>
	)
}

export const Procent = () => {
	return (
		<div className="mt-5 md:mt-8 w-1/2">
			<p>Interest Rate</p>
			<div className="mt-1 md:mt-4 border border-gray-500 rounded flex flex-row-reverse">
				<div className="w-10 h-10 bg-blue-200 flex justify-center items-center">
					<p className="font-bold text-sm">%</p>
				</div>
				<input type="number" className="w-full h-10 px-3 focus:outline-none" placeholder="Enter amount" />
			</div>
		</div>
	)
}

export default Inputs
