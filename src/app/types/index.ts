export type CarDataType = {
  brand: string;
  model: string;
  year: number;
  image: string;
  mileage: number;
  price: number;
  label: string;
  date: string;
};

export type PaymentDataType = {
  startPayment: number;
  finalPayment: number;
  selectedInstallment: number;
  monthlyPayment: number;
};
