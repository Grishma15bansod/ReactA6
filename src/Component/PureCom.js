import React from 'react'

function PureCom() {
  return (
    <div>
<h1>Pure component</h1>
<p>
A function is said to be pure if the return value is determined by its input values only and the return value is always the same for the same input values. A React component is said to be pure if it renders the same output for the same state and props. For React pure class components, React provides the PureComponent base class. Class components that extend the React.PureComponent classes are treated as pure components.
</p>

    </div>
  )
}

export default PureCom