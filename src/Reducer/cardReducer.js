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
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.startsWith("card"),
      (state) => {
        saveCardsToLocalStorage(state);
      }
    );
  },
});

export const { addCard } = cardSlice.actions;

export default cardSlice.reducer;
