// Write your code here
import './index.css'
import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'

class Body extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {showContent, showLeftNavbar, showRightNavbar} = value
          console.log(showContent, showLeftNavbar, showRightNavbar)
          return (
            <div className="BodySection">
              {showLeftNavbar && (
                <div className="leftMenu">
                  <h1 className="navheading">Left navbar Menu</h1>
                  <ul className="listOfitems">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                  </ul>
                </div>
              )}
              {showContent && (
                <div className="content">
                  <h1 className="navheading1">Content</h1>
                  <p className="paragraph">
                    Lorem ipsum dolor sit amet,consectetur adipiscing elt,sed do
                    eiusmod tempor incididunt ut labore et dolore magna
                    aliqua,Ui enim adminim veniam.
                  </p>
                </div>
              )}
              {showRightNavbar && (
                <div className="leftMenu">
                  <h1 className="navheading">Right Navbar</h1>
                  <p className="block">Ad 1</p>
                  <p className="block2">Ad 2</p>
                </div>
              )}
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}
export default Body
