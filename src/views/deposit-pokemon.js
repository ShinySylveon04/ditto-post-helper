import React from "react";
import { connect } from "react-redux";
import { setDeposit } from "../actions";
import partial from "lodash/partial";
import Typography from "@material-ui/core/Typography";
import { PaperLayout } from "../components/Paper";
import { StyledDropdown, createDropdownItems } from "../components/Dropdown";
import { StyledTextField } from "../components/TextField";
import { passEventValue } from "../utils/pass-event-value";
import { getGameGen } from "../utils/get-game-generation";
import {
  gen6Pokemon,
  gen7Pokemon,
  gen8Pokemon
} from "../utils/pokemon-deposits";
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
      <PaperLayout>
        <Typography variant="h4">What Pokemon will you deposit?</Typography>
        <StyledDropdown
          value={species}
          label="Pokemon"
          id="pokemonDeposit"
          name="pokemonDeposit"
          onChange={passEventValue(partial(setDeposit, "species"))}
        >
          {createDropdownItems(
            getGameGen(game) === 6
              ? gen6Pokemon
              : getGameGen(game) === 8
                ? gen8Pokemon
                : gen7Pokemon
          )}
        </StyledDropdown>
        <StyledDropdown
          value={ball}
          label="Pokeball"
          id="pokeball"
          name="pokeball"
          onChange={passEventValue(partial(setDeposit, "ball"))}
        >
          {createDropdownItems(pokeballs)}
        </StyledDropdown>
        <StyledDropdown
          value={gender}
          label="Gender"
          id="gender"
          name="gender"
          onChange={passEventValue(partial(setDeposit, "gender"))}
        >
          {createDropdownItems(["Male", "Female"])}
        </StyledDropdown>
        <StyledTextField
          type="number"
          label="Level"
          onChange={passEventValue(partial(setDeposit, "level"))}
        />
        <StyledTextField
          label="Nickname"
          helperText="Nickname the Pokemon to your Reddit username!"
          onChange={passEventValue(partial(setDeposit, "nickname"))}
        />
        {children}
      </PaperLayout>
    </React.Fragment>
  );
};

export const ConnectedDepositPokemonView = connect(
  mapStateToProps,
  mapDispatchToProps
)(DepositPokemonView);
