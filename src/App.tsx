import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import MensClothing from "./pages/MensClothing";
import WomensClothing from "./pages/WomensClothing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="mens-clothing" element={<MensClothing />} />
          <Route path="womens-clothing" element={<WomensClothing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
