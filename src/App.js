import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AllQuestionsPage from "./components/pages/AllQuestionsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/all-questions" element={<AllQuestionsPage />}></Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
