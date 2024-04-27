import { createSlice } from "@reduxjs/toolkit";
import { translateText } from "../actions";
const initialState = {
    isLoading: false,
    error: null,
    answer: ''
}

const translateSlice = createSlice({
    name: 'translate',
    initialState,
    reducers: {
        setAnswer: (state, action) => {
            state.answer = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(translateText.pending, (state) => {
            state.isLoading = true
            state.answer = ''
        });
        builder.addCase(translateText.rejected, (state, action) => {
            state.error = action.payload,
                state.isLoading = false
        });
        builder.addCase(translateText.fulfilled, (state, action) => {
            state.isLoading = false,
                state.error = false,
                state.answer = action.payload.translatedText
        });
    },
})
export default translateSlice.reducer;