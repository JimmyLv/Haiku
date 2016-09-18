import React from 'react'
import { shallow } from 'enzyme'

import DevTools from './config/DevTools'
import Root from './config/Root.dev'

describe('Root component', () => {
  it('should render without problems', () => {
    const wrapper = shallow(<Root />)
    expect(wrapper.contains(<DevTools />)).to.be.equal(true)
  })
})