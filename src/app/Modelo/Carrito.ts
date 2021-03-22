import { Producto } from "./Producto";
import { User } from "./User";

export class Carrito{
    user:User = new User;
    total:number = 0;
    items:item[] = [];
}

export class item{
    producto:Producto = new Producto();
    cantidad:number = 0;
}