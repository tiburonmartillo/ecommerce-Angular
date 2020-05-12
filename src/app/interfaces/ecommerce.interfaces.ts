export interface BrandInterface{
    id:number;
    brand:string;
}
export interface DepartmentsInterface{
    id:number;
    department:string;
}
export interface ProductsInterface{
    id:number;
    brand:number;
    department:number;
    model:string;
    description:Array<string>;
    rating:number;
    price:number;
    msi:boolean;
    meses?:Array<number>;
    img:string;
}