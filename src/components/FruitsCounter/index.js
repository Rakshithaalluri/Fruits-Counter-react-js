import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoesCount: 0,
    bananaCount: 0,
  }

  onClickEatMango = () => {
    this.setState(prevState => ({
      mangoesCount: prevState.mangoesCount + 1,
    }))
  }

  onClickEatBanana = () => {
    this.setState(prevState => ({
      bananaCount: prevState.bananaCount + 1,
    }))
  }

  render() {
    const {mangoesCount, bananaCount} = this.state
    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="text">
            {' '}
            Bob ate
            <span className="count"> {mangoesCount}</span> mangoes{' '}
            <span className="count"> {bananaCount}</span> bananas{' '}
          </h1>
          <div className="content">
            <div className="banana-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button
                className="mango-button"
                type="button"
                onClick={this.onClickEatMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button
                className="mango-button"
                type="button"
                onClick={this.onClickEatBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
