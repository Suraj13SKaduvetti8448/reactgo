import './App.css';
// import Navbar from './components/Navbar';
import Inbox from './components/Inbox';
import Sent from './components/Sent';
import Draft from './components/Draft';
import Spam from './components/Spam';
import Layout from './layouts/layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Inbox/> */}
      {/* <Sent/> */}
      {/* <Layout/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Inbox/>}/>
            <Route path="/sent" element={<Sent/>}/>
            <Route path="/draft" element={<Draft/>}/>
            <Route path="/spam" element={<Spam/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
