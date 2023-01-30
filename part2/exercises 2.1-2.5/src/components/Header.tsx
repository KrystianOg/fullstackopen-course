type HeaderProps = {
	course: string;
};

const Header = ({ course }: HeaderProps) => <h2>{course}</h2>;

export default Header;
