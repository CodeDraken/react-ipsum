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
  gray: PropTypes.bool,
  blur: PropTypes.bool,
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
    gray,
    blur,
    renderAs: Element,
    subEl: SubEl,
    ...attributes
  } = props

  // prevent browser from caching image url
  const rand = Math.random() * 10000 >> 0

  // grayscale and blur
  const grayPath = gray ? '/g' : ''
  const blurPath = blur ? '&blur' : ''

  let { url } = props

  // https://picsum.photos/200/200/?random&blur&sig=3791
  if (!url) {
    url = `https://picsum.photos${grayPath}/${width}/${height}/?random${blurPath}&sig=${rand}`
  }

  return (
    <Element className={className} {...attributes}>
      <SubEl className={subClass} src={url} alt={alt} />
    </Element>
  )
}

LoremImage.propTypes = propTypes
LoremImage.defaultProps = defaultProps

export default LoremImage
