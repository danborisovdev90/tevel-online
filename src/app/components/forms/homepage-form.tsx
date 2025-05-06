import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Icon,
  InputLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import FormField from "./form-field";
import { DateSelectFields } from "./date-select-field";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const HomepageForm = () => {
  return (
    <div className="px-4 pt-9 pb-5 max-w-[716px] mx-auto w-full">
      <form className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-8">
        <Box className="w-full xl:w-1/2">
          <FormField
            id="name"
            label={
              <>
                <strong>שם פרטי</strong>
                <span className="text-red-500"> *</span> (כמו שמופיע בת.ז)
              </>
            }
          >
            <TextField
              required
              id="name"
              variant="outlined"
              className="w-full text-right"
              placeholder="דוגמא"
            />
          </FormField>
          <FormField
            id="last-name"
            label={
              <>
                <strong>שם משפחה</strong>
                <span className="text-red-500"> *</span>
                (כמו שמופיע בת.ז)
              </>
            }
          >
            <TextField
              required
              id="last-name"
              variant="outlined"
              className="w-full text-right"
              placeholder="דוגמא"
            />
          </FormField>
          <FormField
            id="email"
            label={
              <>
                <strong>מספר תעודת זהות</strong>
                <span className="text-red-500"> *</span>
              </>
            }
          >
            <TextField
              required
              id="id-number"
              variant="outlined"
              className="w-full text-right"
              placeholder="דוגמא"
            />
          </FormField>
          <Box className="flex items-center gap-4 mb-4">
            <InputLabel htmlFor={"gender"} className="m-0">
              <strong>מין</strong>
            </InputLabel>
            <RadioGroup sx={{ flexDirection: "row" }} name="gender">
              <FormControlLabel value="male" control={<Radio />} label="זכר" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="נקבה"
              />
            </RadioGroup>
          </Box>
        </Box>
        <Box className="w-full xl:w-1/2">
          <FormField
            id="date-of-birth"
            label={
              <>
                <strong>תאריך לידה</strong>
                <span className="text-red-500"> *</span>
              </>
            }
          >
            <DateSelectFields />
          </FormField>
          <FormField
            id="phone-number"
            label={
              <>
                <strong>טלפון נייד</strong>
                <span className="text-red-500"> *</span>
              </>
            }
          >
            <TextField
              required
              id="phone-number"
              variant="outlined"
              className="w-full text-right"
              placeholder="דוגמא"
              type="number"
            />
          </FormField>
          <FormField
            id="email"
            label={
              <>
                <strong>אימייל</strong>
                <span className="text-red-500"> *</span>
              </>
            }
          >
            <TextField
              required
              id="email"
              variant="outlined"
              className="w-full text-right"
              placeholder="example@gmail.com"
            />
          </FormField>
          <div className="flex items-center gap-2 justify-end -mt-4">
            <span className="text-red-500">*</span>
            <strong>שדה חובה</strong>
          </div>
          <Box flexDirection={"column"} display={"flex"}>
            <FormControlLabel
              control={<Checkbox sx={{ padding: "0 0 0 6px" }} className="" />}
              name="receive-marketing-emails"
              label="אישור לקבלת מידע פרסומי"
              className="underline mb-4"
              sx={{ marginRight: 0 }}
            />
            <FormControlLabel
              control={<Checkbox sx={{ padding: "0 0 0 6px" }} className="" />}
              name="credit-check"
              label="אישור לביצוע בדיקת חיווי אשראי "
              className="underline"
              sx={{ marginRight: 0 }}
            />
          </Box>
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
              marginTop: "20px",
            }}
            className="w-full lg:w-auto"
          >
            <span>בואו נתקדם</span>
            <ArrowBackIcon />
          </Button>
        </Box>
      </form>
    </div>
  );
};
