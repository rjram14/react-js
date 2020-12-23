import React,{Component} from 'react';

const url = "http://localhost:8900/artists";

class FormsComponent extends Component{
    constructor(){
        super()

        this.state={
            name:'',
            cover:'',
            bio:'',
            genre:''
        }
    }
    handleChangeName =(event) => {
        this.setState({name:event.target.value})
    }
    handleChangeCover =(event) => {
        this.setState({cover:event.target.value})
    }
    handleChangeBio =(event) => {
        this.setState({bio:event.target.value})
    }
    handleChangeGenre =(event) => {
        this.setState({genre:event.target.value})
    }
    handleSubmit=()=>{
        console.log(this.state)
        var random = Math.floor(Math.random()*10000);
        var data ={
            "id":random,
            "name":this.state.name,
            "cover":this.state.cover,
            "bio":this.state.bio,
            "genre":this.state.genre
        }
        fetch(url,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then((this.props.history.push('/')))
    }
    render(){
        return(
           <React.Fragment>
               
               <div className="container">
                   <div className="panel panel-primary">
                       <div className="panel-heading">
                           Artist Forms
                       </div>
                       <div className="panel-body">
                           <div className="form-group">
                               <label>Name</label>
                               <input type="text" className="form-control"
                               value={this.state.name}
                               onChange={this.handleChangeName}/>
                           </div>
                           <div className="form-group">
                               <label>Cover</label>
                               <input type="text" className="form-control"
                               value={this.state.cover}
                               onChange={this.handleChangeCover}/>
                           </div>
                           <div className="form-group">
                               <label>Bio</label>
                               <input type="text" className="form-control"
                               value={this.state.bio}
                               onChange={this.handleChangeBio}/>
                           </div>
                           <div className="form-group">
                               <label>Genre</label>
                               <input type="text" className="form-control"
                               value={this.state.genre}
                               onChange={this.handleChangeGenre}/>
                           </div>
                           <button type="button" className="btn btn-success"
                           onClick={this.handleSubmit}>
                               Submit
                           </button>

                       </div>

                   </div>
               </div>
           </React.Fragment>

        )
    }
}

export default FormsComponent;