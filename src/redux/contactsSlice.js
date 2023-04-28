import { createSlice, nanoid } from '@reduxjs/toolkit';

const STORAGE_KEY = 'myContacts';
const contactsInitialState = JSON.parse(localStorage.getItem(STORAGE_KEY));

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        setLocalStorage([...state]);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            name: text.name,
            number: text.number,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        const index = state.findIndex(contact => contact.id === action.payload);
        state.splice(index, 1);
        setLocalStorage([...state]);
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

const setLocalStorage = contacts => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
};
