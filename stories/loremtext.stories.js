import React from 'react'
import { storiesOf } from '@storybook/react'

import { LoremText } from '../src'

storiesOf('LoremText', module)
  .add('Default', () => (
    <div>
      <LoremText />
    </div>
  ))
  .add('Custom Length', () => (
    <div>
      <LoremText len={800} />
    </div>
  ))
