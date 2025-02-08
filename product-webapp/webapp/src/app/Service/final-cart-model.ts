import { ProductModel } from "./product-model";

export class FinalCartModel {
    id: string;
    customerEmail: string;
    cartProducts:  Map<string,ProductModel>;
    productQuantity: Map<string,number> ;
    totalItems: number;
    totalCartValue: number;

    constructor(){
        this.id="";
        this.cartProducts= new Map<string,ProductModel>();
        this.productQuantity= new Map<string,number>();
        this.customerEmail="";
        this.totalItems=0;
        this.totalCartValue=0;
        

    }
}
