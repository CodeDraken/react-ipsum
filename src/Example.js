import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node
}

const defaultProps = {
  children: null
}

export const Example = ({ children, ...props }) => {
  const { ...attributes } = props

  return (
    <div>
      Example
    </div>
  )
}

Example.propTypes = propTypes
Example.defaultProps = defaultProps

export default Example
