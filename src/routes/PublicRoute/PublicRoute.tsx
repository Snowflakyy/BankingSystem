import { ChildrenProps } from "@/types/children";
import {Routes,Route,Link,Navigate,Outlet} from "react-router-dom"

export const PublicRoute = ({
   
    children,
}:ChildrenProps)=>{

    return children? children : <Outlet/>;
};