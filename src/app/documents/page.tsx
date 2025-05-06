"use client";

import { Button, Checkbox, FormControlLabel } from "@mui/material";
import Dropzone from "react-dropzone";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { CarInfoComponent } from "../components/car-info-component/car-info-component";
import { CarDataType } from "../types";
import { useContext, useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { PaymentsContext } from "../providers";

export default function DocumentsPage() {
  const [isMobile, setIsMobile] = useState(false);
  const { carData, paymentData } = useContext(PaymentsContext);
  useEffect(() => {
    setIsMobile(window.innerWidth <= 1023);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="flex flex-1 bg-gray-100 px-5 relative z-10 lg:py-6 lg:px-10 xl:px-20">
      <div className="flex w-full justify-center lg:gap-24 lg:w-full lg:justify-center lg:bg-white lg:pt-[112px] lg:pb-16 ">
        {!isMobile && (
          <CarInfoComponent
            car={{ ...carData, ...paymentData }}
            pageType={"documents"}
          />
        )}
        <div className=" bg-white pt-6 pb-14 rounded-[20px] mt-10 -mb-20 w-full lg:mb-0 lg:w-3/5 lg:max-w-[680px] lg:mt-0">
          <div className="flex flex-col items-center px-2">
            <img className="lg:hidden" src="images/logo.svg" alt="" />
            <h1 className="text-center text-red text-3xl font-bold lg:text-[40px] font-rubik lg:text-right">
              כעת יש כמה פרטים ומסמכים שאנו צריכים כדי להגיש עבורך בקשה למימון
            </h1>
          </div>
          <div className="relative mt-10 slider">
            <Swiper
              spaceBetween={15}
              slidesPerView={"auto"}
              className="w-full flex justify-center"
              dir="rtl"
              centeredSlides={true}
              pagination={true}
              modules={[Pagination]}
              breakpoints={{
                1024: {
                  slidesPerView: 2,
                  pagination: false,
                  spaceBetween: 24,
                  enabled: false,
                  centeredSlides: false,
                },
              }}
            >
              <SwiperSlide className=" max-w-[315px] ">
                <div className="bg-light-blue rounded-t-xl py-7 px-7 flex items-center gap-5 border border-blue border-b-0">
                  <strong className="text-xl font-rubik font-bold">
                    רשיון נהיגה
                  </strong>
                  <FormControlLabel
                    control={
                      <Checkbox sx={{ padding: "0 0 0 6px" }} className="" />
                    }
                    label="אין לי גישה למסמך זה כעת"
                    className="font-bold font-hebrew"
                    sx={{ marginRight: 0, span: { fontSize: "11px" } }}
                  />
                </div>
                <Dropzone>
                  {({ getRootProps, getInputProps }) => (
                    <div
                      {...getRootProps()}
                      className="flex flex-col items-center justify-center h-full border border-dashed border-blue border-t-0 rounded-b-xl pt-4 pb-6 px-4"
                    >
                      <input {...getInputProps()} />
                      <span className="px-4 py-3.5 rounded-full bg-blue-shade ">
                        <img src="images/icons/upload.svg" alt="" />
                      </span>
                      <p className="mt-4 font-[poppins] text-xs">
                        לחצו לצילום / העלאת תמונה
                      </p>
                    </div>
                  )}
                </Dropzone>
              </SwiperSlide>
              <SwiperSlide className=" max-w-[315px] ">
                <div className="bg-light-blue rounded-t-xl py-7 px-7 flex items-center gap-5 border border-blue border-b-0">
                  <strong className="text-xl font-rubik font-bold">
                    רשיון נהיגה
                  </strong>
                  <FormControlLabel
                    control={
                      <Checkbox sx={{ padding: "0 0 0 6px" }} className="" />
                    }
                    label="אין לי גישה למסמך זה כעת"
                    className="font-bold font-hebrew"
                    sx={{ marginRight: 0, span: { fontSize: "11px" } }}
                  />
                </div>
                <Dropzone>
                  {({ getRootProps, getInputProps }) => (
                    <div
                      {...getRootProps()}
                      className="flex flex-col items-center justify-center h-full border border-dashed border-blue border-t-0 rounded-b-xl pt-4 pb-6 px-4"
                    >
                      <input {...getInputProps()} />
                      <span className="px-4 py-3.5 rounded-full bg-blue-shade ">
                        <img src="images/icons/upload.svg" alt="" />
                      </span>
                      <p className="mt-4 font-[poppins] text-xs">
                        לחצו לצילום / העלאת תמונה{" "}
                      </p>
                    </div>
                  )}
                </Dropzone>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="px-4 flex justify-center lg:px-6">
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
                marginTop: "59px",
              }}
              className=" lg:w-auto lg:!mr-auto "
            >
              <span>בואו נתקדם</span>
              <ArrowBackIcon />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
