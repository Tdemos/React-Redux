import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Intervalo from './components/Intervalo';

function App() {
	return (
		<div className="App">
			<h3>Exercicio React-Redux (Simples)</h3>
			<div className="linha">
				<Intervalo />
			</div>
			<div className="linha">
				<Card title="Card 2" green>
					X
				</Card>
				<Card title="Card 1" red>
					X
				</Card>
				<Card title="Card 2" green>
					X
				</Card>
			</div>
			<div className="linha">
				<Card title="Card 3" blue>
					Y
				</Card>
				<Card title="Card 4" purple>
					Y
				</Card>
			</div>
		</div>
	);
}

export default App;
