const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require("axios");

const initialState = {
  news: [],
  loading: false,
  error: "",
};

//* Thunk function. It acts as promise (either pending, fulfilled or rejected) which are handled as extraReducers while createSlice
const fetchNews = createAsyncThunk("news/fetchNews", () => {
  return axios
    .get(
      "https://newsapi.org/v2/everything?q=India&from=2024-06-13&sortBy=popularity&apiKey=9e10708d9a1347cda9d9f3b72f59d7fe"
    )
    .then((response) => response.data.articles.map((item) => item.title));
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload;
      state.error = "";
    });
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.loading = false;
      state.news = [];
      state.error = action.error.message;
    });
  },
});

module.exports = newsSlice.reducer;
module.exports.fetchNews = fetchNews;
