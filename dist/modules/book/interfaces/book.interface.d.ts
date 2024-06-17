export interface Book {
    _id: string;
    title: string;
    description: string;
    authorId: string;
    publishedDate: Date;
    authorData?: AuthorData;
}
export interface AuthorData {
    _id: string;
    name: string;
    biography: string;
    birthdate: Date;
}
