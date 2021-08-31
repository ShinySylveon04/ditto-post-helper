import { createStore } from "redux";
import { gen8Pokemon } from "./utils/pokemon-deposits";
import { pokeballs } from "./utils/pokeballs";
import { appReducer } from "./reducers";

export const initialState = {
  activeStep: 0,
  dittoNature: "Adamant",
  deposit: {
    species: gen8Pokemon[0],
    ball: pokeballs[0],
    gender: "Male",
    nickname: "",
    level: 0
  },
  player: {
    language: "English",
    inGameName: "",
    gtsMessage: ""
  }
};

export const store = createStore(appReducer, initialState);
