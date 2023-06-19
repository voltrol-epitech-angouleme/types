import { Book, PDF_content } from "./book";

interface User {
  id: string;
  firstName: string;
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

type Role = "ADMIN" | "SUPER_ADMIN" | "USER";

type Profession = "STUDENT" | "OTHERS";

export type { User, OnGoingBook, Role, Profession };
