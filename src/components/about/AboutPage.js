import React from 'react';

//If class is not on the top of the tree, there is an issue with hot reloading?
class AboutPage extends React.Component{
    render(){
        return(
            <div className="jumbotron">
                <h1>About</h1>
                <p>This app uses React, Redux, React Router and other stuff</p>
            </div>
        );
    }
}

export default AboutPage;