import React from 'react'
import { Route, Switch } from 'react-router-dom'
// We will create these two pages in a moment
import HomePage from './pages/HomePage'
import ExperiencePage from './pages/ExperiencePage'
import ProjectPage from './pages/ProjectPage'
import AboutPage from './pages/AboutPage'

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/experience" component={ExperiencePage} />
      <Route exact path="/experience" component={ExperiencePage} />
      <Route exact path="/projects" component={ProjectPage} />
      <Route exact path="/about" component={AboutPage} />
    </Switch>
  )
}
