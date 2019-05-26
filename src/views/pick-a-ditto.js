import React from "react";
import Typography from "@material-ui/core/Typography";
import { StyledDropdown } from "../components/Dropdown";
import { ColumnLayout } from "../layouts/column-layout";
import { passEventValue } from "../utils/pass-event-value";

export const PickADittoView = ({ setPlayerProp, setDittoNature, children }) => {
  return (
    <React.Fragment>
      <ColumnLayout>
        <StyledDropdown
          label="Select a Ditto"
          name="dittoNature"
          id="dittoNature"
          onChange={passEventValue(setDittoNature)}
          options={[
            "Adamant",
            "Brave",
            "Bold",
            "Relaxed",
            "Impish",
            "Timid",
            "Jolly",
            "Naive",
            "Modest",
            "Quiet",
            "Calm",
            "Sassy",
            "Careful",
            "HP Fighting",
            "HP Fire",
            "HP Flying",
            "HP Grass",
            "HP Ground",
            "HP Ice",
            "HP Rock"
          ]}
        />
        <StyledDropdown
          label="Game Version"
          name="gameVersion"
          id="gameVersion"
          onChange={passEventValue(setPlayerProp("game"))}
          options={["ORAS", "XY", "SM", "USUM"]}
        />
      </ColumnLayout>
      <a
        href="https://www.reddit.com/r/morebreedingdittos/wiki/dittos"
        style={{ color: "#0277bd" }}
      >
        <Typography variant="body1" style={{ color: "#0277bd" }}>
          List of Ditto IVs and Natures
        </Typography>
      </a>
      {children}
    </React.Fragment>
  );
};
