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
				<table>
					<tbody>
						<StatisticLine text="good" value={good} />
						<StatisticLine text="neutral" value={neutral} />
						<StatisticLine text="bad" value={bad} />
						<StatisticLine text="average" value={(good - bad) / (good + neutral + bad)} />
						<StatisticLine text="positive" value={(good * 100) / (good + neutral + bad)} modifier="%" />
					</tbody>
				</table>
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
	<tr>
		<td>{text}</td>
		<td>
			{value}
			{modifier}
		</td>
	</tr>
);

interface FeedbackProps {
	setGood: () => void;
	setNeutral: () => void;
	setBad: () => void;
}

const Feedback = ({ setGood, setNeutral, setBad }: FeedbackProps) => (
	<>
		<h1>give feedback</h1>
		<Button text="good" onClick={setGood} />
		<Button text="neutral" onClick={setNeutral} />
		<Button text="bad" onClick={setBad} />
	</>
);

const Anecdote = () => {
	const [selected, setSelected] = useState(0);

	const anecdotes = [
		"If it hurts, do it more often.",
		"Adding manpower to a late software project makes it later!",
		"The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		"Premature optimization is the root of all evil.",
		"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
		"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
		"The only way to go fast, is to go well.",
	];
	const [votes, setVotes] = useState(anecdotes.map(_ => 0));

	const handleVote = (anecdote: number) => () => {
		const copy = [...votes];
		copy[anecdote] += 1;
		setVotes(copy);
	};

	return (
		<>
			<h1>Anecdote of the day</h1>
			<p>{anecdotes[selected]}</p>
			<p>has {votes[selected]} votes</p>
			<Button onClick={handleVote(selected)} text="vote" />
			<Button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text="next anecdote" />
			<h1>Anecdote with most votes</h1>
			<p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>
		</>
	);
};

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<Feedback
				setGood={() => setGood(prev => prev + 1)}
				setNeutral={() => setNeutral(prev => prev + 1)}
				setBad={() => setBad(prev => prev + 1)}
			/>
			<Statistics good={good} neutral={neutral} bad={bad} />
			<Anecdote />
		</div>
	);
};

export default App;
