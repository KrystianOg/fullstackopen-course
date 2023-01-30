type ContentPart = {
	name: string;
	exercises: number;
};

type Course = {
	name: string;
	parts: ContentPart[];
};

export type {
    ContentPart,
	Course
}