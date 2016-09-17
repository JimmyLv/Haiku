import { connect } from 'react-redux'

import { Header } from '../components'
import { toggleContent } from '../redux/actions'

function mapStateToProps(state) {
  return {
    ...state,
    pathname: state.routing.locationBeforeTransitions.pathname
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleContent: () => dispatch(toggleContent())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
