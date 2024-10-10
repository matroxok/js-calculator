import Input, { Years, Procent } from './resources/tabele'
import Option, { Button } from './resources/options'
import Footer, { CalculatorIcon } from './resources/footer'

const App = () => {
	return (
		<>
			<div className="p-5">
				<h1 className="font-Jakarta">Mortage Calculator</h1>
				<h2 className="font-Jakarta">Clear All</h2>
				<Input></Input>
				<Years />
				<Procent></Procent>
				<Option></Option>
				<Button />
			</div>
			<Footer></Footer>
		</>
	)
}

export default App
