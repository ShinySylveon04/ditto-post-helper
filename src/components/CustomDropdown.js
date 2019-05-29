import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { MenuItem } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";

const styles = {
  container: {
    marginTop: "1rem",
    marginBottom: "1rem"
  },
  select: {
    "&:focus": {
      backgroundColor: "inherit"
    },
    display: "flex"
  },
  formControl: {
    minWidth: "130px",
    maxWidth: "400px"
  }
};

const CustomDropdown = ({
  options,
  classes,
  onChange,
  name,
  id,
  label,
  value,
  ...props
}) => {
  const { container, formControl, ...selectClasses } = classes;
  return (
    <div className={container}>
      <FormControl required className={formControl}>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Select
          fullWidth
          onChange={onChange}
          classes={selectClasses}
          inputProps={{
            name: name,
            id: id,
            value: value
          }}
          {...props}
        >
          {options.map((option, index) => (
            <MenuItem value={option.name} key={index}>
              <ListItemText>{option.name}</ListItemText>
              <div
                style={{
                  backgroundImage: `url(${option.img})`,
                  height: "30px",
                  width: "30px",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  marginRight: "10px"
                }}
              />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export const StyledCustomDropdown = withStyles(styles)(CustomDropdown);
