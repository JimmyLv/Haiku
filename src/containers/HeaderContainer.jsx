import { connect } from 'react-redux'

import { Header } from '../components'
import { toggleContent } from '../redux/actions'

const mapStateToProps = (state) => ({
  ...state,
  pathname: state.routing.locationBeforeTransitions.pathname
})

const mapDispatchToProps = (dispatch) => ({
  toggleContent: () => dispatch(toggleContent())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
