import React from 'react';

// import React, { Component } from 'react';

// class SingleTodo extends Component {
//     constructor() {
//         super()
//     }
//     render() {
//         return (
//             <li>{this.props.todo}<button onClick={this.props.delete}>X</button></li>
//         )
//     }
// }

const singleTodo = (props)=>{
    return (
        <li>{props.todo}<button onClick={props.delete}>X</button></li>
    )
}

export default singleTodo