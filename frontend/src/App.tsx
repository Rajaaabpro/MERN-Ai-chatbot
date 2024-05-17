import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sigunp from "./pages/Signup";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
function App() {
  return( 
  <main> 
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sigunp" element={<Sigunp />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
  );
}

export default App;
