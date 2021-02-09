import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import HomePage from './HomePage';
import Login from './Login';
import Signup from './Signup';
import CriarDivida from './CriarDivida'
import SideBar from './Sidebar';
import DividasShowInterno from './DividasShowINT';
import DividasShowInovacao from './DividasShowINO';
import DividasShowTech from './DividasShowTEC';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
              <Route exact path="/">
                <HomePage/>
              </Route>
              <Route exact path="/users/login">
                <Login/>
              </Route>
              <Route exact path="/users/signup">
                <Signup />
              </Route>
              <Route exact path="/dividas/criar">
                <CriarDivida />
              </Route>
              <Route exact path="/dividas/Interno">
                <DividasShowInterno />
              </Route>
              <Route exact path="/dividas/Inovacao">
                <DividasShowInovacao />
              </Route>
              <Route exact path="/dividas/Tech">
                <DividasShowTech />
              </Route>
              <Route exact path="/home">
                <SideBar />
              </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;