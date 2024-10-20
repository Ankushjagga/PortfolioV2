import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
let userId;
let email;
 
    const setTokenValues = () => {
const data =
Cookies.get("loginData") !== "undefined" && Cookies.get("loginData")
      ? JSON.parse(Cookies.get("loginData"))
      : null;
      email = data.email;
      userId = data.id
        
      };
 


  /*  GET All PROJECTS Detail       */
  export const getAllProjects = createAsyncThunk(
    "user/getAllProjects",
    
    async (obj, thunkAPI) => {
      try {

        const response = await fetch(`${import.meta.env.VITE_API}/user/getAllProjects`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(response.status, "response", data);                                                                                                                          
        if (response?.status === 200) {
         console.log(data);
         
  
          return data;
        } else {
            console.log(data);
            
          return thunkAPI.rejectWithValue(data);
        }
      } catch (e) {
        console.log("Error", e.response.data);
        thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );
  /* END*/


  /*  GET All skill Detail       */
  export const getAllSkills = createAsyncThunk(
    "user/getAllSkills",
    
    async (obj, thunkAPI) => {
      try {

        const response = await fetch(`${import.meta.env.VITE_API}/user/getAllSkills`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(response.status, "response", data);                                                                                                                          
        if (response?.status === 200) {
         console.log(data);
         
  
          return data;
        } else {
            console.log(data);
            
          return thunkAPI.rejectWithValue(data);
        }
      } catch (e) {
        console.log("Error", e.response.data);
        thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );
  /* END*/


  /*  GET All getAllExperience Detail       */
  export const getAllExperience = createAsyncThunk(
    "user/getAllExperience",
    
    async (obj, thunkAPI) => {
      try {

        const response = await fetch(`${import.meta.env.VITE_API}/user/getAllExperience`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(response.status, "response", data);                                                                                                                          
        if (response?.status === 200) {
         console.log(data);
         
  
          return data;
        } else {
            console.log(data);
            
          return thunkAPI.rejectWithValue(data);
        }
      } catch (e) {
        console.log("Error", e.response.data);
        thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );
  /* END*/


    /*  GET All getAllEduaction Detail       */
    export const getAllEduaction = createAsyncThunk(
        "user/getAllEduaction",
        
        async (obj, thunkAPI) => {
          try {
    
            const response = await fetch(`${import.meta.env.VITE_API}/user/getAllEducation`, {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            });
            const data = await response.json();
            console.log(response.status, "response", data);                                                                                                                          
            if (response?.status === 200) {
             console.log(data);
             
      
              return data;
            } else {
                console.log(data);
                
              return thunkAPI.rejectWithValue(data);
            }
          } catch (e) {
            console.log("Error", e.response.data);
            thunkAPI.rejectWithValue(e.response.data);
          }
        }
      );
      /* END*/

      
    /*  GET All addMessage Detail       */
    export const addMessage = createAsyncThunk(
        "user/addMessage",
        
        async (obj, thunkAPI) => {
          try {
    
            const response = await fetch(`${import.meta.env.VITE_API}/user/addMessage`, {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body : JSON.stringify(obj)
            });
            const data = await response.json();
            console.log(response.status, "response", data);                                                                                                                          
            if (response?.status === 200) {
             console.log(data);
             
      
              return data;
            } else {
                console.log(data);
                
              return thunkAPI.rejectWithValue(data);
            }
          } catch (e) {
            console.log("Error", e.response.data);
            thunkAPI.rejectWithValue(e.response.data);
          }
        }
      );
      /* END*/

      const initialStateValues = {
        isUserSliceFetching: false,
        isUserSliceSuccess: false,
        isUserSliceError: false,
        userSliceErrorMessage: "",
        userSliceSuccessMessage:"",
        isUserSliceFetchingSmall:false,
        isaddMessageSuccess : false,

        projects : [],
        skills:[],
        experience : [] ,
        education : []
  
      };




      const userSlice = createSlice({
        name: "user",
        initialState: initialStateValues,
        reducers: {
         
          clearAllSliceStates:(state,action)=>{
            (state.userSliceSuccessMessage=''),
            (state.userSliceErrorMessage=''),
            (state.isUserSliceError=false),
            (state.isUserSliceFetching=false),
            (state.isUserSliceFetchingSmall=false),
            (state.isUserSliceSuccess=false)
          }
          },
        extraReducers: (builder) => {

          builder.addCase(getAllProjects.fulfilled, (state, { payload }) => {
            state.isUserSliceFetchingSmall = false;
            console.log(payload);
            state.isUserSliceSuccess = true;
            state.userSliceSuccessMessage = payload?.message 
            state.projects = payload?.data
      
            return state;
          });
          builder.addCase(getAllProjects.pending, (state, { payload }) => {
            state.isUserSliceFetchingSmall = true;
            state.isUserSliceSuccess = false;
            console.log(payload);
            
            return state;
          });
          builder.addCase(getAllProjects.rejected, (state, { payload }) => {
            state.isUserSliceFetchingSmall = false;
            state.isUserSliceError = true
            state.userSliceErrorMessage = payload?.message 
            console.log(payload);

            return state;
          });


          builder.addCase(getAllSkills.fulfilled, (state, { payload }) => {
            state.isUserSliceFetchingSmall = false;
            console.log(payload);
            state.isUserSliceSuccess = true;
            state.userSliceSuccessMessage = payload?.message 
            state.skills = payload?.data
      
            return state;
          });
          builder.addCase(getAllSkills.pending, (state, { payload }) => {
            state.isUserSliceFetchingSmall = true;
            state.isUserSliceSuccess = false;
            console.log(payload);
            
            return state;
          });
          builder.addCase(getAllSkills.rejected, (state, { payload }) => {
            state.isUserSliceFetchingSmall = false;
            state.isUserSliceError = true
            state.userSliceErrorMessage = payload?.message 
            console.log(payload);

            return state;
          });

          builder.addCase(getAllExperience.fulfilled, (state, { payload }) => {
            state.isUserSliceFetchingSmall = false;
            console.log(payload);
            state.isUserSliceSuccess = true;
            state.userSliceSuccessMessage = payload?.message 
            state.experience = payload?.data
      
            return state;
          });
          builder.addCase(getAllExperience.pending, (state, { payload }) => {
            state.isUserSliceFetchingSmall = true;
            state.isUserSliceSuccess = false;
            console.log(payload);
            
            return state;
          });
          builder.addCase(getAllExperience.rejected, (state, { payload }) => {
            state.isUserSliceFetchingSmall = false;
            state.isUserSliceError = true
            state.userSliceErrorMessage = payload?.message 
            console.log(payload);

            return state;
          });
          builder.addCase(getAllEduaction.fulfilled, (state, { payload }) => {
            state.isUserSliceFetchingSmall = false;
            console.log(payload);
            state.isUserSliceSuccess = true;
            state.userSliceSuccessMessage = payload?.message 
            state.education = payload?.data
      
            return state;
          });
          builder.addCase(getAllEduaction.pending, (state, { payload }) => {
            state.isUserSliceFetchingSmall = true;
            state.isUserSliceSuccess = false;
            console.log(payload);
            
            return state;
          });
          builder.addCase(getAllEduaction.rejected, (state, { payload }) => {
            state.isUserSliceFetchingSmall = false;
            state.isUserSliceError = true
            state.userSliceErrorMessage = payload?.message 
            console.log(payload);

            return state;
          });


          builder.addCase(addMessage.fulfilled, (state, { payload }) => {
            state.isUserSliceFetchingSmall = false;
            console.log(payload);
            state.isUserSliceSuccess = true;
            state.isaddMessageSuccess = true;
            state.userSliceSuccessMessage = payload?.message 
      
            return state;
          });
          builder.addCase(addMessage.pending, (state, { payload }) => {
            state.isUserSliceFetchingSmall = true;
            state.isUserSliceSuccess = false;
            state.isaddMessageSuccess = false;

            console.log(payload);
            
            return state;
          });
          builder.addCase(addMessage.rejected, (state, { payload }) => {
            state.isUserSliceFetchingSmall = false;
            state.isUserSliceError = true
            state.userSliceErrorMessage = payload?.message 
            state.isaddMessageSuccess = false;

            console.log(payload);

            return state;
          });

        },
        
    });
    
      

    export const {  clearAllSliceStates} = userSlice.actions;
    export const  userData = (state) => state.user

export default userSlice;
