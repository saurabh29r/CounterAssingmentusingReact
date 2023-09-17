// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrementButton = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1>
          The Button has been clicked
          <span className="span-class">{count}</span>
          times
        </h1>

        <p> Click the button to increase the count limit</p>
        <button
          className="Buttons"
          type="button"
          onClick={this.onIncrementButton}
        >
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
