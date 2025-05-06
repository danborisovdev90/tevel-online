"use client";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Box,
} from "@mui/material";
import { useState } from "react";

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  "ינואר",
  "פברואר",
  "מרץ",
  "אפריל",
  "מאי",
  "יוני",
  "יולי",
  "אוגוסט",
  "ספטמבר",
  "אוקטובר",
  "נובמבר",
  "דצמבר",
];
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

export const DateSelectFields: React.FC = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: SelectChangeEvent) => {
      setter(event.target.value);
    };

  return (
    <Box display="flex" gap={2} dir="rtl">
      <Select
        labelId="day-label"
        value={day}
        displayEmpty
        fullWidth
        onChange={handleChange(setDay)}
      >
        <MenuItem value={""}>יום</MenuItem>
        {days.map((d) => (
          <MenuItem key={d} value={d}>
            {d}
          </MenuItem>
        ))}
      </Select>

      <Select
        labelId="month-label"
        value={month}
        displayEmpty
        fullWidth
        onChange={handleChange(setMonth)}
      >
        <MenuItem value={""}>חודש</MenuItem>
        {months.map((m, i) => (
          <MenuItem key={i} value={i + 1}>
            {m}
          </MenuItem>
        ))}
      </Select>

      <Select
        labelId="year-label"
        value={year}
        displayEmpty
        fullWidth
        onChange={handleChange(setYear)}
      >
        <MenuItem value={""}>שנה</MenuItem>
        {years.map((y) => (
          <MenuItem key={y} value={y}>
            {y}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};
