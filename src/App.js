import React,{Component} from 'react';
class App extends Component{
  constructor(){
    super();
    //this.handleClick=this.handleClick.bind(this);
  }
handleClick(){
  console.log("button clicked");
}

render() {
  return (
<button onClick={this.handleClick}>Click Me</button>
  );
   }
}
export default App;
