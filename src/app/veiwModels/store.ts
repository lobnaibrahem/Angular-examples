export class Store {
    Name:string;
    Branches:any[];
    Logo:string;

    constructor(name:string , branch:any[] , logo:string){
        this.Name = name;
        this.Branches =branch;
        this.Logo = logo;
    }


}
