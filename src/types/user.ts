import { Book, PDF_content } from "./book";

interface User {
  id: string;
  firtName: string;
  lastName: string;
  birthday: Date;
  role: Role;
  profession: Profession;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
  RatedBooks?: Book["id"][];
		ReadBoooks?: Book["id"][];
  card?: Book[];
		onGoingBook?: OnGoingBook[];
}

interface OnGoingBook {
	bookId: Book["id"];
	pageOn: PDF_content["page"];
}


export enum Role {
  ADMIN = "ADMIN",
  SUPER_ADMIN = "SUPER_ADMIN",
  USER = "USER",
}

export enum Profession {
  STUDENT = "STUDENT",
  OTHER = "OTHER",
}

export type { User, OnGoingBook };
