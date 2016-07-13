import React from 'react'
import { shallow } from 'enzyme'
// import chai from 'chai'
// import chaiEnzyme from 'chai-enzyme'
//
// chai.use(chaiEnzyme()) // Note the invocation at the end

import Navigation from '../../../src/components/Header/Navigation'

describe('Header component', () => {
  it('should render Navigation', () => {
    const wrapper = shallow(<Navigation menuList={[{ name: 'pathname', link: 'pathname' }]} selectedUrl={'pathname'}/>)
    expect(wrapper.find('.menu')).to.have.length(1)
    // expect(wrapper.find('span')).to.have.className('random-post')
  })
})