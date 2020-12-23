/*
import React , { Component } from "react";
import axios from "axios";
export default class App extends React.Component{
     constructor(){
       super();
       this.state={
         contries:[]
       }
     }
     componentDidMount(){
       axios.get("https://restcountries.eu/rest/v2/all")
       .then((posRes)=>{
         this.setState({
           contries : posRes.data
         })
       },(errRes)=>{
         console.log(errRes)
       }
       )
     }

    render(){
      return(
        <div>
          <table border="1" cellPadding="10px" cellSpacing="10px" >
            <thead>
              <tr>
                <th>S.NO</th>
                <th>Name</th>
                <th>Captial</th>
                <th>population</th>
                <th>NativeName</th>
                <th>Flag</th>
              </tr>
            </thead>
            <tbody>
              {this.state.contries.map((element, index)=>(
                <tr>
                  <td>{index+1} </td>
                  <td>{element.name} </td>
                  <td>{element.capital} </td>
                  <td>{element.population} </td>
                  <td>{element.nativeName} </td>
                  <td><img width="100px" height="50px" src={element.flag}></img> </td>
                </tr>
              )
              )}
              
            </tbody>
          </table>
        </div>
      )
    }
}
*/


import React , { Component } from "react";
import axios from "axios";
export default class App extends React.Component{
     constructor(){
       super();
       this.state={
         "Global":[]
       }
     }
     componentDidMount(){
       axios.get("https://api.covid19api.com/summary")
       .then((posRes)=>{
         this.setState({
           contries : posRes.data
         })
       },(errRes)=>{
         console.log(errRes)
       }
       )
     }

     render(){
       return(
            <div>
            <table border="1" cellPadding="10px" cellSpacing="10px" >
            <thead>
              <tr>
                <th>S.NO</th>
                <th>CountryName</th>
                <th>CountryCode</th>
                <th>Slug</th>
                <th>NewConfirmed</th>
                <th>NewDeaths</th>
                <th>TotalDeaths</th>
                <th>NewRecovered</th>
                <th>Date</th>
                <th>Flag</th>
              </tr>
            </thead>
            <tbody>
              {this.state.Global.map((element, index)=>(
                <tr>
                  <td>{index+1} </td>
                  <td>{element.countryName} </td>
                  <td>{element.countryCode} </td>
                  <td>{element.slug} </td>
                  <td>{element.newConfirmed} </td>
                  <td>{element.newDeaths} </td>
                  <td>{element.newRecovered} </td>
                  <td>{element.date} </td>
                  <td>{element.totalDeaths} </td>                  
                  <td><img width="100px" height="50px" src={element.flag}></img> </td>
                </tr>
              )
              )}
              
            </tbody>
          </table>
        </div>
       )
     }
}


