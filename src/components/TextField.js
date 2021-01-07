import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    marginTop: "1rem",
    marginBottom: "1rem",
    maxWidth: 300,
    width: "100%"
  }
});

export const StyledTextField = ({
  id,
  label = "",
  type = "text",
  helperText = "",
  onChange,
  multiline = false,
  fullWidth = false,
  inputRef,
  ...props
}) => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.root}
      id={id}
      label={label}
      type={type}
      helperText={helperText}
      onChange={onChange}
      multiline={multiline}
      fullWidth={fullWidth}
      inputRef={inputRef}
      {...props}
    ></TextField>
  );
};
