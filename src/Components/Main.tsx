import { Routes, Route } from "react-router-dom";
import { StartPage } from "./StartPage/StartPage";
import { CodePage } from "./CodePage/CodePage";

export const Main: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CodePage />} />
        <Route path="/verification-code" element={<StartPage />} />
      </Routes>
    </div>
  );
};
