import type { Person as PersonType } from "../types";
interface PersonProps {
	person: PersonType;
}

const Person = ({ person: { name, number } }: PersonProps) => {
	return (
		<div>
			{name} {number}
		</div>
	);
};

export default Person;
