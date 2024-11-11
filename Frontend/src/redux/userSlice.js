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

      
    /*   addMessage Detail       */
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


       /*  GET All addMessage Detail       */
    export const getAllMessages = createAsyncThunk(
      "user/getAllMessages",
      
      async (obj, thunkAPI) => {
        try {
  
          const response = await fetch(`${import.meta.env.VITE_API}/user/getAllMessages`, {
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



     /*  delete Message        */
     export const deleteMessages = createAsyncThunk(
      "user/deleteMessages",
      
      async (obj, thunkAPI) => {
        try {
  
          const response = await fetch(`${import.meta.env.VITE_API}/user/deleteMessage/${obj}`, {
            method: "DELETE",
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


        /*  delete skills        */
        export const deleteSkill = createAsyncThunk(
          "user/deleteSkill",
          
          async (obj, thunkAPI) => {
            try {
      
              const response = await fetch(`${import.meta.env.VITE_API}/user/deleteSkill/${obj}`, {
                method: "DELETE",
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



           /*   deleteEducation        */
           export const deleteEducation = createAsyncThunk(
            "user/deleteEducation",
            
            async (obj, thunkAPI) => {
              try {
        
                const response = await fetch(`${import.meta.env.VITE_API}/user/deleteEducation/${obj}`, {
                  method: "DELETE",
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


        /*   deleteProjects        */
        export const deleteProject = createAsyncThunk(
          "user/deleteProject",
          
          async (obj, thunkAPI) => {
            try {
      
              const response = await fetch(`${import.meta.env.VITE_API}/user/deleteProject/${obj}`, {
                method: "DELETE",
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



 /*   deleteExperience        */
 export const deleteExperience = createAsyncThunk(
  "user/deleteExperience",
  
  async (obj, thunkAPI) => {
    try {

      const response = await fetch(`${import.meta.env.VITE_API}/user/deleteExperience/${obj}`, {
        method: "DELETE",
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



           /*   editProject        */
           export const editProject = createAsyncThunk(
            "user/editProject",
            
            async (obj, thunkAPI) => {
              console.log(obj);
              
              try {
        
                const response = await fetch(`${import.meta.env.VITE_API}/user/editProject/${obj.id}`, {
                  method: "PUT",
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

/*   editSkill        */
export const editSkill = createAsyncThunk(
  "user/editSkill",
  
  async (obj, thunkAPI) => {
    console.log(obj);
    
    try {

      const response = await fetch(`${import.meta.env.VITE_API}/user/editSkill/${obj.id}`, {
        method: "PUT",
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


/*   editEducation        */
export const editEducation = createAsyncThunk(
  "user/editEducation",
  
  async (obj, thunkAPI) => {
    console.log(obj);
    
    try {

      const response = await fetch(`${import.meta.env.VITE_API}/user/editEducation/${obj.id}`, {
        method: "PUT",
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



/*   editExperience        */
export const editExperience = createAsyncThunk(
  "user/editExperience",
  
  async (obj, thunkAPI) => {
    console.log(obj);
    
    try {

      const response = await fetch(`${import.meta.env.VITE_API}/user/editExperience/${obj.id}`, {
        method: "PUT",
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






/*   addProject        */
export const addProjects = createAsyncThunk(
  "user/addProjects",
  
  async (obj, thunkAPI) => {
    console.log(obj);
    
    try {

      const response = await fetch(`${import.meta.env.VITE_API}/user/addProjects`, {
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



/*   addSkills       */
export const addSkills = createAsyncThunk(
  "user/addSkills",
  
  async (obj, thunkAPI) => {
    console.log(obj);
    
    try {

      const response = await fetch(`${import.meta.env.VITE_API}/user/addSkills`, {
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


/*   addEducation       */
export const addEducation = createAsyncThunk(
  "user/addEducation",
  
  async (obj, thunkAPI) => {
    console.log(obj);
    
    try {

      const response = await fetch(`${import.meta.env.VITE_API}/user/addEducation`, {
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


/*   addExperience       */
export const addExperience = createAsyncThunk(
  "user/addExperience",
  
  async (obj, thunkAPI) => {
    console.log(obj);
    
    try {

      const response = await fetch(`${import.meta.env.VITE_API}/user/addExpericence`, {
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


      const initialStateValues = {
        isUserSliceFetching: false,
        isUserSliceSuccess: false,
        isUserSliceError: false,
        userSliceErrorMessage: "",
        userSliceSuccessMessage:"",
        isUserSliceFetchingSmall:false,
   

        projects : [],
        skills:[],
        experience : [] ,
        education : [] ,
        messages : [],
        projectsCount : 0 ,
        skillsCount : 0,
        messagesCount:0
        
  
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
            state.isUserSliceFetching = false;
            console.log(payload);
            // state.isUserSliceSuccess = true;
            state.userSliceSuccessMessage = payload?.message 
            state.projects = payload?.data
            state.projectsCount = payload.count
      
            return state;
          });
          builder.addCase(getAllProjects.pending, (state, { payload }) => {
            state.isUserSliceFetching = true;
            state.isUserSliceSuccess = false;
            console.log(payload);
            
            return state;
          });
          builder.addCase(getAllProjects.rejected, (state, { payload }) => {
            state.isUserSliceFetching = false;
            state.isUserSliceError = true
            state.userSliceErrorMessage = payload?.message 
            console.log(payload);

            return state;
          });


          builder.addCase(getAllSkills.fulfilled, (state, { payload }) => {
            state.isUserSliceFetching= false;
            console.log(payload);
            // state.isUserSliceSuccess = true;
            state.userSliceSuccessMessage = payload?.message 
            state.skills = payload?.data
            state.skillsCount = payload.count
      
            return state;
          });
          builder.addCase(getAllSkills.pending, (state, { payload }) => {
            state.isUserSliceFetching = true;
            state.isUserSliceSuccess = false;
            console.log(payload);
            
            return state;
          });
          builder.addCase(getAllSkills.rejected, (state, { payload }) => {
            state.isUserSliceFetching = false;
            state.isUserSliceError = true
            state.userSliceErrorMessage = payload?.message 
            console.log(payload);

            return state;
          });

          builder.addCase(getAllExperience.fulfilled, (state, { payload }) => {
            state.isUserSliceFetching = false;
            console.log(payload);
            // state.isUserSliceSuccess = true;
            state.userSliceSuccessMessage = payload?.message 
            state.experience = payload?.data
      
            return state;
          });
          builder.addCase(getAllExperience.pending, (state, { payload }) => {
            state.isUserSliceFetching = true;
            state.isUserSliceSuccess = false;
            console.log(payload);
            
            return state;
          });
          builder.addCase(getAllExperience.rejected, (state, { payload }) => {
            state.isUserSliceFetching = false;
            state.isUserSliceError = true
            state.userSliceErrorMessage = payload?.message 
            console.log(payload);

            return state;
          });
          builder.addCase(getAllEduaction.fulfilled, (state, { payload }) => {
            state.isUserSliceFetching = false;
            console.log(payload);
            // state.isUserSliceSuccess = true;
            state.userSliceSuccessMessage = payload?.message 
            state.education = payload?.data
      
            return state;
          });
          builder.addCase(getAllEduaction.pending, (state, { payload }) => {
            state.isUserSliceFetching = true;
            state.isUserSliceSuccess = false;
            console.log(payload);
            
            return state;
          });
          builder.addCase(getAllEduaction.rejected, (state, { payload }) => {
            state.isUserSliceFetching = false;
            state.isUserSliceError = true
            state.userSliceErrorMessage = payload?.message 
            console.log(payload);

            return state;
          });


          builder.addCase(addMessage.fulfilled, (state, { payload }) => {
            state.isUserSliceFetchingSmall = false;-
            console.log(payload);
            state.isUserSliceSuccess = true;
            state.userSliceSuccessMessage = payload?.message || "message send sucessfully"
      
            return state;
          });
          builder.addCase(addMessage.pending, (state, { payload }) => {
            state.isUserSliceFetchingSmall = true;
            state.isUserSliceSuccess = false;

            console.log(payload);
            
            return state;
          });
          builder.addCase(addMessage.rejected, (state, { payload }) => {
            state.isUserSliceFetchingSmall = false;
            state.isUserSliceError = true
            state.userSliceErrorMessage = payload?.message 

            console.log(payload);

            return state;
          });


          builder.addCase(getAllMessages.fulfilled, (state, { payload }) => {
            state.isUserSliceFetching = false;
            console.log(payload);
            // state.isUserSliceSuccess = true;
            state.userSliceSuccessMessage = payload?.message 
            state.messages = payload?.data
            state.messagesCount = payload.count
      
            return state;
          });
          builder.addCase(getAllMessages.pending, (state, { payload }) => {
            state.isUserSliceFetching = true;
            state.isUserSliceSuccess = false;
            console.log(payload);
            
            return state;
          });
          builder.addCase(getAllMessages.rejected, (state, { payload }) => {
            state.isUserSliceFetching = false;
            state.isUserSliceError = true
            state.userSliceErrorMessage = payload?.message 
            console.log(payload);

            return state;
          });


          builder.addCase(deleteMessages.fulfilled, (state, { payload }) => {
            state.isUserSliceFetching = false;
            console.log(payload);
            state.isUserSliceSuccess = true;
            state.userSliceSuccessMessage = payload?.message 
            const messageArray = state.messages.filter((ele)=> ele._id != payload?.data._id)
            state.messages = messageArray
            state.messagesCount = state.messagesCount -1
      
            return state;
          });
          builder.addCase(deleteMessages.pending, (state, { payload }) => {
            state.isUserSliceFetching = true;
            state.isUserSliceSuccess = false;
            console.log(payload);
            
            return state;
          });
          builder.addCase(deleteMessages.rejected, (state, { payload }) => {
            state.isUserSliceFetching = false;
            state.isUserSliceError = true
            state.userSliceErrorMessage = payload?.message 
            console.log(payload);

            return state;
          });


  
          builder.addCase(deleteSkill.fulfilled, (state, { payload }) => {
            state.isUserSliceFetching = false;
            console.log(payload);
            state.isUserSliceSuccess = true;
            state.userSliceSuccessMessage = payload?.message 
            const skillArray = state.skills.filter((ele)=> ele._id != payload?.data._id)
            state.skills = skillArray
      
            return state;
          });
          builder.addCase(deleteSkill.pending, (state, { payload }) => {
            state.isUserSliceFetching = true;
            state.isUserSliceSuccess = false;
            console.log(payload);
            
            return state;
          });
          builder.addCase(deleteSkill.rejected, (state, { payload }) => {
            state.isUserSliceFetching = false;
            state.isUserSliceError = true
            state.userSliceErrorMessage = payload?.message 
            console.log(payload);

            return state;
          });



          builder.addCase(deleteProject.fulfilled, (state, { payload }) => {
            state.isUserSliceFetching = false;
            console.log(payload);
            state.isUserSliceSuccess = true;
            state.userSliceSuccessMessage = payload?.message 
            const projectArray = state.projects.filter((ele)=> ele._id != payload?.data._id)
            state.projects = projectArray
      
            return state;
          });
          builder.addCase(deleteProject.pending, (state, { payload }) => {
            state.isUserSliceFetching = true;
            state.isUserSliceSuccess = false;
            console.log(payload);
            
            return state;
          });
          builder.addCase(deleteProject.rejected, (state, { payload }) => {
            state.isUserSliceFetching = false;
            state.isUserSliceError = true
            state.userSliceErrorMessage = payload?.message 
            console.log(payload);

            return state;
          });




          builder.addCase(deleteEducation.fulfilled, (state, { payload }) => {
            state.isUserSliceFetching = false;
            console.log(payload);
            state.isUserSliceSuccess = true;
            state.userSliceSuccessMessage = payload?.message 
            const deleteArray = state.education.filter((ele)=> ele._id != payload?.data._id)
            state.education = deleteArray
      
            return state;
          });
          builder.addCase(deleteEducation.pending, (state, { payload }) => {
            state.isUserSliceFetching = true;
            state.isUserSliceSuccess = false;
            console.log(payload);
            
            return state;
          });
          builder.addCase(deleteEducation.rejected, (state, { payload }) => {
            state.isUserSliceFetching = false;
            state.isUserSliceError = true
            state.userSliceErrorMessage = payload?.message 
            console.log(payload);

            return state;
          });



          builder.addCase(deleteExperience.fulfilled, (state, { payload }) => {
            state.isUserSliceFetching = false;
            console.log(payload);
            state.isUserSliceSuccess = true;
            state.userSliceSuccessMessage = payload?.message 
            const deleteArray = state.experience.filter((ele)=> ele._id != payload?.data._id)
            state.experience = deleteArray
      
            return state;
          });
          builder.addCase(deleteExperience.pending, (state, { payload }) => {
            state.isUserSliceFetching = true;
            state.isUserSliceSuccess = false;
            console.log(payload);
            
            return state;
          });
          builder.addCase(deleteExperience.rejected, (state, { payload }) => {
            state.isUserSliceFetching = false;
            state.isUserSliceError = true
            state.userSliceErrorMessage = payload?.message 
            console.log(payload);

            return state;
          });



          builder.addCase(editProject.fulfilled, (state, { payload }) => {
            state.isUserSliceFetching = false;
            console.log(payload);
            state.isUserSliceSuccess = true;
            state.userSliceSuccessMessage = payload?.message 
            const projectIndex = state.projects.findIndex((project)=> project._id = payload.data._id);
            const updatedPoject = {...state.projects[projectIndex] , ...payload.data }
            const updatedProjectData = [...state.projects]
            updatedProjectData[projectIndex] = updatedPoject;
            state.projects = updatedProjectData;
      
            return state;
          });
          builder.addCase(editProject.pending, (state, { payload }) => {
            state.isUserSliceFetching = true;
            state.isUserSliceSuccess = false;
            console.log(payload);
            
            return state;
          });
          builder.addCase(editProject.rejected, (state, { payload }) => {
            state.isUserSliceFetching = false;
            state.isUserSliceError = true
            state.userSliceErrorMessage = payload?.message 
            console.log(payload);

            return state;
          });



          builder.addCase(editSkill.fulfilled, (state, { payload }) => {
            state.isUserSliceFetching = false;
            console.log(payload);
            state.isUserSliceSuccess = true;
            state.userSliceSuccessMessage = payload?.message 
            const skillIndex = state.skills.findIndex((project)=> project._id = payload.data._id);
            const updatedPoject = {...state.skills[skillIndex] , ...payload.data }
            const updatedProjectData = [...state.skills]
            updatedProjectData[skillIndex] = updatedPoject;
            state.skills = updatedProjectData;
      
            return state;
          });
          builder.addCase(editSkill.pending, (state, { payload }) => {
            state.isUserSliceFetching = true;
            state.isUserSliceSuccess = false;
            console.log(payload);
            
            return state;
          });
          builder.addCase(editSkill.rejected, (state, { payload }) => {
            state.isUserSliceFetching = false;
            state.isUserSliceError = true
            state.userSliceErrorMessage = payload?.message 
            console.log(payload);

            return state;
          });




          builder.addCase(editEducation.fulfilled, (state, { payload }) => {
            state.isUserSliceFetching = false;
            console.log(payload);
            state.isUserSliceSuccess = true;
            state.userSliceSuccessMessage = payload?.message 
            const educationIndex = state.education.findIndex((project)=> project._id = payload.data._id);
            const updatedPoject = {...state.education[educationIndex] , ...payload.data }
            const updatedProjectData = [...state.education]
            updatedProjectData[educationIndex] = updatedPoject;
            state.education = updatedProjectData;
      
            return state;
          });
          builder.addCase(editEducation.pending, (state, { payload }) => {
            state.isUserSliceFetching = true;
            state.isUserSliceSuccess = false;
            console.log(payload);
            
            return state;
          });
          builder.addCase(editEducation.rejected, (state, { payload }) => {
            state.isUserSliceFetching = false;
            state.isUserSliceError = true
            state.userSliceErrorMessage = payload?.message 
            console.log(payload);

            return state;
          });


          builder.addCase(editExperience.fulfilled, (state, { payload }) => {
            state.isUserSliceFetching = false;
            console.log(payload);
            state.isUserSliceSuccess = true;
            state.userSliceSuccessMessage = payload?.message 
            const projectIndex = state.experience.findIndex((project)=> project._id = payload.data._id);
            const updatedPoject = {...state.experience[projectIndex] , ...payload.data }
            const updatedProjectData = [...state.experience]
            updatedProjectData[projectIndex] = updatedPoject;
            state.experience = updatedProjectData;
      
            return state;
          });
          builder.addCase(editExperience.pending, (state, { payload }) => {
            state.isUserSliceFetching = true;
            state.isUserSliceSuccess = false;
            console.log(payload);
            
            return state;
          });
          builder.addCase(editExperience.rejected, (state, { payload }) => {
            state.isUserSliceFetching = false;
            state.isUserSliceError = true
            state.userSliceErrorMessage = payload?.message 
            console.log(payload);

            return state;
          });



          builder.addCase(addProjects.fulfilled, (state, { payload }) => {
            state.isUserSliceFetching = false;
            console.log(payload);
            state.isUserSliceSuccess = true;
            state.userSliceSuccessMessage = payload?.message 
            const updatedPoject = {...state.projects , ...payload.data }
            state.projects = updatedPoject;
      
            return state;
          });
          builder.addCase(addProjects.pending, (state, { payload }) => {
            state.isUserSliceFetching = true;
            state.isUserSliceSuccess = false;
            console.log(payload);
            
            return state;
          });
          builder.addCase(addProjects.rejected, (state, { payload }) => {
            state.isUserSliceFetching = false;
            state.isUserSliceError = true
            state.userSliceErrorMessage = payload?.message 
            console.log(payload);

            return state;
          });


          builder.addCase(addSkills.fulfilled, (state, { payload }) => {
            state.isUserSliceFetching = false;
            console.log(payload);
            state.isUserSliceSuccess = true;
            state.userSliceSuccessMessage = payload?.message 
        
            const updatedPoject = {...state.skills, ...payload.data }
            state.skills = updatedPoject;
      
            return state;
          });
          builder.addCase(addSkills.pending, (state, { payload }) => {
            state.isUserSliceFetching = true;
            state.isUserSliceSuccess = false;
            console.log(payload);
            
            return state;
          });
          builder.addCase(addSkills.rejected, (state, { payload }) => {
            state.isUserSliceFetching = false;
            state.isUserSliceError = true
            state.userSliceErrorMessage = payload?.message 
            console.log(payload);

            return state;
          });



          builder.addCase(addEducation.fulfilled, (state, { payload }) => {
            state.isUserSliceFetching = false;
            console.log(payload);
            state.isUserSliceSuccess = true;
            state.userSliceSuccessMessage = payload?.message 
        
            const updatedPoject = {...state.education, ...payload.data }
            state.education = updatedPoject;
      
            return state;
          });
          builder.addCase(addEducation.pending, (state, { payload }) => {
            state.isUserSliceFetching = true;
            state.isUserSliceSuccess = false;
            console.log(payload);
            
            return state;
          });
          builder.addCase(addEducation.rejected, (state, { payload }) => {
            state.isUserSliceFetching = false;
            state.isUserSliceError = true
            state.userSliceErrorMessage = payload?.message 
            console.log(payload);

            return state;
          });

          builder.addCase(addExperience.fulfilled, (state, { payload }) => {
            state.isUserSliceFetching = false;
            console.log(payload);
            state.isUserSliceSuccess = true;
            state.userSliceSuccessMessage = payload?.message 
        
            const updatedPoject = {...state.experience, ...payload.data }
            state.education = updatedPoject;
      
            return state;
          });
          builder.addCase(addExperience.pending, (state, { payload }) => {
            state.isUserSliceFetching = true;
            state.isUserSliceSuccess = false;
            console.log(payload);
            
            return state;
          });
          builder.addCase(addExperience.rejected, (state, { payload }) => {
            state.isUserSliceFetching = false;
            state.isUserSliceError = true
            state.userSliceErrorMessage = payload?.message 
            console.log(payload);

            return state;
          });


        },
        
    });
    
      

    export const {  clearAllSliceStates} = userSlice.actions;
    export const  userData = (state) => state.user

export default userSlice;
