import Input, { Years, Procent } from './resources/tabele'
import Option, { Button } from './resources/options'
import Footer, { CalculatorIcon, FooterDesktop } from './resources/footer'

const App = () => {
	return (
		<>
			<div className="md:w-screen md:h-screen md:bg-blue-100 md:flex md:justify-center md:items-center">
				<div className="md:flex md:bg-white md:w-auto md:h-auto md:rounded-3xl overflow-hidden">
					<div className="p-5 md:p-10 md:w-auto md:h-auto ">
						<div className="md:flex md:w-auto md:gap-52 items-center">
							<h1 className="font-Jakarta font-bold text-2xl ">Mortage Calculator</h1>
							<h2 className="font-Jakarta font-thin underline underline-offset-1 text-gray-500">Clear All</h2>
						</div>
						<Input></Input>
						<div className="hidden md:flex w-full h-auto gap-8">
							<Years />
							<Procent></Procent>
						</div>
						<Option></Option>
						<Button />
					</div>
					<FooterDesktop></FooterDesktop>
					<Footer></Footer>
				</div>
			</div>
		</>
	)
}

export default App
