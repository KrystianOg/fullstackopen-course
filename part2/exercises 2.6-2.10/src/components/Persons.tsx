import Person from "./Person";
import type { Person as PersonType } from "../types";

type Props = {
	persons: PersonType[];
};

const Persons = ({ persons }: Props) => {
	return (
		<div>
			{persons.map(person => (
				<Person key={person.id} person={person} />
			))}
		</div>
	);
};

export default Persons;
