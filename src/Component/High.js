import React from 'react'

function High() {
  return (
    <div>
        <h1>Higher order Function</h1>
        <p>Higher-Order Component in React is a function that takes a component as an argument and returns a new component. It is the state-of-the-art technique in React for reusing component logic. The HOC adds additional data or functionality to an original component. These components are not part of the React API, but a pattern that comes to the fore from React’s compositional nature.</p>
        <p>Example</p>
        <p>const EnhancedComponent = higherOrderComponent(WrappedComponent);</p>
    </div>
  )
}

export default High