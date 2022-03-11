import { configureStore } from "@reduxjs/toolkit";
import  newSlice  from "./ReduxContaint";

  const store = configureStore({
     reducer:{
       Teast : newSlice,
     },
 });
 export default store