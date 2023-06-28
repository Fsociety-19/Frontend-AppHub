export interface OrderModel {
  address: string;
  createdAt: string;
  customer: Customer;
  id: number;
  paymentMethod: PaymentMethod;
  status: number;
}

interface PaymentMethod {
  name: string;
}

interface Customer {
  lastName: string;
  name: string;
}
