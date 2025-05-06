import { InputLabel, Box } from "@mui/material";
import React from "react";

interface FormFieldProps {
  id: string;
  label: React.ReactNode; // теперь поддерживает теги, JSX и строки
  children: React.ReactNode;
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  children,
  className = "",
}) => (
  <Box className={`mb-4 w-full text-right ${className}`}>
    <InputLabel htmlFor={id} className="mb-1 block">
      {label}
    </InputLabel>
    {children}
  </Box>
);

export default FormField;
