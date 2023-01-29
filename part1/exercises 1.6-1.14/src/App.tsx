import { useState } from "react";

interface ButtonProps {
	onClick: () => void;
	text: string;
}

const Button = ({ text, onClick }: ButtonProps) => <button onClick={onClick}>{text}</button>;

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<h1>give feedback</h1>
			<Button text="good" onClick={() => setGood(prev => prev + 1)} />
			<Button text="neutral" onClick={() => setNeutral(prev => prev + 1)} />
			<Button text="bad" onClick={() => setBad(prev => prev + 1)} />
			<h1>statistics</h1>
			<p>good {good}</p>
			<p>neutral {neutral}</p>
			<p>bad {bad}</p>
		</div>
	);
};

export default App;
