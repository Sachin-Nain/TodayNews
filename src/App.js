import Sports from './Components/Sports';
import Header from './Components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Sports key="general" catgory="general" />} />
          <Route exact path='/entertainment' element={<Sports key="entertainment" catgory="entertainment" />} />
          <Route exact path='/technology' element={<Sports key="technology" catgory="technology" />} />
          <Route exact path='/science' element={<Sports key="science" catgory="science" />} />
          <Route exact path='/sports' element={<Sports key="sports" catgory="sports" />} />
          <Route exact path='/health' element={<Sports key="health" catgory="health" />} />
          <Route exact path='/business' element={<Sports key="business" catgory="business" />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
