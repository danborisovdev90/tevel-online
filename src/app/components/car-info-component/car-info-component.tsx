import Link from "next/link";
import Image from "next/image";
import { CarDataType, PaymentDataType } from "@/app/types";
import cn from "classnames";

export const CarInfoComponent = ({
  car,
  pageType,
}: {
  car: CarDataType & PaymentDataType;
  pageType: string;
}) => {
  return (
    <div
      className={cn(
        "hidden  border-gray-500 border rounded-md py-3.5 px-4 lg:flex lg:flex-col",
        pageType === "car-info" && "max-w-[542px] w-1/2 h-auto",
        pageType === "documents" && "max-w-[400px] w-2/5 h-fit"
      )}
    >
      <ul>
        <li className="flex flex-col gap-1 border-b border-b-gray-200 py-1">
          <strong className="text-foreground text-base font-rubik font-bold">
            יצרן
          </strong>
          <span className="font-rubik text-foreground text-sm">
            {car.brand}
          </span>
        </li>
        <li className="flex flex-col gap-1 border-b border-b-gray-200 py-1">
          <strong className="text-foreground text-base font-rubik font-bold">
            שנה
          </strong>
          <span className="font-rubik text-foreground text-sm">{car.year}</span>
        </li>
        <li className="flex flex-col gap-1  py-1">
          <strong className="text-foreground text-base font-rubik font-bold">
            דגם
          </strong>
          <span className="font-rubik text-foreground text-sm">
            {car.model}
          </span>
        </li>
      </ul>
      <div className="px-4">
        <img
          className="mx-auto max-h-[148px] my-2.5 w-full object-contain"
          src={car.image}
          alt="Car image"
          width={366}
          height={148}
        />
      </div>
      {pageType === "documents" && (
        <>
          <div className="flex gap-3">
            <div className="item flex flex-col items-center p-[7px] rounded-[3.35px] w-[110px] border border-gray-400">
              <img
                className="w-[26px] mb-2"
                src="images/icons/loan-amount-icon.svg"
                alt=""
              />
              <span className="font-rubik text-[15px] text-foreground text-center">
                סכום ההלוואה
              </span>
              <strong className="text-[15px] font-rubik font-bold text-blue">
                {car.price.toLocaleString("en-US")}
              </strong>
            </div>
            <div className="item flex flex-col items-center p-[7px] rounded-[3.35px] w-[110px] border border-gray-400">
              <img
                className="w-[26px] mb-2"
                src="images/icons/amount-refund-icon.svg"
                alt=""
              />
              <span className="font-rubik text-[15px] text-foreground text-center">
                גובה ההחזר
              </span>
              <strong className="text-[15px] font-rubik font-bold text-green">
                {car.monthlyPayment.toLocaleString("en-US")}
              </strong>
            </div>
            <div className="item flex flex-col items-center p-[7px] rounded-[3.35px] w-[110px] border border-gray-400">
              <img
                className="w-[26px] mb-2"
                src="images/icons/calendar-icon.svg"
                alt=""
              />
              <span className="font-rubik text-[15px] text-foreground text-center">
                מספר תשלומים
              </span>
              <strong className="text-[15px] font-rubik font-bold">
                {car.selectedInstallment}
              </strong>
            </div>
          </div>
          <Link
            className="w-[353px] flex justify-center items-center rounded-xs border border-gray-400 mt-2 py-2 font-rubik text-foreground text-lg"
            href="/find-car"
          >
            <strong>שינוי תנאים / בדיקת רכב אחר</strong>
          </Link>
        </>
      )}

      {pageType === "car-info" && (
        <div className="flex flex-col flex-1 justify-end">
          <div className="flex justify-center gap-2">
            <span className="text-red font-rubik text-base">
              מחירון לוי יצחק
            </span>
            <strong className="text-red font-rubik text-base">
              ₪{car.price.toLocaleString("en-US")}
            </strong>
          </div>
          <Link
            className="bg-pink border border-red rounded-xs py-4 px-6 w-full flex justify-center text-red font-rubik text-[18px] font-bold "
            href="/find-car"
          >
            בדיקת רכב אחר
          </Link>
        </div>
      )}
    </div>
  );
};
