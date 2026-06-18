import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import ProjectPage from "@/pages/ProjectPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projeto/:projectId" element={<ProjectPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
