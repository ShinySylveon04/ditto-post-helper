import { createStore } from "redux";
import { ORASTrainers } from "./utils/oras-trainers";
import { gen6Pokemon } from "./utils/pokemon-deposits";
import { appReducer } from "./reducers";

export const initialState = {
  activeStep: 0,
  dittoNature: "Adamant",
  deposit: {
    species: gen6Pokemon[0],
    ball: "Poke Ball",
    gender: "Male",
    nickname: "",
    level: 0
  },
  player: {
    language: "English",
    game: "ORAS",
    trainerDescription: ORASTrainers[0],
    inGameName: "",
    gtsMessage: "",
    consoleRegion: ""
  }
};

export const store = createStore(appReducer, initialState);
