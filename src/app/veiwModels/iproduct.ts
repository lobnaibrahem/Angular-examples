export interface IProduct {
    id:number;
    Name:string;
    Quantity:number;
    Price:number;
    Img:string;
    CateogryID:number;
 
}
export enum DiscountOffers {
    no="No Discount",
    ten= "10%",
    fiften="15%"
 }
