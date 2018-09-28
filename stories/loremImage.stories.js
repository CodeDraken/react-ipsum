import React from 'react'
import { storiesOf } from '@storybook/react'

import { LoremImage } from '../src'

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
