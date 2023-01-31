import { useState, useEffect } from "react";
import axios from "axios";
import { Filter, Person as PersonComponent, PersonForm } from "./components";
import Persons from "./components/Persons";
import type { Person } from "./types";

function App() {
	const [persons, setPersons] = useState<Person[]>([]);

	useEffect(() => {
		axios.get<Person[]>("http://localhost:3001/persons").then(response => {
			setPersons(response.data);
		});
	}, []);

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
