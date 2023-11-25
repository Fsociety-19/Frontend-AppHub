export interface RegisterI {
  email: string;
  password: string;
  role: string;
  customer: RegistroModel;
}

interface RegistroModel {
  name: string;
  lastName: string;
  phone: string;

}

export interface LoginI {
  email:string;
  password: string;
}

export interface AuthI {
  payload: string;
  extendsI: string;
}

export interface AppointmentI {
  reason:string;
  detail: string;
}

