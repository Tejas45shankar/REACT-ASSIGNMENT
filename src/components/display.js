import React, { Component } from 'react'




class Display extends Component {
    state = { 
        title: 'Display component',
        imageUrl: 'https://picsum.photos/800/200'

     } 
    render() { 
        return (
        <div>
        <h4>{this.state.title} </h4>
        <a href="https://stackoverflow.com"><img alt="stack overflow" src={this.state.imageUrl}></img></a>
        
        </div>
        );
    }
}
 





export default Display;