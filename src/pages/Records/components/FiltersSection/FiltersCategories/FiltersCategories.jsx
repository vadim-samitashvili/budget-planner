import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const FiltersCategories = ({
  filters,
  categories,
  handleChangeCategory,
}) => {
  return (
    <Accordion
      disabled={!Boolean(categories.length)}
      sx={{
        margin: "0",
        boxShadow: "none",
        "&.Mui-expanded": { margin: "0" },
        "&::before": { backgroundColor: "transparent" },
        "&.Mui-disabled": { backgroundColor: "transparent" },
      }}
    >
      <AccordionSummary
        sx={{
          padding: "0",
          "&.Mui-expanded": { minHeight: "48px" },
          ".MuiAccordionSummary-content.Mui-expanded": { margin: "0" },
        }}
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography>Category</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: "0" }}>
        <FormControl component="fieldset">
          <RadioGroup value={filters.category}>
            {categories.map((category) => (
              <FormControlLabel
                key={category.id}
                value={category.id}
                control={<Radio />}
                label={category.title}
                onChange={handleChangeCategory}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </AccordionDetails>
    </Accordion>
  );
};
