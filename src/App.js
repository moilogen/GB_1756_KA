import React, { Fragment } from "react";
import { Button } from './components/Button/Button';
import { Input } from './components/Input';

import style from './App.module.css';

const name = 'Alex'

function App() {
  return (
    <Fragment>
      <h2 className={style.header} >Hello Geekbrains</h2>
      <Input name={name} />
      <Button name={name} asd="asd" />
    </Fragment>
  )
  
}

export default App;
