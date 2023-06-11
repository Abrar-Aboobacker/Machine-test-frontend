// import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// import { alertsSlice } from "./alertsSlice";
// import { userSlice } from "./userSlice";

// const rootReducer = combineReducers({
//     alerts:alertsSlice.reducer,
//     user:userSlice.reducer
// })

// const store = configureStore({
//     reducer: rootReducer,
// })
// export default store


import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { alertsSlice } from "./alertsSlice";
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userSlice } from "./userSlice";

const rootReducer = combineReducers({
    alerts: alertsSlice.reducer,
    user:userSlice.reducer
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});
const persistor = persistStore(store);
export  {store,persistor};