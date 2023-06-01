// Write your code here
import './index.css'
import {Component} from 'react'
import Layout from '../Layout'
import ConfigurationContext from '../../context/ConfigurationContext'

class ConfigurationController extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  onToggleShowLeftNavbar = () => {
    console.log('leftMenu Clicked')
    this.setState(prev => ({showLeftNavbar: !prev.showLeftNavbar}))
  }

  onToggleShowContent = () => {
    console.log('Content Changed')
    this.setState(prev => ({showContent: !prev.showContent}))
  }

  onToggleShowRightNavbar = () => {
    console.log('Change Right navbar')
    this.setState(prev => ({showRightNavbar: !prev.showRightNavbar}))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <div className="firstCard">
          <h1 className="heading">Layout</h1>
          <div className="item">
            <input
              type="checkbox"
              id="firstbox"
              onChange={this.onToggleShowLeftNavbar}
              defaultChecked={showLeftNavbar}
              value={showLeftNavbar}
            />
            <label htmlFor="firstbox" className="lableEmenet">
              left navbar
            </label>
          </div>
          <div className="item">
            <input
              type="checkbox"
              id="secondbox"
              onChange={this.onToggleShowContent}
              defaultChecked={showContent}
              value={showContent}
            />
            <label htmlFor="secondbox" className="lableEmenet">
              content
            </label>
          </div>
          <div className="item">
            <input
              type="checkbox"
              id="checkox1"
              onChange={this.onToggleShowRightNavbar}
              defaultChecked={showRightNavbar}
              value={showRightNavbar}
            />
            <label htmlFor="checkox1" className="lableEmenet">
              Right Navbar
            </label>
          </div>
        </div>
        <Layout />
      </ConfigurationContext.Provider>
    )
  }
}
export default ConfigurationController
