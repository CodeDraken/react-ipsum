import React from 'react'
import { storiesOf } from '@storybook/react'

import { LoremText } from '../src'

storiesOf('LoremText', module)
  .add('Default', () => (
    <p>
      <LoremText />
    </p>
  ))
  .add('Max Length', () => (
    <p>
      <LoremText len={10} />
    </p>
  ))
  .add('Paragraphs', () => (
    <div>
      <LoremText unit='p' subEl='p' count={3} />
    </div>
  ))
  .add('Words', () => (
    <LoremText renderAs='ul' unit='w' subEl='li' count={10} />
  ))
