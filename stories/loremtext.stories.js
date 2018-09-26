import React from 'react'
import { storiesOf } from '@storybook/react'

import { LoremText } from '../src'

storiesOf('LoremText', module)
  .add('Default', () => (
    <div>
      <LoremText />
    </div>
  ))
  .add('Max Length', () => (
    <div>
      <LoremText len={10} />
    </div>
  ))
