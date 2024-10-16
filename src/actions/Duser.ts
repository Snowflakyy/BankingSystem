import { AppDispatch } from "./store";
import { api } from "./apiCRUDSlice";
import { LoginProps, SignUpProps } from "../types/form";
import { DUserState } from "../types";
// export const create = (data:any) =>{
//     return({
//         type:'create',
//         payload:data
// })
// } 
interface onCreateProps{
  data:SignUpProps;
  onSuccess?: () => void; 
  url?:string;
}
interface onLoginProps{
  data:LoginProps;
  onSuccess?: () => void; 
  url?:string;
}
interface onUpdateProps extends onCreateProps{
  id:string;
}
interface ResponseProps{
  data:DUserState
}
export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ID:"FETCH_ID",
  FETCH_ALL: "FETCH_ALL",
  LOGIN_USER:"LOGIN_USER"
};

// const FormateDate = (data:SignUpProps) =>({
//   ...data,
//   dateOfBirth
// :data.dateOfBirth
// })


export const create = (data:SignUpProps)=> (dispatch:AppDispatch)=>{
   api.Crud({url:"https://localhost:7223/api/Users"}).create(data).then(res=>{
    
    console.log("API Response:",res.data);
    dispatch({
      type:ACTION_TYPES.CREATE,
      payload:res.data
    })
  }).catch(err=>console.log((err)))
}
export const loginUser = (data:LoginProps)=> (dispatch:AppDispatch)=>{
  api.Crud({url :"https://localhost:7223/auth/login"}).loginUser(data).then((res)=>{
    console.log("After axios post:",res.data)
   dispatch({
     type:ACTION_TYPES.CREATE,
     payload:res.data
   })
   return res.data;
 }).catch(err=>console.log((err)))
}

