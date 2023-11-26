import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../api";

export const fetchArticals = createAsyncThunk(
  "articals/fetchArticals",
  async () => {
    const response = await Api.get("/articles");
    return response.data;
  }
);

const initialState = {
  articles: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const Articles = createSlice({
  name: "Article",
  initialState,
  // reducers: {
  //   filterForid: (state, action) => {
  //     const findArticle = state.allArticles.find(
  //       (article) => article.id == action.payload
  //     );
  //     if (findArticle) {
  //       state.ShowArticleDitelails = findArticle;
  //     }
  //   },
  //   SortArticles: (state) => {
  //     const PublishArticle = state.allArticles.filter(
  //       (Article) => Article.Status == "Published"
  //     );
  //     const DraftArticle = state.allArticles.filter(
  //       (Article) => Article.Status == "Draft"
  //     );
  //     state.allArticles = [...PublishArticle, ...DraftArticle];
  //     console.log(state.allArticles);
  //   },
  //   upDataPublished: (state, action) => {
  //     let Articles = state.allArticles.filter(
  //       (Article) => Article.id !== action.payload.id
  //     );
  //     Articles = [...Articles, action.payload];
  //     state.allArticles = Articles;
  //   },
  //   delArticle: (state, action) => {
  //     const Articles = state.allArticles.filter(
  //       (Article) => Article.id != action.payload
  //     );
  //     console.log(Articles);
  //     state.allArticles = Articles;
  //   },
  //   upDataArticle: (state, action) => {
  //     console.log(action.payload)
  //     let allArticles = state.allArticles.filter(
  //       (article) => article.id !== action.payload.id
  //     );
  //     allArticles = [...allArticles, action.payload];
  //     state.allArticles = allArticles;

  //   },
  //   AddArticle: (state, action) => {
  //     const id = Date.now()
  //     const allArticles = [...state.allArticles, {...action.payload, id }];
  //     state.allArticles = allArticles;
  //   },
  // },
  extraReducers(builder) {},
});

export const {
  filterForid,
  SortArticles,
  delArticle,
  upDataPublished,
  upDataArticle,
  AddArticle,
} = Articles.actions;
export default Articles.reducer;
