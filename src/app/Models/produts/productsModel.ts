export interface ProductsModel{
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
  iva: any,
  presentations:Array<any>,
  images:Array<any>,
  val: number,
  pSelect: any
}

export interface ProductWeigth{
  name:string;
  code:number;
}

export interface ProductsLocalModel{
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
  iva: any,
  images:Array<any>
  val:any
}

export interface CartModels {
  presentationProductCode: string;
  amount: number;
}
