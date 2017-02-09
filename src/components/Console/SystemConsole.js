import React from 'react';
import Console from 'react-console-component';
import axios from 'axios';
import './Console.css';

export default class SystemConsole extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}
	child: {
		console?: Console,
	} = {};
	echo = (text) => {

    if (text == 'cmd'){
      axios.post('/cmd', {
        test:true
      }).then((res)=>{
        console.log("RESPONSE");
        console.log(res);
      }).catch((err)=>{
        console.log("ERROR");
        console.log(err);
      });
    }

		this.child.console.log(text);
		this.setState({
			count: this.state.count+1,
		}, this.child.console.return);
	}
	promptLabel = () => {
		return this.state.count + "> ";
	}
	render() {
		return <Console ref={ref => this.child.console = ref}
			handler={this.echo}
			promptLabel={this.promptLabel}
			welcomeMessage={"Welcome to the react-console demo!\nThis is an example of a simple echo console."}
			autofocus={true}
		/>;
	}
}
