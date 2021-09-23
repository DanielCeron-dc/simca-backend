import IPerson from "./Person";
import IProgram from "./Program";

interface IStudent extends IPerson {
    StudentId: number;
    email: string;
    birthDate: Date;
    state: string;
    program: IProgram[];
}

export default IStudent;
