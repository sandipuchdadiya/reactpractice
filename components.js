var React = require('react');
var ReactDOM = require('react-dom');
var Component1= require('./Component1');
var Component2= require('./Component2');

var Components = React.createClass({    
    render(){        
            if(this.props.sifId == 1){
                return (
                  <Component1 />
                )
            }   
            else if(this.props.sifId == 2){
                return(
                    <Component2 />
                )
            }     
    }
});

module.exports = Components;