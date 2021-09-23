import ISubject from "./Subject";

interface ISemester {
    id: number;
    name: string;
    subjects: ISubject[];
    startDate: Date;
    endDate: Date;
}

export default ISemester;