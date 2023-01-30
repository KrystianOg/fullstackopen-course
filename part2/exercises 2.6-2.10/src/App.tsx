import { useState } from "react";
import { Filter, Person as PersonComponent, PersonForm } from "./components";
import Persons from "./components/Persons";
import type { Person } from "./types";

function App() {
	const [persons, setPersons] = useState<Person[]>([
		{ name: "Arto Hellas", number: "040-123456", id: 1 },
		{ name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
		{ name: "Dan Abramov", number: "12-43-234345", id: 3 },
		{ name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
	]);

	const [filter, setFilter] = useState("");

	return (
		<div>
			<h2>Phonebook</h2>

			<Filter filter={newValue => setFilter(newValue.toLowerCase())} />

			<h3>Add new person</h3>

			<PersonForm persons={persons} setPersons={setPersons} />

			<h3>Numbers</h3>

			<Persons persons={persons.filter(person => person.name.toLowerCase().includes(filter))} />
		</div>
	);
}

export default App;
