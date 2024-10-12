import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound'

const Inputs = () => {
	return (
		<div className="mt-5">
			<p>Mortage Amount</p>
			<div className="mt-1 border border-gray-500 rounded">
				<div className="w-10 h-10 bg-blue-200 flex justify-center items-center">
					<CurrencyPoundIcon fontSize="inherit" />
				</div>
			</div>
		</div>
	)
}

export const Years = () => {
	return (
		<div className="mt-5 w-1/2">
			<p>Lorem, ipsum.</p>
			<div className="mt-1 border border-gray-500 rounded flex flex-row-reverse ">
				<div className="w-14 h-10 bg-blue-200 flex justify-center items-center">
					<p className="font-bold text-sm">years</p>
				</div>
			</div>
		</div>
	)
}

export const Procent = () => {
	return (
		<div className="mt-5 w-1/2">
			<p>Lorem, ipsum.</p>
			<div className="mt-1 border border-gray-500 rounded flex flex-row-reverse">
				<div className="w-10 h-10 bg-blue-200 flex justify-center items-center">
					<p className="font-bold text-sm">%</p>
				</div>
			</div>
		</div>
	)
}

export default Inputs
