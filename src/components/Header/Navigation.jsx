import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import classnames from 'classnames'

type PropsType = {
  menuList: Array<{
    name: string,
    link: string
  }>,
  selectedUrl: string
}

@connect(
  ({ routing }) => ({
    selectedUrl: routing.locationBeforeTransitions.pathname
  })
)
export default class Navigation extends Component {
  constructor(props) {
    super(props)
    this.toggleUserLogin = this.toggleUserLogin.bind(this)
    this.state = {
      hasLoggedIn: false
    }
  }

  props: PropsType

  toggleUserLogin() {
    this.setState({
      hasLoggedIn: !this.state.hasLoggedIn,
      username: 'JimmyLv'
    })
  }

  render() {
    const { menuList, selectedUrl } = this.props
    const { hasLoggedIn, username } = this.state
    return (
      <div className="menu m-hide">
        {menuList.map((menu, index) => (
          <Link
            key={index}
            className={classnames({ 'active': selectedUrl.includes(menu.link) })}
            to={menu.link}
          > {menu.name} </Link>)
        )}
        {hasLoggedIn && <Link to="/dashboard">Dashboard</Link>}
        {hasLoggedIn && <Link to="/users">Users</Link>}
        <a onClick={this.toggleUserLogin}>{hasLoggedIn ? username : 'Firebase'}</a>
        <a href="https://github.com/JimmyLv/nobackend.website" target="_blank">GitHub</a>
      </div>
    )
  }
}

Navigation.defaultProps = {
  menuList: [
    { name: 'Hello', link: '/hello' },
    { name: 'AppList', link: '/app-list' },
    { name: 'Blog', link: '/note-blog' },
    { name: 'Photo', link: '/photo' },
    { name: 'Zhihu', link: '/pages/zhihu' }
  ]
}
