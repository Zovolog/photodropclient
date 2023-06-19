import { Routes, Route } from "react-router-dom";
import { StartPage } from "./StartPage/StartPage";
import { CodePage } from "./CodePage/CodePage";
import { SelfiePage } from "./SelfiePage/SelfiePage";
import { MainPage } from "./MainPage/MainPage";
import { AlbumPage } from "./AlbumPage/AlbumPage";
import { UserProfile } from "./UserProfile/UserProfile";
import { ChangeNamePage } from "./ChangeNamePage/ChangeNamePage";

export const Main: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/verification-code" element={<CodePage />} />
        <Route path="/selfie-page/:clientId" element={<SelfiePage />} />
        <Route path="/main-page/:clientId" element={<MainPage />} />
        <Route path="/album-page/:albumId" element={<AlbumPage />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/change-name" element={<ChangeNamePage />} />
      </Routes>
    </div>
  );
};
