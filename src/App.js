import logo from './assets/img/logo.svg';
import './assets/css/App.css';
import News from "./component/News";
import Box from "./component/Box"
//import Home from "./component/Home";
//import News from "./component/News";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Child from "./component/Child";
import Content from "./component/Content";
// import Box from "./component/Box";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/*<BrowserRouter>*/}
          {/*    <Link to="/">首页</Link>*/}
          {/*    <Link to="/news">新闻</Link>*/}
          {/*    <Routes>*/}
          {/*        <Route exact path="/" element={<Box/>} />*/}
          {/*        <Route path="/news" element={<News/>} />*/}
          {/*    </Routes>*/}
          {/*</BrowserRouter>*/}
          <BrowserRouter>
              <Link to="box">首页</Link>
              <Link to="router">路由内容</Link>
              <Routes>
                  <Route path="box" element={<Box/>}/>
                  <Route path="/router" element={<Child/>}/>
                  <Route path="/content/:aid" elment={<Content/>}/>
              </Routes>
          </BrowserRouter>
          <News/>
      </header>
    </div>
  );
}

export default App;
