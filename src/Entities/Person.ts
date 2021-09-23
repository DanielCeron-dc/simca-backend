import IAdress from './IAdress';


interface IPerson {
    name: string;
    age: number;
    sex: string;
    identification: number;
    indentificationType: string;
    expeditionCity: string;
    adress: IAdress; 
}

export default IPerson; 