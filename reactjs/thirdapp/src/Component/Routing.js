import React from 'react';
import { BrowserRouter , Route} from 'react-router-dom';
import Home from './Home';

const Routing = ()=>{
    return(
        <React.Fragment>
            <BrowserRouter>
                <Route exact path="/" component={Home}/>
            </BrowserRouter>
        </React.Fragment>
    )
}
export default Routing;