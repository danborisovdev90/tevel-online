import { InputAdornment, Slider, TextField } from "@mui/material";

interface FormSliderProps {
  value: number;
  setValue: (value: number) => void;
  min: number;
  max: number;
  label: string;
}

export const FormSlider: React.FC<FormSliderProps> = ({
  value,
  setValue,
  min,
  max,
  label,
}) => {
  return (
    <div>
      <div className="w-full flex items-center justify-between">
        <strong className="text-base font-rubik font-bold">{label}</strong>
        <TextField
          type="number"
          value={value.toLocaleString()}
          className="text-left w-[151px] text-base font-rubik font-bold"
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="start"
                sx={{
                  marginRight: "3px",
                }}
              >
                <span className="font-bold text-base text-foreground text-left">
                  ₪
                </span>
              </InputAdornment>
            ),
            startAdornment: (
              <InputAdornment position="end">
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
                paddingLeft: "0",
                paddingRight: "0",
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "left",
                "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
                  WebkitAppearance: "none",
                  margin: 0,
                },
                "&[type=number]": {
                  MozAppearance: "textfield",
                },
              },
            },
            onChange: (e) => setValue(Number(e.target.value)),
          }}
        />
      </div>
      <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
        value={value}
        onChange={(e, v) => setValue(v)}
        min={min}
        max={max}
        className="mt-4"
        sx={{
          "& .MuiSlider-rail": {
            backgroundColor: "#E1E1E1",
            opacity: 1,
          },
          "& .MuiSlider-track": {
            backgroundColor: "#FF3434",
          },
          "& .MuiSlider-thumb": {
            backgroundColor: "#fff",
            width: "16px",
            height: "16px",
            border: "3px solid #FF3434",
            filter: "drop-shadow(0px 3.021px 3.021px rgba(0, 0, 0, 0.25))",
          },
          "& .MuiSlider-valueLabel": {
            display: "none",
          },
        }}
      />
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start">
          <span className="text-base font-rubik text-red font-bold">₪</span>
          <span className="text-base font-rubik text-red font-bold">
            {min.toLocaleString()}
          </span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-base font-rubik text-red font-bold">₪</span>
          <span className="text-base font-rubik text-red font-bold">
            {max.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};
