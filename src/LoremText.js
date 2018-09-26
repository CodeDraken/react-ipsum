import React from 'react'
import PropTypes from 'prop-types'

import loremIpsum from 'lorem-ipsum'

const units = [
  's', 'p', 'w',
  'sentence', 'paragraph', 'word',
  'sentences', 'paragraphs', 'words'
]

const propTypes = {
  children: PropTypes.node,
  len: PropTypes.number,
  count: PropTypes.number,
  unit: PropTypes.oneOf(units)
}

const defaultProps = {
  children: null,
  len: null,
  count: 2,
  unit: 'sentences'
}

export const LoremText = ({ children, ...props }) => {
  const { len, count, unit, ...attributes } = props

  let u // used for unit in lorem ipsum

  switch (unit) {
    case 'p':
    case 'paragraph':
      u = 'paragraphs'
      break
    case 's':
    case 'sentence':
      u = 'sentences'
      break
    case 'w':
    case 'word':
      u = 'words'
      break
    default:
      u = 'sentences'
  }

  let text = loremIpsum({
    count,
    random: Math.random,
    unit: u
  })

  text = text.slice(0, len || text.length)

  return (
    <React.Fragment>
      { text }
    </React.Fragment>
  )
}

LoremText.propTypes = propTypes
LoremText.defaultProps = defaultProps

export default LoremText
