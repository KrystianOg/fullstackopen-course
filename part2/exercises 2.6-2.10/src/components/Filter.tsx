type Props = {
	filter: (newValue: string) => void;
};

const Filter = ({ filter }: Props) => {
	return (
		<div>
			filter shown with: <input onChange={e => filter(e.target.value)} />
		</div>
	);
};

export default Filter;
