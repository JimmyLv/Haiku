import React, { PropTypes } from 'react'

import './Header.less'
import Navigation from './Navigation'
import MusicPlayer from './MusicPlayer'
import ToolBar from './ToolBar'
import { toggleContent } from '../../ducks/toggle'

const menuList = [
  { name: 'Hello', link: '/hello' },
  { name: 'AppList', link: '/app-list' },
  { name: 'Blog', link: '/note-blog' },
  { name: 'Photo', link: '/photo' },
  { name: 'Zhihu', link: '/pages/zhihu' }
]

const Header = ({ pathname, posts, dispatch }) => (
  <header id="header">
    <div className="logo">
      <span onClick={() => dispatch(toggleContent())} title="立青作品">
        <img alt="avatar" src="//o7mw3gkkh.qnssl.com/images/2016/1465649945502.png" />
      </span>
    </div>
    <Navigation menuList={menuList} selectedUrl={pathname} />
    <MusicPlayer />
    <ToolBar posts={posts} dispatch={dispatch} />
  </header>
)

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}
Header.defaultProps = {}

export default Header