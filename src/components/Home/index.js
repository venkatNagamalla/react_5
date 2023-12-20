// Write your code here
import {Component} from 'react'

import Message from '../Message'

import Login from '../Login'

import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  loginStatus = () => {
    const {isLoggedIn} = this.state
    this.setState({isLoggedIn: !isLoggedIn})
  }

  render() {
    const {isLoggedIn} = this.state
    let messageEle
    let buttonEle

    if (isLoggedIn) {
      messageEle = <Message text="Welcome User" />
      buttonEle = <Logout loginStatus={this.loginStatus} />
    } else {
      messageEle = <Message text="Please Login" />
      buttonEle = <Login loginStatus={this.loginStatus} />
    }

    return (
      <div className="bg-container">
        <div className="card-container">
          {messageEle}
          {buttonEle}
        </div>
      </div>
    )
  }
}

export default Home
