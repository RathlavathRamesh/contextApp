// Write your code here
import './index.css'
import {Component} from 'react'
import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}
export default Layout
