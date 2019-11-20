import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
  default: () => { return {} }
})

const configureStore = (predefinedState) => {
  return createStore(
    rootReducer,
    predefinedState,
    compose(
      applyMiddleware(
        thunkMiddleware
      )
    )
  );
};

export default configureStore;
