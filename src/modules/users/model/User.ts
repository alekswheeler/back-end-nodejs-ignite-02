import { v4 as uuidV4 } from "uuid";

interface IUser {
  name: string;
  email: string;
}

class User {
  id: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor() {
    const date: Date = new Date();
    this.id = uuidV4();
    this.admin = false;
    this.created_at = date;
    this.updated_at = date;
  }

  setName(name: string): void {
    this.name = name;
  }

  setEmail(email: string): void {
    this.email = email;
  }
}

export { User };
