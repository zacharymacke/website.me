import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ExperiencePage from './pages/ExperiencePage'
import ProjectPage from './pages/ProjectPage'
import AboutPage from './pages/AboutPage'
import ScrollIntoView from "../src/components/ScrollIntoView"

export default function App() {
  return (
    <ScrollIntoView>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/experience" component={ExperiencePage} />
        <Route exact path="/experience" component={ExperiencePage} />
        <Route exact path="/projects" component={ProjectPage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </ScrollIntoView>
  )
}
