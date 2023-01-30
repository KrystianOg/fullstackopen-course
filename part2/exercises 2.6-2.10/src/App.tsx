import React, { useRef, useState } from "react";
import { default as PersonComponent } from "./components/Person";
import type { Person } from "./types";

function App() {
	const [persons, setPersons] = useState<Person[]>([
		{ name: "Arto Hellas", number: "040-123456", id: 1 },
		{ name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
		{ name: "Dan Abramov", number: "12-43-234345", id: 3 },
		{ name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
	]);

	const [filter, setFilter] = useState("");
	const nameInputRef = useRef<HTMLInputElement>(null);
	const numberInputRef = useRef<HTMLInputElement>(null);

	// using ref because this way component does not rerender on every key press
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

	const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFilter(e.target.value.toLowerCase());
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<div>
				filter shown with: <input value={filter} onChange={handleFilter} />
			</div>

			<h2>Add new person</h2>
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
			<h2>Numbers</h2>
			{persons
				.filter(p => p.name.toLowerCase().includes(filter))
				.map(person => (
					<PersonComponent key={person.name} person={person} />
				))}
		</div>
	);
}

export default App;
