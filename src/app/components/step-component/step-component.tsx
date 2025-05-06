import CheckIcon from "@mui/icons-material/Check";
import cn from "classnames";

const steps = [
  { step: 1, label: "בדיקת זכאות" },
  { step: 2, label: "פרטי הרכב" },
  { step: 3, label: "פרטי ההלוואה" },
];

const Step = ({
  step,
  label,
  active,
}: {
  step: number;
  label: string;
  active: boolean;
}) => {
  const activeItemClasses = "text-red";
  const inactiveItemClasses = "text-gray-300";
  return (
    <div
      className={cn(
        "flex items-center gap-2",
        active ? activeItemClasses : inactiveItemClasses
      )}
    >
      <span
        className={cn(
          "rounded-full w-[20px] h-[20px] text-sm text-white flex items-center justify-center",
          active ? "bg-red" : "bg-foreground"
        )}
      >
        {step}
      </span>
      {active && <CheckIcon />}
      <strong>{label}</strong>
    </div>
  );
};

export const StepComponent: React.FC<{ stepCount: number }> = ({
  stepCount,
}) => {
  return (
    <div className="max-w-[240px] bg-pink lg:max-w-full w-full">
      <div className="flex flex-col gap-5 px-4 mb-7 font-[poppins] lg:flex-row lg:justify-between lg:py-6 lg:mb-0 xl:px-20">
        {steps.map((step) => (
          <Step
            key={step.step}
            step={step.step}
            label={step.label}
            active={stepCount >= step.step}
          />
        ))}
      </div>
      <div className="flex w-full bg-foreground">
        {steps.map((step) => {
          if (step.step <= stepCount) {
            return <div key={step.step} className="w-1/3 h-[2px] bg-red"></div>;
          }
        })}
      </div>
    </div>
  );
};
