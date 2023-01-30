import type { ContentPart } from "../types";

type PartProps = {
	part: ContentPart;
};

const Part = ({ part }: PartProps) => (
	<p>
		{part.name} {part.exercises}
	</p>
);

export default Part;
