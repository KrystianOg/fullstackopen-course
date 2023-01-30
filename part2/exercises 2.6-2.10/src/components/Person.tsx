interface PersonProps {
	name: string;
}

const Person = ({ name }: PersonProps) => {
	return <div>{name}</div>;
};

export default Person;
