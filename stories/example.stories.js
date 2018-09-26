import React from 'react'
import { storiesOf } from '@storybook/react'

import { Example } from '../src'

storiesOf('Example', module)
  .add('with text', () => (
    <Example>Hello Example</Example>
  ))
