import { useRef } from "react";
import { Person } from "../types";

type Props = {
	persons: Person[];
	setPersons: React.Dispatch<React.SetStateAction<Person[]>>;
};

const PersonForm = ({ persons, setPersons }: Props) => {
	const nameInputRef = useRef<HTMLInputElement>(null);
	const numberInputRef = useRef<HTMLInputElement>(null);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!nameInputRef.current) return;

		const name = nameInputRef.current.value;

		if (persons.find(person => person.name === name)) {
			alert(`${name} is already added to phonebook`);
			return;
		}

		const id = Math.max(...persons.map(p => p.id)) + 1;

		const person = {
			id,
			name,
			number: numberInputRef.current?.value,
		};
		setPersons(persons.concat(person));
		nameInputRef.current.value = "";
		numberInputRef.current!.value = "";
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				name: <input ref={nameInputRef} />
			</div>
			<div>
				number: <input ref={numberInputRef} />
			</div>
			<div>
				<button type="submit">add</button>
			</div>
		</form>
	);
};

export default PersonForm;
