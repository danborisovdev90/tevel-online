"use client";

import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { theme } from "./theme";
import { createContext, useState } from "react";
import { CarDataType, PaymentDataType } from "./types";

export type PaymentsContextType = {
  paymentData: PaymentDataType;
  setPaymentData: (paymentData: PaymentDataType) => void;
  carData: CarDataType;
  setCarData: (carData: CarDataType) => void;
};

const defaultPaymentData: PaymentDataType = {
  startPayment: 30000,
  finalPayment: 15000,
  selectedInstallment: 24,
  monthlyPayment: 0,
};

const defaultCarData: CarDataType = {
  brand: "טויוטה",
  model: "היילנדר",
  year: 2021,
  date: "11-2021",
  image: "images/car-image.jpg",
  price: 165000,
  mileage: 10000,
  label: "images/logo-toyota.png",
};

export const PaymentsContext = createContext<PaymentsContextType>({
  paymentData: defaultPaymentData,
  setPaymentData: () => {},
  carData: defaultCarData,
  setCarData: () => {},
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [paymentData, setPaymentData] =
    useState<PaymentDataType>(defaultPaymentData);
  const [carData, setCarData] = useState<CarDataType>(defaultCarData);

  return (
    <AppRouterCacheProvider options={{ key: "css", prepend: true }}>
      <ThemeProvider theme={theme}>
        <PaymentsContext.Provider
          value={{ paymentData, setPaymentData, carData, setCarData }}
        >
          {children}
        </PaymentsContext.Provider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
