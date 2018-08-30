import React from 'react'

// export default function Verbal (props) {
//   return (
//     <div>
//       <h1 className="title">Don't insult me</h1>
//     </div>
//   )
// }



export default class Verbal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      insult: '',
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.feedbackEffect = this.feedbackEffect.bind(this)
  }
  feedbackEffect(e) {
    this.setState({
      [e.target.insult] : e.target.value
    })
  }
  onSubmit (e) {
    e.preventDefault() //dont do the default
    const insult = this.state
    this.props.abuse(insult) //send the cat up to App.jsx
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input onChange={this.updateDetails} type="text" name="insult" placeholder="Don't..." />
        <input type="submit" />
      </form>
    )
  }
}