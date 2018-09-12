import React from 'react'
import ReactDOM from 'react-dom'
import css from './css/style.css'

class App extends React.Component {
  getText = () => {
    return "hello world";
  }
  render() {
    return (
      <h1 className='title'>{this.getText()}</h1>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);