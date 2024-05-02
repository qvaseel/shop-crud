export type FormValues = {
  title: string;
  description: string;
  category: string;
  price: number;
  amount: number;
  pictureUrl: string;
  _id: any;
};

export interface ProductData {
  _id: any;
  title: string;
  description: string;
  category: string;
  price: number;
  pictureUrl?: any;
  amount: number;
}
