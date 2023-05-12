import { User } from "./User.model";

export class Response{
    page: number | undefined;
    per_page: number | undefined;;
    total: number | undefined;
    data!: User[];
}