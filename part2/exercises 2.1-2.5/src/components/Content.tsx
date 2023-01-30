import Part from "./Part";
import { ContentPart } from "../types";

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

export default Content;
