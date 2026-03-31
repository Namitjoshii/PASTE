import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  pastes:localStorage.getItem("pastes")
  ?     JSON.parse(localStorage.getItem("pastes"))
  : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  
  reducers: {


    //add
    addToPastes: (state,action) => {
     const paste = action.payload;
     state.pastes.push(paste);
     localStorage.setItem("pastes",JSON.stringify(state.pastes));
     toast("Paste added successfully")
    },

    //update
    updateToPastes: (state,action) => {
    const paste = action.payload;
    const index = state.pastes.findIndex((item)=>item._id ===PerformanceObserverEntryList._id)
    
    if(index>=0){
      state.pastes[index] = paste;
      localStorage.setItem("pastes",JSON.stringify(state.pastes));
      toast.success("Paste updated successfully")
    }
    },


    //reset
    resetAllPastes: (state, action) => {
      state.pastes = [];

      localStorage.removeItem("pastes");
      toast("All pastes have been reset")
    },

    removeFromPastes: (state,action) => {
      const pasteId = action.payload;
      console.log(pasteId);
      const index = state.pastes.findIndex((item)=>item._id === pasteId);

      if(index>=0){
        state.pastes.splice(index,1);
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
        toast.success("Paste removed successfully")
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes,removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer