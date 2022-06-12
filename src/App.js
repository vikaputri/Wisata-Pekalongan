import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Destination from "./containers/Destination";
import Destinations from "./containers/Destinations";
import Oleholehs from "./containers/Oleholehs";
import Oleholeh from "./containers/Oleholeh";
import Kuliners from "./containers/Kuliners";
import Kuliner from "./containers/Kuliner";
import Category from "./containers/Category";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
      	<Header/>
        <Switch>
          <Route path="/" component={Destinations} exact />
          <Route path="/article/:id" component={Destination} exact />
          <Route path="/category/:id" component={Category} exact />
          <Route path="/kuliner" component={Kuliners} exact />
          <Route path="/oleholeh" component={Oleholehs} exact />
          <Route path="/kuliner/:id" component={Kuliner} exact />
          <Route path="/oleholeh/:id" component={Oleholeh} exact />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

