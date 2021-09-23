import ISemester from "./Semester";

interface IPensum {
    id: number;
    name: string;
    semesters: ISemester[];
}

export default IPensum;
