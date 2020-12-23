import React,{ Component } from "react";

import Mean from "./Mean";
import Mern from "./Mern";
import Mevn from "./Mevn";

export default class FullStack extends React.Component{
    render(){
        return(
            <div>
               <Mean/>
               <Mern/>
               <Mevn/>
            </div>
        );

    }
}