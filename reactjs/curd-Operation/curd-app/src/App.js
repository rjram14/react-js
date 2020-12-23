import React ,{ Component } from "react";
import {connect } from "react-redux"; //to use store {class connect }
import * as actions from "./actions/actions";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";


class App extends React.Component{

    constructor(){
      super();
      this.state = {
        status : false
      }
    }

    componentDidMount(){
      this.props.getProducts();
    };

    showPopup = ()=>{
      this.setState({
        status : true
      });
      console.log("show Popup");
    };

    closePopup = ()=>{
      this.setState({
        status:false
      })
    };

    deleteRecord = (id)=>{
      this.props.deleteRecord(id);
    };

    save = ()=>{
      let obj = {"p_id" : this.refs.p_id.value,
                  "p_name" : this.refs.p_name.value,
                  "p_cost" : this.refs.p_cost.value };
      this.props.addProduct(obj);
      this.closePopup();
    //  console.log(obj);
    };

    componentWillReceiveProps(){
      console.log(this.props.status);
    }

  render(){
    return(
      <Container fluid className="mt-5">
        <Button className="float-right" onClick={this.showPopup}>Add value <i className="fas fa-plus"></i></Button>

        /* ----------------------------Model start------------------------------------------------  */
        <Modal show={this.state.status} 
               onHide={this.closePopup} size="sm" centered>
            <Modal.Header closeButton>
              <Modal.Title>Add/Upload</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                  <Form.Label>P_ID</Form.Label>
                  <Form.Control type="text" placeholder = "Enter P_ID" ref="p_id"></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>P_NAME</Form.Label>
                  <Form.Control type="text" placeholder = "Enter P_NAME" ref="p_name"></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>P_COST</Form.Label>
                  <Form.Control type="text" placeholder = "Enter P_COST" ref="p_cost"></Form.Control>
                </Form.Group>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="success" onClick={this.save}>Add/Upload</Button>
              <Button variant="danger" onClick={this.closePopup}>Close</Button>
            </Modal.Footer>

        </Modal>



        /* ----------------------------Model end------------------------------------------------  */
        <Table bordered variant="dark" size="ms" hover striped className="text-center">
          <thead>
            <tr>
              <th>S NO</th>
              <th>ID</th>
              <th>NAME</th>
              <th>COST</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((element,index)=>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{index.p_id}</td>
                <td>{index.p_name}</td>
                <td>{index.p_cost}</td>
                <td><i className="fas fa-edit" onClick={this.showPopup}></i></td>
                <td><i className="fas fa-trash-alt" onClick={()=>{this.deleteRecord(element.p_id)}}></i></td>
              </tr>
            ))}
          </tbody>

        </Table>
      </Container>
    )}
};

const receive = (state)=>{
      /*
      console.log("state");
      return{
        data:state.data
      }
      */
  console.log(state)
  if(state.hasOwnProperty("status")){
    if(state.status.delete === "success"){

      let id = state.data.findIndex((element,index)=>{
        return element.p_id === state.status.p_id;
      });

      state.data.splice(id,1);
    }
    if(state.status.insert ==="success"){
      state.data.push(state.status.record);

    };
  }
 // console.log("state");
  return{
    data:state.data,
    status :state.status
  }
};


const send = (dispatch)=>{
  return{
    getProducts : ()=>{dispatch(actions.getProducts())},
    deleteRecord : (id)=>{dispatch(actions.deleteRecord({"p_id":id}))},
    addProduct : (record)=>{dispatch(actions.addProduct(record))}
  }
};
export default connect(receive,send)(App);
