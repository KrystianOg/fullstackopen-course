type ContentPart = {
	name: string;
	exercises: number;
	id: number;
};

type Course = {
	id: number;
	name: string;
	parts: ContentPart[];
};

export type {
    ContentPart,
	Course
}