import React, {PropTypes} from 'react';
import Header from './common/Header';

//If class is not on the top of the tree, there is an issue with hot reloading?
class App extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

App.PropTypes = {
    children : PropTypes.object.isRequired
};

export default App;