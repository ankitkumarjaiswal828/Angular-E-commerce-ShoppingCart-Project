export interface Product {
    id: number;
    product_name: string;
    product_price: number;
    product_quantity: number;
    product_Description: string;
    product_img: string;

}
// user.model.ts
export interface User {
    name:string,
    username: string;
    password: string;
}
