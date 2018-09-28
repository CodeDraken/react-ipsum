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
