import { useState } from "react";

interface StatisticsProps {
	good: number;
	neutral: number;
	bad: number;
}

const Statistics = ({ good, neutral, bad }: StatisticsProps) => {
	return (
		<div>
			<h1>statistics</h1>
			{good + neutral + bad > 0 ? (
				<>
					<StatisticLine text="good" value={good} />
					<StatisticLine text="neutral" value={neutral} />
					<StatisticLine text="bad" value={bad} />
					<StatisticLine text="average" value={(good - bad) / (good + neutral + bad)} />
					<StatisticLine text="positive" value={(good * 100) / (good + neutral + bad)} modifier="%" />
				</>
			) : (
				<>
					<p>No feedback given</p>
				</>
			)}
		</div>
	);
};

interface ButtonProps {
	text: string;
	onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => <button onClick={onClick}>{text}</button>;

interface StatisticLineProps {
	text: string;
	value: number;
	modifier?: string;
}

const StatisticLine = ({ text, value, modifier }: StatisticLineProps) => (
	<p>
		{text} {value}
		{modifier}
	</p>
);

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<h1>give feedback</h1>
			<Button text="good" onClick={() => setGood(good + 1)} />
			<Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
			<Button text="bad" onClick={() => setBad(bad + 1)} />
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

export default App;
