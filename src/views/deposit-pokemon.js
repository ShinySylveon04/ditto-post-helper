import React from "react";
import { connect } from "react-redux";
import { setDeposit } from "../actions";
import partial from "lodash/partial";
import Typography from "@material-ui/core/Typography";
import { StyledDropdown } from "../components/Dropdown";
import { StyledTextField } from "../components/TextField";
import { ColumnLayout } from "../layouts/column-layout";
import { passEventValue } from "../utils/pass-event-value";
import { getGameGen } from "../utils/get-game-generation";
import { gen6Pokemon, gen7Pokemon } from "../utils/pokemon-deposits";
import { pokeballs } from "../utils/pokeballs";

const mapStateToProps = ({ deposit, player }) => ({
  species: deposit.species,
  ball: deposit.ball,
  gender: deposit.gender,
  game: player.game
});

const mapDispatchToProps = {
  setDeposit
};

const DepositPokemonView = ({
  game,
  children,
  setDeposit,
  species,
  ball,
  gender
}) => {
  return (
    <React.Fragment>
      <ColumnLayout>
        <Typography variant="h4">What Pokemon will you deposit?</Typography>
        <StyledDropdown
          value={species}
          label="Pokemon"
          id="pokemonDeposit"
          name="pokemonDeposit"
          onChange={passEventValue(partial(setDeposit, "species"))}
          options={getGameGen(game) === 6 ? gen6Pokemon : gen7Pokemon}
        />
        <StyledDropdown
          value={ball}
          label="Pokeball"
          id="pokeball"
          name="pokeball"
          onChange={passEventValue(partial(setDeposit, "ball"))}
          options={pokeballs}
        />
        <StyledDropdown
          value={gender}
          label="Gender"
          id="gender"
          name="gender"
          onChange={passEventValue(partial(setDeposit, "gender"))}
          options={["Male", "Female"]}
        />
        <StyledTextField
          label="Nickname"
          onChange={passEventValue(partial(setDeposit, "nickname"))}
        />
        <StyledTextField
          type="number"
          label="Level"
          onChange={passEventValue(partial(setDeposit, "level"))}
        />
      </ColumnLayout>
      {children}
    </React.Fragment>
  );
};

export const ConnectedDepositPokemonView = connect(
  mapStateToProps,
  mapDispatchToProps
)(DepositPokemonView);
