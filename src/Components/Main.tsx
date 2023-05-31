import { Routes, Route } from "react-router-dom";
import { StartPage } from "./StartPage/StartPage";
import { CodePage } from "./CodePage/CodePage";
import { SelfiePage } from "./SelfiePage/SelfiePage";

export const Main: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/verification-code" element={<CodePage />} />
        <Route
          path="/selfie-page/:clientId"
          element={<SelfiePage />}
        />
      </Routes>
    </div>
  );
};
