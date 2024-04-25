import { createSlice } from "@reduxjs/toolkit";

const loadCardsFromLocalStorage = () => {
  try {
    const cards = localStorage.getItem("cards");
    return cards ? JSON.parse(cards) : [];
  } catch (error) {
    console.error("Error loading cards from local storage:", error);
    return [];
  }
};

const saveCardsToLocalStorage = (cards) => {
  try {
    localStorage.setItem("cards", JSON.stringify(cards));
  } catch (error) {
    console.error("Error saving cards to local storage:", error);
  }
};

const initialState = loadCardsFromLocalStorage();

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard(state, action) {
      state.push(action.payload);
    },
    removeCard(state, action) {
      const cardToRemove = action.payload;
      return state.filter(card => card.cardNumber !== cardToRemove.cardNumber);
    },
    initializeCards(state, action) {
      return action.payload;
    },
  },
});

export const { addCard, removeCard, initializeCards } = cardSlice.actions;

export const initializeCardsFromLocalStorage = () => {
  return (dispatch) => {
    const cards = loadCardsFromLocalStorage();
    dispatch(initializeCards(cards));
  };
};

export const saveCardsToLocalStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type.startsWith("card")) {
    const state = store.getState();
    saveCardsToLocalStorage(state.card);
  }
  return result;
};

export default cardSlice.reducer;
