import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  onGenerate = () => {
    this.setState({
      randomNumber: Math.ceil(Math.random() * 100),
    })
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="container-bg">
        <div className="mini-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.onGenerate}>
            Generate
          </button>
          <p className="random-num">{randomNumber}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
