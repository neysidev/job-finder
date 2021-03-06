import SimpleBar from 'simplebar-react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Applied from './Applied'
import Saved from './Saved'
import Companies from './Companies'

export default function App() {
  return (
    <SimpleBar className="max-h-screen">
      <Router>
        <Switch>
          <Route path="/companies" component={Companies} />
          <Route path="/saved" component={Saved} />
          <Route path="/applied" component={Applied} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </SimpleBar>
  )
}
