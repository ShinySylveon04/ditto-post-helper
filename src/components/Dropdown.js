import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

const styles = {
  container: {
    marginTop: "1rem",
    marginBottom: "1rem"
  },
  select: {
    "&:focus": {
      backgroundColor: "inherit"
    }
  }
};

const Dropdown = ({ options, classes, onChange, name, id, label }) => {
  const { container: containerClassName, ...selectClasses } = classes;

  return (
    <div className={containerClassName}>
      <FormControl required style={{ minWidth: "130px", maxWidth: "400px" }}>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Select
          fullWidth
          native
          onChange={onChange}
          classes={selectClasses}
          inputProps={{
            name: name,
            id: id
          }}
        >
          {options.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export const StyledDropdown = withStyles(styles)(Dropdown);
