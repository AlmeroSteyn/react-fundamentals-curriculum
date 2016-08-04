var React = require('react');
var ReactDom = require('react-dom');

var HelloWorld = React.createClass({
    render: function(){
       return (
            <span>Hello World</span>
        )
    }
});

ReactDom.render(<HelloWorld/>, document.getElementById('app-container'));

