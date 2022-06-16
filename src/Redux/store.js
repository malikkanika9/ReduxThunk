import { createStore,applyMiddleware,combineReducers} from "redux";

import thunk from "redux-thunk";
import { authReducer } from "./Auth/reducer";
 import { githubreducer } from "./Github/Githubreducer";
import { RegisterReducer } from "./Register/registerReducer";
const rootReducer=combineReducers({
  user:githubreducer,
    auth:authReducer,
    register:RegisterReducer
})
export const store=createStore(rootReducer,applyMiddleware(thunk))