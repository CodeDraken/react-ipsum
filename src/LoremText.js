import React from 'react'
import PropTypes from 'prop-types'

import loremIpsum from 'lorem-ipsum'

const propTypes = {
  children: PropTypes.node,
  len: PropTypes.number
}

const defaultProps = {
  children: null,
  len: 140
}

export const LoremText = ({ children, ...props }) => {
  const { len, ...attributes } = props

  const text = lorem.slice(0, len)

  return (
    <React.Fragment>
      { text }
    </React.Fragment>
  )
}

LoremText.propTypes = propTypes
LoremText.defaultProps = defaultProps

export default LoremText
