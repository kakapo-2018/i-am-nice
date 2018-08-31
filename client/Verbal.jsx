import React from 'react'

export default class Verbal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      insult: '',
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.updateInsult = this.updateInsult.bind(this)
  }

  //Sets insult from form text
  updateInsult(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
    {console.log(e.target.value)}
  }

  //Creates ptag with insult text of state
  onSubmit (e) {
    e.preventDefault() //dont do the default form action
    const words = this.state.insult
    
    
    var insultText = document.createElement('h1');

    insultText.innerHTML = words;

    insultText.style.position = 'absolute';

    insultText.style.top = (Math.floor(Math.random() * (600 - 200 + 1)) + 200) + 'px';
    insultText.style.left = (Math.floor(Math.random() * (1000 - 5 + 1)) + 100) + 'px';
    
    var elem = document.getElementById("app");
  
    elem.parentNode.insertBefore(insultText, elem.nextSibling);

    {console.log(this.state.insult)}
  }
  render() {
    return (
      <div id="verbal-abuse-box">
      <form onSubmit={this.onSubmit}>
        <input onChange={this.updateInsult} type="text" name="insult" placeholder="Don't..." />
        <input type="submit" />
      </form>
      </div> 
    )
  }
}