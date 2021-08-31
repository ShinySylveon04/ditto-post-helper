import React from "react";
import { connect } from "react-redux";
import { setDittoNature, setDeposit, setPlayer } from "../actions";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { PaperLayout } from "../components/Paper";
import { StyledDropdown } from "../components/Dropdown";
import { passEventValue } from "../utils/pass-event-value";
import { natureDropdownItems } from "../utils/ditto-types";

const mapStateToProps = ({ dittoNature }) => ({
  dittoNature: dittoNature
});

const mapDispatchToProps = {
  setDittoNature,
  setPlayer,
  setDeposit
};

const PickADittoView = ({
  setDittoNature,
  children,
  dittoNature
}) => {

  return (
    <React.Fragment>
      <PaperLayout>
        <Typography variant="h4">Pick your Ditto</Typography>
        <StyledDropdown
          value={dittoNature}
          label="Select a Ditto"
          name="dittoNature"
          id="dittoNature"
          onChange={passEventValue(setDittoNature)}
        >
          {natureDropdownItems}
        </StyledDropdown>
        <Link
          href="https://www.reddit.com/r/morebreedingdittos/wiki/dittos"
          target="_blank"
          rel="noreferrer noopener"
          style={{ color: "#0277bd" }}
        >
          <Typography variant="body1" style={{ color: "#0277bd" }}>
            List of Ditto IVs and Natures
          </Typography>
        </Link>
        {children}
      </PaperLayout>
    </React.Fragment>
  );
};

export const ConnectedPickADittoView = connect(
  mapStateToProps,
  mapDispatchToProps
)(PickADittoView);
