import React, { PropTypes } from 'react'

import './Header.less'
import Navigation from './Navigation'
import MusicPlayer from './MusicPlayer'
import ToolBar from './ToolBar'
import { toggleContent } from '../../ducks/toggle'

const Header = ({ posts, dispatch }) => (
  <header id="header">
    <div className="logo">
      <span onClick={() => dispatch(toggleContent())} title="立青作品">
        <img alt="avatar" src="//o7mw3gkkh.qnssl.com/images/2016/1465649945502.png" />
      </span>
    </div>
    <Navigation />
    <MusicPlayer />
    <ToolBar posts={posts} dispatch={dispatch} />
  </header>
)

Header.propTypes = {
  posts: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}
Header.defaultProps = {}

export default Header