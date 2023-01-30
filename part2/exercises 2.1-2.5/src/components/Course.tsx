import { Header, Content, Total } from ".";
import { Course as CourseType } from "../types";

type CourseProps = {
	course: CourseType;
};

const Course = ({ course }: CourseProps) => (
	<div>
		<Header course={course.name} />
		<Content parts={course.parts} />
		{/* <Total parts={course.parts} /> */}
	</div>
);

export default Course;
