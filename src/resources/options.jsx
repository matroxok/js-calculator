import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined'

const Option = () => {
	return (
		<>
			<p className="mt-5 md:mt-8">Mortgage Type</p>
			<div className="w-auto h-10 mt-1 md:mt-4 mb-2 flex justify-start items-center border border-gray-500 rounded pl-5">
				<div className="rounded-full w-4 h-4 bg-none border border-black bord"></div>
				<p className="pl-5 font-semibold md:font-bold md:text-lg font-Jakarta ">Repayment</p>
			</div>
			<div className="w-auto h-10 mt-1 md:mt-3 flex justify-start items-center border border-gray-500 rounded pl-5">
				<div className="rounded-full w-4 h-4 bg-none border border-black bord"></div>
				<p className="pl-5 font-semibold md:font-bold md:text-lg font-Jakarta ">Interest Only</p>
			</div>
		</>
	)
}

export const Button = () => {
	return (
		<div className="w-auto md:w-3/4 h-12 md:h-14 bg-Lime flex justify-center items-center my-6 md:my-0 md:mt-10 rounded-3xl gap-2">
			<CalculateOutlinedIcon />
			<p className="font-semibold md:font-bold md:text-xl">Calculate Repayments</p>
		</div>
	)
}

export default Option
