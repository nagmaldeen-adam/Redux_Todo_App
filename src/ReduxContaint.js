import { createSlice } from "@reduxjs/toolkit";
  export const newSlice = createSlice({
     name:'Teast',
     initialState:{
         data:[]
     },
     reducers:{
      addItem: (state,action) =>{
          state.data.push(action.payload)
      },
      deleteItem:(state,action) =>{
         state.data = state.data.filter(item => item.id != action.payload)
      },
      updateItem:(state,action) =>{
          state.data.map(item =>{
              if(item.id == action.payload.id){
                  item.item = action.payload.item;
                    item.desc = action.payload.desc;
              }
          })
      },
     },
 })

 export const {addItem,deleteItem,updateItem} = newSlice.actions
 export default newSlice.reducer