import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const Home = () => (
    <div>
      <h2>Home</h2>
      <p>
        This is the home page!
      </p>
    </div>
)

const About = () => (
    <div>
      <h2>About</h2>
      <p>
        This is the about page!
      </p>
    </div>
)

const Contact = ({ match }) => (
    <div>
      <h2>Contact</h2>
      <p>
        This is the contact us page!
      </p>
    </div>
)

const App = () => (
    <div>
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <p> Go to /</p>
                        </li>
                        <li>
                            <p> Go to /About</p>
                        </li>
                        <li>
                            <p> Go to /Contact</p>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
)
export default App;