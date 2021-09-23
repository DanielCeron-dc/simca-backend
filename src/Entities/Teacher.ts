import IPerson from "./Person";

interface ITeacher extends IPerson {
    Teacherid: number;
    name: string;
    email: string;
    salary: number;
    age: number;
}

export default ITeacher;