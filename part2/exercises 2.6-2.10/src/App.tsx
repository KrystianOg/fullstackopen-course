import React, { useRef, useState } from "react";
import { default as PersonComponent } from "./components/Person";
import type { Person } from "./types";

function App() {
	const [persons, setPersons] = useState<Person[]>([{ name: "Arto Hellas" }]);
	const nameInputRef = useRef<HTMLInputElement>(null);

	// using ref because this way component does not rerender on every key press
	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		if (!nameInputRef.current) return;

		const newName = nameInputRef.current.value;

		if (persons.find(person => person.name === newName)) {
			alert(`${newName} is already added to phonebook`);
			return;
		}

		const person = {
			name: newName,
		};
		setPersons(persons.concat(person));
		nameInputRef.current.value = "";
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={handleSubmit}>
				<div>
					name: <input ref={nameInputRef} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons.map(person => (
				<PersonComponent key={person.name} name={person.name} />
			))}
		</div>
	);
}

export default App;
