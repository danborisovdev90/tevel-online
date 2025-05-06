"use client";

import { useState } from "react";
import { RightPart } from "../components/layout/right-part/right-part";
import { StepComponent } from "../components/step-component/step-component";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function CreditCheckPage() {
  const [step, setStep] = useState(1);
  return (
    <section className="flex flex-1  bg-gray-100 overflow-x-hidden">
      <div className="p-8 hidden justify-center items-center lg:flex lg:w-1/2 bg-gray-100 xl:w-2/5">
        <RightPart />
      </div>
      <div className="mt-14 rounded-t-[20px] bg-white pt-6 pb-32 mx-auto w-full lg:w-1/2 relative lg:mt-0 lg:pt-0 lg:rounded-none xl:w-3/5 font-[rubik]">
        <div className="flex flex-col">
          <div className="heading flex flex-col gap-4">
            <img
              src="images/logo.svg"
              className="w-[109px] mx-auto hidden xl:block xl:mt-14"
              alt=""
            />
            <h1 className="text-center text-4xl font-bold text-red">
              בדיקת חיווי האשראי שלך עברה בהצלחה
            </h1>
            <h2 className="text-center text-4xl ">
              יש לך אישור עקרוני לקבלת מימון לרכב החדש שלך!
            </h2>
            <h3 className="text-center">
              עוד <strong> 2 שלבים </strong>וסיימנו. מבטיחים שזה יהיה קצר
            </h3>
          </div>
          <div className="flex justify-center mt-14 text-xl order-first lg:mt-0 lg:w-full">
            <StepComponent stepCount={step} />
          </div>
          <Button
            variant="contained"
            sx={{
              background: "var(--gradient-primary)",
              padding: "8px 30px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight: "bold",
              borderRadius: "9px",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "29px",
            }}
            className=" lg:w-auto"
          >
            <span>המשך</span>
            <ArrowBackIcon />
          </Button>
          <img
            className="mx-auto lg:absolute lg:-left-20 lg:bottom-0"
            src="images/car-bg.png"
          />
        </div>
      </div>
    </section>
  );
}
