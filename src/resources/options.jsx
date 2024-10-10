import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined'

const Option = () => {
	return (
		<>
			<p className="mt-5">Lorem, ipsum.</p>
			<div className="w-auto h-10 mt-1 mb-2 flex justify-start items-center border border-gray-500 rounded pl-5">
				<div className="rounded-full w-4 h-4 bg-none border border-black bord"></div>
				<p className="pl-5 font-semibold font-Jakarta ">Lorem.</p>
			</div>
			<div className="w-auto h-10 mt-1 flex justify-start items-center border border-gray-500 rounded pl-5">
				<div className="rounded-full w-4 h-4 bg-none border border-black bord"></div>
				<p className="pl-5 font-semibold font-Jakarta ">Lorem.</p>
			</div>
		</>
	)
}

export const Button = () => {
	return (
		<div className="w-auto h-12 bg-Lime flex justify-center items-center my-6 rounded-3xl gap-2">
			<CalculateOutlinedIcon />
			<p className="font-semibold">Calculate Repayments</p>
		</div>
	)
}

export default Option
