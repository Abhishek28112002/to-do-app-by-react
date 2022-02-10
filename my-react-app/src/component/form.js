import React, { Component } from 'react'
const heading={
  color:"red",
  fontsize:"200px"
}
export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       input:'',
       textarea:'',
       option:'',
       sub:null
    }
  }
  inputchange=event=>
  {
    this.setState({input:event.target.value})
  }
  optionchange=event=>
  {
    this.setState({option:event.target.value})
  }
  textareachange=event=>
  {
    this.setState({textarea:event.target.value})
  }
  submit=event=>
  {event.preventDefault();
   this.setState({sub:
      <div>
        <h1>NAME: {this.state.input}</h1>
        <h1>ABOUT HIM: {this.state.textarea}</h1>
        <h1>HIS INTEREST:{this.state.option}</h1>
      </div>
    })
    //  alert(`${this.state.input} ${this.state.textarea} ${this.state.option}`);
    
    
  }
  render() {
    return (
      <div style={heading}>
     <form onSubmit={this.submit}>
       <h3>what is your name?</h3>
  <input type="text" value={this.state.input} onChange={this.inputchange}></input>
     
     <h3>tell us something about you</h3>
     <textarea  value={this.state.textarea} onChange={this.textareachange}></textarea>
     <h3>select your interest</h3>
     <select value={this.state.option} onChange={this.optionchange}>
       <option value="react"> react
       </option>
       <option value="javascipt"> javascipt
       </option>
       <option value=" html"> html
       </option>
       <option value=" css"> css
       </option>
     </select>
     <button  type="submit" >submit</button>
     </form>
     {this.state.sub}
     </div>
    )
  }
}

export default App

