"use client";

import { Button, InputAdornment, TextField } from "@mui/material";
import { useContext, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { PaymentsContext } from "../providers";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import Link from "next/link";

export default function FindCarPage() {
  const [value, setValue] = useState("");
  const [isFindedCar, setIsFindedCar] = useState(false);
  const { carData } = useContext(PaymentsContext);

  const handleSubmit = () => {
    setIsFindedCar(true);
  };

  const handleCancel = () => {
    setIsFindedCar(false);
    setValue("");
  };

  return (
    <section className="flex flex-1 bg-gray-100 px-5 relative z-10 lg:py-6 lg:px-10 xl:px-20">
      <div className="container flex-1 flex flex-col justify-center items-center rounded-[5px] bg-white py-20 -mb-20 lg:mb-0">
        {!isFindedCar ? (
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-red text-3xl font-rubik font-bold text-center lg:text-[40px]">
              על איזה רכב אנחנו מדברים?
            </h2>
            <p className="font-poppins text-foreground text-lg text-center font-bold">
              יש להקליד את מספר הרישוי של הרכב
            </p>
            <form className="flex flex-col gap-4">
              <TextField
                type="text"
                value={value}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="end" className="mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_360_8852)">
                          <path
                            d="M3.3464 12.2841C3.37988 12.2841 3.41337 12.2805 3.44685 12.2752L6.2627 11.7484C6.29618 11.7412 6.32799 11.7252 6.35142 11.6984L13.448 4.12874C13.4635 4.11222 13.4758 4.0926 13.4842 4.071C13.4926 4.0494 13.4969 4.02624 13.4969 4.00285C13.4969 3.97946 13.4926 3.95631 13.4842 3.9347C13.4758 3.9131 13.4635 3.89348 13.448 3.87696L10.6656 0.907316C10.6338 0.873387 10.5919 0.85553 10.5467 0.85553C10.5015 0.85553 10.4597 0.873387 10.4279 0.907316L3.33133 8.47696C3.30622 8.50375 3.29116 8.53589 3.28446 8.5716L2.7906 11.5752C2.77431 11.6708 2.78013 11.7693 2.80755 11.862C2.83497 11.9547 2.88317 12.0389 2.94796 12.1073C3.05845 12.2216 3.19741 12.2841 3.3464 12.2841ZM4.47475 9.16982L10.5467 2.69482L11.7739 4.00374L5.70187 10.4787L4.21359 10.7591L4.47475 9.16982ZM13.7644 13.7841H1.44294C1.14662 13.7841 0.907227 14.0395 0.907227 14.3555V14.9984C0.907227 15.077 0.967494 15.1412 1.04116 15.1412H14.1662C14.2398 15.1412 14.3001 15.077 14.3001 14.9984V14.3555C14.3001 14.0395 14.0607 13.7841 13.7644 13.7841Z"
                            fill="#1F2937"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_360_8852">
                            <rect
                              width="15"
                              height="16"
                              fill="white"
                              transform="translate(0.103516)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </InputAdornment>
                  ),
                  value: value,
                  sx: {
                    "& .MuiOutlinedInput-input": {
                      paddingLeft: "12px",
                      paddingRight: "12px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      textAlign: "left",
                    },
                  },
                  onChange: (e) => setValue(e.target.value),
                }}
                className="text-left text-base font-rubik font-bold bg-orange-100 !border !border-orange rounded-sm w-[240px] py-2.5"
              />
              <Button
                onClick={handleSubmit}
                variant="contained"
                sx={{
                  background: "var(--gradient-primary)",
                  padding: "8px 30px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontWeight: "bold",
                  borderRadius: "9px",
                  marginTop: "26px",
                }}
                className=" lg:w-auto lg:!mr-auto h-[61px]"
              >
                <span>הצג את פרטי ושווי הרכב</span>
                <ArrowBackIcon />
              </Button>
            </form>
          </div>
        ) : (
          <div>
            <div>
              <img className="mx-auto w-[156px]" src={carData.label} alt="" />
              <h2 className="text-2xl font-rubik font-bold text-red text-center lg:text-[40px]">
                {carData.brand}
              </h2>
              <h2 className="text-2xl font-rubik text-red text-center lg:text-[40px]">
                {carData.model} {carData.year}
              </h2>
              <h3 className="text-2xl font-poppins tracking-[8.6px] lg:text-[27px] text-center border border-orange font-medium px-4 py-3 w-[240px] mx-auto rounded-sm">
                {value}
              </h3>
              <p className="flex gap-5 py-2 justify-center">
                <span className="font-rubik text-lg text-black text-center">
                  מועד עלייה לכביש{" "}
                </span>
                <span className="font-rubik text-lg text-black text-center">
                  {carData.date}
                </span>
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-center font-bold text-lg lg:text-[20px] font-rubik px-4 py-3 w-[240px] mx-auto rounded-sm">
                ממצאי בדיקת בלקר
              </h3>
              <div className="max-w-[560px] border border-blue rounded-sm py-6 px-6">
                <div className="flex gap-2 items-center mb-4">
                  <ErrorOutlineOutlinedIcon
                    fontSize="large"
                    className="text-blue"
                  />
                  <div>
                    <h4 className="font-rubik text-base text-black lg:text-[20px]">
                      רכב זה ממושכן לטובת כלמוביל פתרונות מימון לרכב בע״מ
                    </h4>
                    <p className="font-poppins text-[15px] text-blue lg:text-[18px]">
                      לרכב זה נמצא משכון פעיל! פירוש הדבר שיהיה ניתן לעקל את
                      הרכב גם לאחר העברת בעלות. יש להסיר את המשכון לפני העברת
                      בעלות
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <ErrorOutlineOutlinedIcon
                    fontSize="large"
                    className="text-blue"
                  />
                  <div>
                    <h4 className="font-rubik text-base text-black lg:text-[20px]">
                      רכב זה ממושכן לטובת כלמוביל פתרונות מימון לרכב בע״מ
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center lg:flex-row-reverse mt-10 gap-8">
              <Link
                href="/car-info"
                className="bg-gradient-to-r from-[#FF3434] to-[#B62B2B] h-[61px]  px-14 py-4 flex items-center text-base gap-2 font-bold rounded-[9px] lg:w-auto text-white"
              >
                <span>המשך</span>
                <ArrowBackIcon />
              </Link>
              <Button
                onClick={handleCancel}
                variant="contained"
                sx={{
                  background: "transparent",
                  padding: "8px 30px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontWeight: "bold",
                  borderRadius: "9px",
                  fontSize: "16px",
                  border: "1px solid var(--color-orange)",
                  color: "var(--foreground)",
                }}
                className=" lg:w-auto  h-[61px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_360_8852)">
                    <path
                      d="M3.3464 12.2841C3.37988 12.2841 3.41337 12.2805 3.44685 12.2752L6.2627 11.7484C6.29618 11.7412 6.32799 11.7252 6.35142 11.6984L13.448 4.12874C13.4635 4.11222 13.4758 4.0926 13.4842 4.071C13.4926 4.0494 13.4969 4.02624 13.4969 4.00285C13.4969 3.97946 13.4926 3.95631 13.4842 3.9347C13.4758 3.9131 13.4635 3.89348 13.448 3.87696L10.6656 0.907316C10.6338 0.873387 10.5919 0.85553 10.5467 0.85553C10.5015 0.85553 10.4597 0.873387 10.4279 0.907316L3.33133 8.47696C3.30622 8.50375 3.29116 8.53589 3.28446 8.5716L2.7906 11.5752C2.77431 11.6708 2.78013 11.7693 2.80755 11.862C2.83497 11.9547 2.88317 12.0389 2.94796 12.1073C3.05845 12.2216 3.19741 12.2841 3.3464 12.2841ZM4.47475 9.16982L10.5467 2.69482L11.7739 4.00374L5.70187 10.4787L4.21359 10.7591L4.47475 9.16982ZM13.7644 13.7841H1.44294C1.14662 13.7841 0.907227 14.0395 0.907227 14.3555V14.9984C0.907227 15.077 0.967494 15.1412 1.04116 15.1412H14.1662C14.2398 15.1412 14.3001 15.077 14.3001 14.9984V14.3555C14.3001 14.0395 14.0607 13.7841 13.7644 13.7841Z"
                      fill="#1F2937"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_360_8852">
                      <rect
                        width="15"
                        height="16"
                        fill="white"
                        transform="translate(0.103516)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span>שינוי מס׳ הרכב</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
