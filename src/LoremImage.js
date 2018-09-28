import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  subClass: PropTypes.string,
  url: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
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
  renderAs: 'div',
  subEl: 'img',
  alt: 'lorem image',
  width: 200,
  height: 200
}

export const LoremImage = ({ children, ...props }) => {
  const {
    className,
    subClass,
    alt,
    width,
    height,
    renderAs: Element,
    subEl: SubEl,
    ...attributes
  } = props

  let { url } = props

  if (!url) {
    url = `https://picsum.photos/${width}/${height}/?random`
  }

  return (
    <Element className={className} {...attributes}>
      <SubEl src={url} alt={alt} />
    </Element>
  )
}

LoremImage.propTypes = propTypes
LoremImage.defaultProps = defaultProps

export default LoremImage
