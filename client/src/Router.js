import { BrowserRouter, Routes, Route } from "react-router";
import MainPage from "./pages/main/main";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={MainPage} />
        <Route path="/menu/:id" element={MainPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
