

import { api } from "./apiCRUDSlice";
import { AppDispatch } from "./store";


interface onCreateProps{
    data:any;
    url?:string;
}
interface onHandleRUDProps extends onCreateProps{
    id:string;
}

const BaseUrl_Loan ="https://localhost:7223/api/Loans/"
export const ACTION_TYPES={
    CREATE: "CREATE",
    UPDATE: "UPDATE",
    DELETE: "DELETE",
    FETCH_ID:"FETCH_ID",
    FETCH_ALL_LOANS: "FETCH_ALL_LOANS",
}


export const fetchAll = () =>(dispatch:AppDispatch)=>{
    api.Crud({url:BaseUrl_Loan}).fetchAll().then((res)=>{
        console.log("API Response:(not dispatched)",res.data);
        dispatch({
            type:ACTION_TYPES.FETCH_ALL_LOANS,
            payload:res.data,
        });
    }).catch((err:any)=>console.log(err))

}
export const fetchById =({id}:onHandleRUDProps)=>(dispatch:AppDispatch) =>{

    api.Crud({url:BaseUrl_Loan}).fetchById().then((res)=>{
        console.log("API Response:(not dispatched)",res.data);
        dispatch({
            type:ACTION_TYPES.FETCH_ID,
            payload:res.data,
        })
    }).catch((err:any)=>console.log(err))
}
export const create = ({data}:onCreateProps)=> (dispatch:AppDispatch)=>{
    api.Crud({url:BaseUrl_Loan}).create(data).then(res=>{
     
     console.log("API Response:",res.data);
     dispatch({
       type:ACTION_TYPES.CREATE,
       payload:res.data
     })
   }).catch(err=>console.log((err)))
 }
 export const update=({id,data}:onHandleRUDProps)=>(dispatch:AppDispatch)=>{
    api.Crud({url:BaseUrl_Loan}).update(id,data).then(res=>{
        console.log("API Response:(not dispatched)",res.data);
        dispatch({
            type:ACTION_TYPES.UPDATE,
            payload:{id:id,...data}
        })
    }).catch((err:any)=>console.log(err))
 }
 export const delete_ = ({id}:onHandleRUDProps)=>(dispatch:AppDispatch)=>{
    api.Crud({url:BaseUrl_Loan}).delete(id).then(res=>{
        console.log("API Response:(not dispatched)",res.data);
        dispatch({
            type:ACTION_TYPES.DELETE,
            payload:id
        })
    })
 }