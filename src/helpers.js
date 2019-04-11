import React from 'react'

const generateList = (list) => {
  const components = list.map(item => <li>{item}</li>)
  return <ul>{components}</ul>
}


export { generateList }
