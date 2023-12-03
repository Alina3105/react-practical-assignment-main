import { configureStore } from '@reduxjs/toolkit';
import postReducer from './features/postsSlice';
const preloadedState = {
   posts: JSON.parse(localStorage.getItem('state') ?? '{}').posts
};

const store = configureStore({
  preloadedState,
  reducer: {
    posts: postReducer
  }
});

store.subscribe(() => localStorage.setItem('state', JSON.stringify(store.getState())));

export { store };

