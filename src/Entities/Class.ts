import ITeacher from "./Teacher";

interface IClass {
    id: number;
    name: string;
    description: string;
    date: Date;
    teacher: ITeacher;
    group: string;
}

export default IClass;