import { combineReducers, applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";

//Reducers
import { productsReducer } from "../reducers/products.reducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
const reducers = combineReducers({
  products: productsReducer
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
