

import { api } from "./apiCRUDSlice";
import { AppDispatch } from "./store";


interface onCreateProps{
    data:any;
    url?:string;
}
interface onHandleRUDProps extends onCreateProps{
    id:string;
}

const Base_URL ="https://localhost:7223/api/Users"
export const ACTION_TYPES={
    UPDATE: "UPDATE",
    DELETE: "DELETE",
    FETCH_ID:"FETCH_ID",
    FETCH_ALL_USERS: "FETCH_ALL_USERS",
}


export const fetchAll = () =>(dispatch:AppDispatch)=>{
    api.Crud({url:Base_URL}).fetchAll().then((res)=>{
        console.log("API Response:(not dispatched)",res.data);
        dispatch({
            type:ACTION_TYPES.FETCH_ALL_USERS,
            payload:res.data,
        });
    }).catch((err:any)=>console.log(err))

}
export const fetchById =({id}:onHandleRUDProps)=>(dispatch:AppDispatch) =>{

    api.Crud({url:Base_URL}).fetchById().then((res)=>{
        console.log("API Response:(not dispatched)",res.data);
        dispatch({
            type:ACTION_TYPES.FETCH_ID,
            payload:res.data,
        })
    }).catch((err:any)=>console.log(err))
}

 export const update=({id,data}:onHandleRUDProps)=>(dispatch:AppDispatch)=>{
    api.Crud({url:Base_URL}).update(id,data).then(res=>{
        console.log("API Response:(not dispatched)",res.data);
        dispatch({
            type:ACTION_TYPES.UPDATE,
            payload:{id:id,...data}
        })
    }).catch((err:any)=>console.log(err))
 }
 export const delete_ = ({id}:onHandleRUDProps)=>(dispatch:AppDispatch)=>{
    api.Crud({url:Base_URL}).delete(id).then(res=>{
        console.log("API Response:(not dispatched)",res.data);
        dispatch({
            type:ACTION_TYPES.DELETE,
            payload:id
        })
    })
 }