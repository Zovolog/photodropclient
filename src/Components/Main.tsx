import { Routes, Route } from "react-router-dom";
import { StartPage } from "./StartPage/StartPage";
import { CodePage } from "./CodePage/CodePage";

export const Main: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/verification-code" element={<CodePage />} />
      </Routes>
    </div>
  );
};
