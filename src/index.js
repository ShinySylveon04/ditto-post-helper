import React from "react";
import ReactDOM from "react-dom";
import flow from "lodash/flow";
import { MuiThemeProvider, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import SwipeableViews from "react-swipeable-views";
import { StyledAppBar } from "./components/AppBar";
import { StyledStepper } from "./components/Stepper";
import { theme } from "./theme";
import { ConnectedPickADittoView } from "./views/pick-a-ditto";
import { ConnectedDepositPokemonView } from "./views/deposit-pokemon";
import { ConnectedInGamePlayerView } from "./views/in-game-player";
import { ConnectedRedditPostView } from "./views/reddit-post";
import { setActiveStep } from "./actions";
import { Provider } from "react-redux";
import { store } from "./store";
import { connect } from "react-redux";

const mapStateToProps = ({ activeStep, dittoNature, player, deposit }) => ({
  activeStep: activeStep,
  dittoNature,
  game: player.game,
  deposit,
});

const mapDispatchToProps = {
  setActiveStep,
};

const styles = (theme) => ({
  root: {
    margin: "1rem auto",
    width: "90%",
    [theme.breakpoints.down(370)]: {
      width: "100%",
    },
  },
  contentContainer: { margin: "4rem 1rem" },
  buttonContainer: { marginTop: "1rem" },
  button: { margin: 5 },
});

const App = ({
  classes,
  setActiveStep,
  activeStep
}) => {
  const increaseActiveStep = () => {
    const step = Math.min(activeStep + 1, 3);

    setActiveStep(step);
  };

  const decreaseActiveStep = () => {
    const step = Math.max(activeStep - 1, 0);

    setActiveStep(step);
  };

  const stepButtons = (
    <div className={classes.buttonContainer}>
      {activeStep > 0 && (
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={decreaseActiveStep}
        >
          Previous
        </Button>
      )}
      {activeStep < 3 && (
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendIcon />}
          onClick={increaseActiveStep}
        >
          Next
        </Button>
      )}
    </div>
  );

  return (
    <MuiThemeProvider theme={theme}>
      <StyledAppBar />
      <div className={classes.root}>
        <StyledStepper
          activeStep={activeStep}
          steps={[
            "Pick your Ditto",
            "GTS Deposit",
            "Player Info",
            "Copy and submit",
          ]}
        />
        <div className={classes.contentContainer}>
          <SwipeableViews index={activeStep} onChangeIndex={setActiveStep}>
            <ConnectedPickADittoView>{stepButtons}</ConnectedPickADittoView>
            <ConnectedDepositPokemonView>
              {stepButtons}
            </ConnectedDepositPokemonView>
            <ConnectedInGamePlayerView>{stepButtons}</ConnectedInGamePlayerView>
            <ConnectedRedditPostView>{stepButtons}</ConnectedRedditPostView>
          </SwipeableViews>
        </div>
      </div>
      <Typography
        variant="caption"
        align="center"
        color="textPrimary"
        gutterBottom={true}
      >
        Created and maintained by /u/Shiny_Sylveon
      </Typography>
    </MuiThemeProvider>
  );
};

const connectComponent = flow(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
);

const ConnectedApp = connectComponent(App);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  rootElement
);
