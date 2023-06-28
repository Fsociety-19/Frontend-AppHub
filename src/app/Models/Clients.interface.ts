export interface ClientsModel {
  createdAt: string;
  email: string;
  id: number;
  password: string;
  role: string;
  status: boolean;
  tokenConfirmation: string;
  tokenRecovery: string;
}

export interface ClientResponseModel {
  users: ClientsModel[];
}
