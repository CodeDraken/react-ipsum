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
  className: PropTypes.string,
  subClass: PropTypes.string,
  len: PropTypes.number,
  count: PropTypes.number,
  unit: PropTypes.oneOf(units),
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.node
  ]),
  subEl: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.node
  ])
}

const defaultProps = {
  children: null,
  len: null,
  count: 2,
  unit: 'sentences',
  renderAs: 'span'
}

export const LoremText = ({ children, ...props }) => {
  const { len, count, unit, className, subClass, subEl: SubEl, renderAs: Element, ...attributes } = props

  let u // used for unit in lorem ipsum
  let split = /\n+/g // for custom inner elements

  switch (unit) {
    case 'p':
    case 'paragraph':
      u = 'paragraphs'
      break
    case 's':
    case 'sentence':
      u = 'sentences'
      split = '. '
      break
    case 'w':
    case 'word':
      u = 'words'
      split = /\s+/g
      break
  }

  let text = loremIpsum({
    count,
    random: Math.random,
    units: u,
    suffix: '\n'
  })

  text = text.slice(0, len || text.length)

  return (
    <Element className={className} {...attributes}>
      {
        SubEl
          ? text.split(split)
            .map((str, i) => <SubEl className={subClass} key={String(str[0]) + i}>{str}</SubEl>)
          : text
      }
    </Element>
  )
}

LoremText.propTypes = propTypes
LoremText.defaultProps = defaultProps

export default LoremText
