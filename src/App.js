import './App.css';
import { Header } from './Webpages/Header';
// import { Header } from './Pages/Header';
// import {Input} from './Pages/Input'
// import {FileUploader} from './Pages/FileUploader'
import { SideBar } from './Webpages/SideBar';
import { ContentBox } from './Webpages/ContentBox';
import { TabComponent as FileUploader } from './Webpages/FileUploader';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        {/* <Header title="Artemis"/> */}
        {/* <Input/> */}
        {/* <FileUploader/> */}
        <SideBar />
        <div className="nk-wrap ">
          <Header />
          <Routes>
            <Route path="/" element={<ContentBox />} />
            <Route path="/chat" element={<FileUploader />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
