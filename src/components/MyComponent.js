//class component
// function component
import React from "react";

class MyComponent extends React.Component {
    //JSX

    state = {
        name : "Dat",
        age : 19
    };


    render() {
        return (
            <div>
               My name is {this.state.name} and I am {this.state.age} years old
            </div>
        );
    }
}


export default MyComponent;