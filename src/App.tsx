import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./HomePage.tsx";
import { DownloadPage } from './DownloadPage.tsx';
import './App.css';
import { SignUpPage } from "./SignUpPage.tsx";

function App() {
  return (
    // Chat GPT assited with how to set this up
    // Initialize Browser Router
    <BrowserRouter>
    {/* Set up Routes */}
      <Routes>
        <Route path="/" element={<SignUpPage/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/DownloadPage" element={<DownloadPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
