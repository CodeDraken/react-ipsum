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
  .add('Paragraphs', () => {
    const myComponent = ({ children }) => (
      <div>
        <strong>Paragraph block</strong>
        <br />

        { children }

        <br />
      </div>
    )

    return (
      <div>
        <h3>Default Paragraph</h3>
        <LoremText unit='p' />

        <hr />

        <h3>Custom Component</h3>
        <LoremText unit='p' subEl={myComponent} count={3} />
      </div>
    )
  })
  .add('Words', () => (
    <div>
      <h3>Default Words</h3>
      <LoremText unit='w' />

      <hr />

      <h3>Custom elements and classes</h3>
      <LoremText
        renderAs='ul'
        className='list-group'
        unit='w'
        subEl='li'
        subClass='list-group-item'
        count={5}
      />
    </div>
  ))
