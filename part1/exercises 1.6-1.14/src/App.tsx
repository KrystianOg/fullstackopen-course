import { useState } from "react";

interface StatisticsProps {
	good: number;
	neutral: number;
	bad: number;
}

const Statistics = ({ good, neutral, bad }: StatisticsProps) => (
	<div>
		<h1>statistics</h1>
		<p>good {good}</p>
		<p>neutral {neutral}</p>
		<p>bad {bad}</p>
		<p>average: {(good - bad) / (good + neutral + bad)}</p>
		<p>positive: {(good * 100) / (good + neutral + bad)}%</p>
	</div>
);

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<h1>give feedback</h1>
			<button onClick={() => setGood(prev => prev + 1)}>good</button>
			<button onClick={() => setNeutral(prev => prev + 1)}>neutral</button>
			<button onClick={() => setBad(prev => prev + 1)}>bad</button>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

export default App;
