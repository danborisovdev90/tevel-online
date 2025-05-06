import { CodeInput } from "./CodeInput";

export const SmsForm = () => {
  return (
    <div className="rounded-t-2xl rounded-b-md bg-white pt-20 pb-32 font-[poppins] border border-gray-400 max-w-[608px] w-11/12 mx-auto lg:rounded-[20px] shadow-primary xl:pt-36 xl:pb-40">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-foreground text-lg font-bold text-center">
          Insert FirstName, שלחנו לך קוד אימות לטלפון
        </h2>
        <div className="row flex gap-2 items-baseline">
          <span className="text-foreground text-lg">050-*****67</span>
          <span className="underline text-sm text-gray-300">
            זה לא המספר שלי
          </span>
        </div>
        <h3 className="text-foreground text-lg text-center">מה הקוד שקיבלת?</h3>
        <div className="flex flex-col gap-2">
          <CodeInput />
        </div>
        <span className="underline text-lg text-foreground">שלחו שוב</span>
      </div>
    </div>
  );
};
