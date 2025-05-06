"use client";

import { TextField, TextFieldProps } from "@mui/material";
import { useState, useRef } from "react";

interface CodeInputProps extends Omit<TextFieldProps, "onChange"> {
  onChange?: (value: string) => void;
}

export function CodeInput({ onChange, ...props }: CodeInputProps) {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value.replace(/[^0-9]/g, "");
    setCode(newCode);
    onChange?.(newCode.join(""));

    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex gap-2">
      {code.map((digit, index) => (
        <TextField
          key={index}
          {...props}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          inputRef={(el) => (inputs.current[index] = el)}
          sx={{
            "& .MuiInputBase-root": {
              width: "44px",
              height: "44px",
            },
            "& .MuiInputBase-input": {
              textAlign: "center",
              fontSize: "16px",
              padding: "10px 12px",
            },
          }}
          inputProps={{
            maxLength: 1,
            inputMode: "numeric",
            pattern: "[0-9]*",
          }}
        />
      ))}
    </div>
  );
}
