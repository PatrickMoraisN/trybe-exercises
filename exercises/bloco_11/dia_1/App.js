import React from 'react';
const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  let array = [
    'estudar react',
    'estudar html',
    'estudar css',
    'rezar'
  ]
  return (<>
    {array.map(elem => task(elem))}
  </>
  )
}

export default App;
