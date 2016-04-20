import React from 'react';
import io from 'socket.io-client';

var socket = io();


export default React.createClass({
	getInitialState:function(){
		return {
			messages: []
		};
	},

	componentWillMount:function(){
		socket.on('new message', this.onNewMessage);
	},

	onNewMessage: function(data) {
		var chatarea = document.querySelector("#chatarea");
		this.addMessage(data.msg);		
	},

	addMessage: function(value){
		var messages = this.state.messages;
		messages.push(value);

		this.setState({
			messages: messages
		})
	},

	onSubmit:function(e){
		e.preventDefault();

		var chatarea = document.querySelector("#chatarea");
		var chatfield = document.querySelector("#chatfield");

		var val = chatfield.value;
		this.addMessage(val);

		socket.emit('message', {msg: val});

		chatfield.value = "";
	},

	render: function () {
	    return (
	    	<div>
	    		<form id="chatform" onSubmit={this.onSubmit}>
    				<input type="text" id="chatfield" />
    				<button type="submit">Submit</button>
  				</form>
  				<div id="chatarea">
  					{this.state.messages.map(function(message, index){
  						return (<p key={index}>{message}</p>)
  					})}
  				</div>
	    	</div>
	    )
	}
});
