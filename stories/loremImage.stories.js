import React from 'react'
import { storiesOf } from '@storybook/react'

import { LoremImage, LoremText } from '../src'

storiesOf('LoremImage', module)
  .add('Default', () => (
    <div>
      <LoremImage />
      <LoremImage />
      <LoremImage />
    </div>
  ))
  .add('Blurred / Grayscale', () => (
    <div>
      <h3>Blur</h3>
      <LoremImage blur />

      <hr />

      <h3>Grayscale</h3>
      <LoremImage gray />

      <hr />

      <h3>Grayscale & Blur</h3>
      <LoremImage gray blur />
    </div>
  ))
  .add('Custom width/height', () => (
    <div>
      <h3>Custom width/height</h3>
      <p>Default is 200x200 px</p>

      <strong>200 x 200</strong>
      <LoremImage />

      <strong>350 x 200</strong>
      <LoremImage width={350} />

      <strong>75 x 75</strong>
      <LoremImage width={75} height={75} />
    </div>
  ))
  .add('Custom Elements/Components', () => {
    const CustomComponent = ({ children }) => (
      <div className='card col-6'>
        { children }
        <div className='card-body'>
          <h6 className='card-title'>
            <LoremText unit='w' />
          </h6>
          <p className='card-text'>
            <LoremText />
          </p>
          <a href='#' className='btn btn-primary'>Share</a>
        </div>
      </div>
    )

    return (
      <div className='container'>
        <h3>Custom Elements/Components</h3>
        <p>Default is div > image tag</p>
        <div className='row'>
          <LoremImage
            renderAs={CustomComponent}
            subClass='img-fluid'
            width={500}
            height={350}
          />
          <LoremImage
            renderAs={CustomComponent}
            subClass='img-fluid'
            width={500}
            height={500}
          />
          <LoremImage
            renderAs={CustomComponent}
            subClass='img-fluid'
            width={350}
            height={450}
          />
          <LoremImage
            renderAs={CustomComponent}
            subClass='img-fluid'
            width={350}
            height={350}
          />
        </div>
      </div>
    )
  })
