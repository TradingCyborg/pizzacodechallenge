import { BrowseRouter, Routes, Route, Switch} from 'react-router-dom';
import Home from "../Home";
import Navbar from "../Navbar";
import Restaurant from "../Restaurant";


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/restaurants/:id">
          <Restaurant />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;