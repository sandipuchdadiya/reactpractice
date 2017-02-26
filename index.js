var React = require('react');
var ReactDOM = require('react-dom');
var Components = require('./components');

function GetComponent(prop){   
    debugger;     
        return(
            <Components sifId={prop.sifId} />
        );
}

function renderCustom(sifId){
    ReactDOM.render(<GetComponent sifId={sifId}/>,document.getElementById('root'));
}

window.renderCustom = renderCustom;





