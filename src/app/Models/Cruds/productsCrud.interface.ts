export interface productsCrudsI {
  id:number,
  name:string,
  description:string,
  image:string,
  clasificationId:number,
  discount?:number,
  startDiscount?:number,
  endDiscount?:number,
  brandId:number,
  isActive:boolean,
  presentations:Array<any>,
  images:Array<any>
}
