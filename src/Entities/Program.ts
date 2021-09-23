import IPensum from "./Pensum";

interface IProgram {
    id: number;
    name: string;
    description: string;
    duration: string;
    pensum: IPensum; 
}

export default IProgram;