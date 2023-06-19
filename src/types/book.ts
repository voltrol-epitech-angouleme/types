import { User } from "./user";

interface Book {
	ageRange?: [number, number];
	ageRestriction?: number;
	author: string;
	caterogy: Category[];
	createdAt: Date;
	createdBy: User["id"];
	dataPublished: Date;
	id: string;
	isArchived: boolean;
	pdfContents: PDF_content[];
	ratings: Rating[];
	title: string;
	updatedAt: Date;
	updatedBy: User["id"];
	isReadBy: User["id"][];
}

type Category = "DRAMA" | "NOVEL" | "OTHER" | "POETRY" | "SCIENCE_FICTION" | "SHORT_STORY" | "TRAGEDY";
interface PDF_content {
	content?: string;
	page: number;
	pdfFileName: string;
}

interface Rating {
	comment?: string;
	rating: number;
	userId: string;
}

export type { Book, PDF_content, Rating, Category };