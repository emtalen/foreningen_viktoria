import React from 'react'
import StartPage from './components/StartPage'
import Purposes from "./components/Purposes";
import { Switch, Route} from 'react-router-dom';
import { CSSTransition, TransitionGroup} from 'react-transition-group'
const App = () => {
  return (
    <>
      <StartPage/>
      <Route render={({ location}) => (
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={300} classNames='fade'>
            <Switch location={location}>
              <Route exact path='/' component={Purposes}></Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </>
  )
}

export default App

