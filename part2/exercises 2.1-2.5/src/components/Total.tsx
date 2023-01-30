import { ContentPart } from "../types";

type TotalProps = {
	parts: Pick<ContentPart, "exercises">[];
};

const Total = ({ parts }: TotalProps) => {
	const total = parts.reduce((acc, { exercises }) => acc + exercises, 0);

	return <p>Number of exercises {total}</p>;
};

export default Total;
