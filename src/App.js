import React from "react";
import Header from './components/Header'
import Image from './components/Image'
import logo from "./img/image.jpg"
class App extends React.Component {
  constructor(props) {
    // eslint-disable-next-line no-undef
    super(props)
    this.state = {
      helpText: "Help text!",
      userData: "",
    }
    this.inputClick = this.inputClick.bind(this)
  }

  componentDidUpdate(prevProp) {
    if(this.state.helpText !== "Help")
      console.log("Some")
  }

  //helpText = "Help text!"
  render() {
    return (<div className="name">
    <Header title="Шапка сайта"/>
    <Header title="Шапка сайта!!"/>
    <h1>{this.state.helpText}</h1>
    <h2>{this.state.userData}</h2>
    <input placeholder={this.helpText}
        onChange={event => this.setState({userData: event.target.value})}
        onClick={this.inputClick} 
        onMouseEnter={this.mouseOver}
         />
    <p>{this.state.helpText === "Help text!" ? "Yes" : "No"}</p>
    <Image image={logo} />
    <img src={logo} alt="text 3"/> 
    //Вариант подключения
  </div>)
  }
  
  inputClick(){
    this.setState({
      helpText:"Changed"
    })
    console.log("Clicked")
  }

  mouseOver(){
    console.log("Mouse Over")
  }
}

export default App