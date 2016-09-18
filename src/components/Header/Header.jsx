import React, { PropTypes } from 'react'

import './Header.less'
import Navigation from './Navigation'
import MusicPlayer from './MusicPlayer'
import { ToolBarContainer } from '../../containers'
import { toggleContent } from '../../redux/actions'

const menuList = [
  { name: 'Hello', link: '/hello' },
  { name: 'AppList', link: '/app-list' },
  { name: 'Blog', link: '/note-blog' },
  { name: 'Photo', link: '/photo' },
  { name: 'Zhihu', link: '/pages/zhihu' }
]

const Header = ({ musicList, pathname, dispatch }) => (
  <header id="header">
    <div className="logo">
      <span onClick={() => dispatch(toggleContent())} title="立青作品">
        <img alt="avatar" src="//o7mw3gkkh.qnssl.com/images/2016/1465649945502.png"/>
      </span>
    </div>
    <Navigation menuList={menuList} selectedUrl={pathname}/>
    <MusicPlayer songs={musicList}/>
    <ToolBarContainer />
  </header>
)

Header.propTypes = {
  musicList: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}
Header.defaultProps = {}

export default Header