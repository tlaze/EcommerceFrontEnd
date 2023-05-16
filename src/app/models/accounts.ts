import { Product } from './products';

export interface Account{
  id?:number,
  username?: string,
  password?: string,
  balance?:number,
  isLoggedIn?:boolean
  cart?:Product[];
}
