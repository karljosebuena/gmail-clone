import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMessageIsOpen: false,
    selectedMail: null,
  },
  reducers: {
    openSendMessage: state => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: state => {
      state.sendMessageIsOpen = false;
    },
    selectMail: (state, action) => {
      state.selectedMail = action.payload;

    }
  },
});

// Actions
export const {
  openSendMessage,
  closeSendMessage,
  selectMail,
} = mailSlice.actions;

// Selectors
export const selectSendMessageIsOpen = state => state.mail.sendMessageIsOpen;
export const selectSelectedMail = state => state.mail.selectedMail;


export default mailSlice.reducer;
