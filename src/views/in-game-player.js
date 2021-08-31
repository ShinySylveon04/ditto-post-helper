import React from "react";
import { connect } from "react-redux";
import { setPlayer } from "../actions";
import partial from "lodash/partial";
import Typography from "@material-ui/core/Typography";
import { PaperLayout } from "../components/Paper";
import {
  StyledDropdown,
  createDropdownItems
} from "../components/Dropdown";
import { StyledTextField } from "../components/TextField";
import { passEventValue } from "../utils/pass-event-value";
import { gtsMessages } from "../utils/gts-messages";

const mapStateToProps = ({ player }) => player;

const mapDispatchToProps = {
  setPlayer
};

const GTSDropdown = ({ setPlayer, gtsMessage }) => (
  <StyledDropdown
    value={gtsMessage}
    label="GTS Message"
    name="gtsMessage"
    id="gtsMessage"
    onChange={passEventValue(partial(setPlayer, "gtsMessage"))}
  >
    {createDropdownItems(gtsMessages)}
  </StyledDropdown>
);

const InGamePlayerView = ({
  setPlayer,
  children,
  language,
  gtsMessage
}) => {
  return (
    <React.Fragment>
      <PaperLayout>
        <Typography variant="h4">Player Info</Typography>
        <StyledDropdown
          value={language}
          label="Game Language"
          name="gameLanguage"
          id="gameLanguage"
          onChange={passEventValue(partial(setPlayer, "language"))}
        >
          {createDropdownItems([
            "English",
            "Japanese",
            "French",
            "Italian",
            "German",
            "Spanish",
            "Korean",
            "Chinese"
          ])}
        </StyledDropdown>
        <StyledTextField
          label="Home Name"
          onChange={passEventValue(partial(setPlayer, "inGameName"))}
        />
        <GTSDropdown setPlayer={setPlayer} gtsMessage={gtsMessage} />
        {children}
      </PaperLayout>
    </React.Fragment>
  );
};

export const ConnectedInGamePlayerView = connect(
  mapStateToProps,
  mapDispatchToProps
)(InGamePlayerView);
