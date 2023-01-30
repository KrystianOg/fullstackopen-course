// Header
type HeaderProps = {
	course: string;
};

const Header = ({ course }: HeaderProps) => <h1>{course}</h1>;

// Part
type PartProps = {
	part: ContentPart;
};

const Part = ({ part }: PartProps) => (
	<p>
		{part.name} {part.exercises}
	</p>
);

// Content
type ContentPart = {
	name: string;
	exercises: number;
};

type ContentProps = {
	parts: ContentPart[];
};

const Content = ({ parts }: ContentProps) => (
	<div>
		{parts.map(part => (
			<Part key={part.name} part={part} />
		))}
	</div>
);

// Total
type TotalProps = {
	parts: Pick<ContentPart, "exercises">[];
};

const Total = ({ parts }: TotalProps) => {
	const total = parts.reduce((acc, { exercises }) => acc + exercises, 0);

	return <p>Number of exercises {total}</p>;
};

// App
type Course = {
	name: string;
	parts: ContentPart[];
};

const App = () => {
	const course: Course = {
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
			},
			{
				name: "State of a component",
				exercises: 14,
			},
		],
	};

	return (
		<div>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	);
};

export default App;
