import React from 'react'
import { shallow } from 'enzyme'

import { LoremText } from '../'

describe('LoremText', () => {
  it('Should render a span tag by default', () => {
    const wrapper = shallow(<LoremText />)

    expect(wrapper.type()).toBe('span')
  })

  it('Should pass additional classnames', () => {
    const wrapper = shallow(<LoremText className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
  })

  it('Should render as other elements', () => {
    const wrapper = shallow(<LoremText renderAs='p' />)

    expect(wrapper.type()).toBe('p')
  })

  it('Should have a max length', () => {
    const wrapper = shallow(<LoremText len={10} />)

    expect(wrapper.text().length).toBe(10)
  })

  describe('Words', () => {
    it('Should render sub elements', () => {
      const wrapper = shallow(<LoremText unit='w' count={5} subEl='p' />)

      expect(wrapper.find('p').at(0).text()).toBeTruthy()
      expect(wrapper.find('p').length).toBe(5)
    })

    it('Should pass sub classes to sub elements', () => {
      const wrapper = shallow(<LoremText unit='w' count={5} subEl='p' subClass='custom' />)

      expect(wrapper.find('p').at(0).hasClass('custom')).toBe(true)
    })
  })

  describe('Sentences', () => {
    it('Should render sub elements', () => {
      const wrapper = shallow(<LoremText unit='s' count={5} subEl='p' />)

      expect(wrapper.find('p').at(0).text()).toBeTruthy()
      expect(wrapper.find('p').length).toBe(5)
    })

    it('Should pass sub classes to sub elements', () => {
      const wrapper = shallow(<LoremText unit='s' count={5} subEl='p' subClass='custom' />)

      expect(wrapper.find('p').at(0).hasClass('custom')).toBe(true)
    })
  })

  describe('Paragraphs', () => {
    it('Should render sub elements', () => {
      const wrapper = shallow(<LoremText unit='p' count={5} subEl='p' />)

      expect(wrapper.find('p').at(0).text()).toBeTruthy()
      expect(wrapper.find('p').length).toBe(5)
    })

    it('Should pass sub classes to sub elements', () => {
      const wrapper = shallow(<LoremText unit='p' count={5} subEl='p' subClass='custom' />)

      expect(wrapper.find('p').at(0).hasClass('custom')).toBe(true)
    })
  })

  describe('Snapshots', () => {
    it('Should exist', () => {
      expect(LoremText).toMatchSnapshot()
    })
  })
})
