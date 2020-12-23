import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { PostData} from '../actions';

class FormsComponent extends Component {
    constructor(){
        super()

        this.state={
            title:'',
            body:'',
            category:''

        }

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeBody = this.handleChangeBody.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChangeTitle(event){
        this.setState({title:event.target.value})
    }

    handleChangeBody(event){
        this.setState({body:event.target.value})
    }

    handleChangeCategory(event){
        this.setState({category:event.target.value})
    }

    handleSubmit(event){
        this.props.PostData(
            this.state.title,
            this.state.body,
            this.state.category
        );
        alert('Submitted')
    }

    render(){
        return(
            <div className="container">
                <form>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control" id="title"
                        value={this.state.title}
                        onChange={this.handleChangeTitle}/>
                    </div>
                    <div className="form-group">
                        <label>Body</label>
                        <input type="text" className="form-control" id="body"
                        value={this.state.body}
                        onChange={this.handleChangeBody}/>
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <input type="text" className="form-control" id="category"
                        value={this.state.category}
                        onChange={this.handleChangeCategory}/>
                    </div>
                    <button type="submit" className="btn btn-success"
                    onClick={this.handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({PostData}, dispatch)
}

export default connect(null,mapDispatchToProps)(FormsComponent)