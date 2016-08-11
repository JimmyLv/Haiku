import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Header } from '../components'
import * as actionCreators from '../redux/actions'

function mapStateToProps(state) {
  return {
    ...state,
    pathname: state.routing.locationBeforeTransitions.pathname
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
