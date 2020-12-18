import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(1),
    },
  },
}));

const links = [
  {
    link: "https://www.serebii.net/xy/customisation.shtml",
    text: "XY"
  },
  {
    link: "https://www.serebii.net/sunmoon/customisation.shtml",
    text: "Sun/Moon"
  },
  {
    link: "https://www.serebii.net/ultrasunultramoon/customisation.shtml",
    text: "Ultra Sun/Ultra Moon"
  }
];

export const ClothingLists = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="body2" className={classes.root}>
      Clothing Lists:{" "}
        {links.map((link, index) => {
          return (
            <Link
              href={link.link}
              target="_blank"
              rel="noreferrer noopener"
              key={index}
            >{link.text}</Link>
          );
        })
        }
      </Typography>
    </React.Fragment>
  );
};