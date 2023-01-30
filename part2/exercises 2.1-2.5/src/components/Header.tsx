type HeaderProps = {
	course: string;
};

const Header = ({ course }: HeaderProps) => <h1>{course}</h1>;

export default Header;
