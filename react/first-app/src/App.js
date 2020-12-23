import React, {Component} from "react";
export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      "data":"Quote:The pain You feel today will be the STRENGHT You feel tomorrow!!",
      "version" : "version=16.8",
      "flag" : true,
      "subs" : ["Name:Rj ram","Official Name:Ramnewas","Nick Nmae:Aryan"],
      "products":[
            {"p_id":"100","p_name":"mobile","p_cost":"100000"},
            {"p_id":"200","p_name":"tv","p_cost":"20000"},
            {"p_id":"300","p_name":"laptop","p_cost":"30000"},
            {"p_id":"400","p_name":"cooler","p_cost":"4000"},
             ],
     "obj":{
       'sub_1': "maths",
       "sub_2":"physics",
       "sub_3":"computer science"
     }
    };
  };

  render(){
      return(
        <div>
        <h1 style={{color:"blue"}}>{this.state.data}</h1>
        <h3 style={{color:"green"}}>{this.state.version}</h3>
        <h3 style={{color:"pink"}}>{JSON.stringify(this.state.flag)}</h3>

        <h3>{this.state.subs.map((e,i)=>(
          <span>{e}.......{i} </span>
        ))}</h3>


        <table border="1"
               cellPadding="10px"
               cellSpacing="10px"
               align="center">
              <thead style={{background:"grey"}}>
                <tr>
                  <th>S.NO</th>
                  <th>P-ID</th>
                  <th>P_NAME</th>
                  <th>P_COST</th>
                </tr>

              </thead>
              <tbody>
                {this.state.products.map((element, index)=>(
                  <tr>
                    <td>{index+1}</td>
                    <td>{element.p_id}</td>
                    <td>{element.p_name}</td>
                    <td>{element.p_cost}</td>
                  </tr>
                ))}
              </tbody>

        </table>
        <h3>{JSON.stringify(this.state.obj)} </h3>
        <h3>{this.state.obj.sub_1}</h3>
        <h3>{this.state.obj.sub_2}</h3>
        <h3>{this.state.obj.sub_3}</h3>
        </div>

      )
  }
  
}