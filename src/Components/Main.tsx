import { Routes, Route, Navigate } from "react-router-dom";
import { StartPage } from "./StartPage/StartPage";
import { CodePage } from "./CodePage/CodePage";
import { SelfiePage } from "./SelfiePage/SelfiePage";
import { MainPage } from "./MainPage/MainPage";
import { AlbumPage } from "./AlbumPage/AlbumPage";
import { UserProfile } from "./UserProfile/UserProfile";
import { ChangeNamePage } from "./ChangeNamePage/ChangeNamePage";
import { useContext } from "react";
import { token } from "../App";
import { SuccessfulPaymentPage } from "./SuccessfulPaymentPage/SuccessfulPaymentPage";
import { TermsOfUse } from "./TermsOfUsePage/TermsOfUse";
import { PrivacyPolicy } from "./PrivacyPolicyPage/PrivacyPolicy";

export const Main: React.FC = () => {
  const { isAuthorized, getIsAuthorized } = useContext(token);
  return (
    <Routes>
      {/* <Route path="/" element={<StartPage />} />
      <Route path="/verification-code" element={<CodePage />} />
      <Route
        path="/selfie-page"
        element={isAuthorized ? <SelfiePage /> : <Navigate to={"/"} />}
      />
      <Route
        path="/main-page"
        element={isAuthorized ? <MainPage /> : <Navigate to={"/"} />}
      />
      <Route path="/album-page/:albumId" element={<AlbumPage />} />
      <Route
        path="/user-profile"
        element={isAuthorized ? <UserProfile /> : <Navigate to={"/"} />}
      />
      <Route
        path="/change-name"
        element={isAuthorized ? <ChangeNamePage /> : <Navigate to={"/"} />}
      /> */}
      <Route path="/" element={<StartPage />} />
      <Route path="/verification-code" element={<CodePage />} />
      <Route path="/selfie-page" element={<SelfiePage />} />
      <Route path="/main-page" element={<MainPage />} />
      <Route path="/album-page/:albumId" element={<AlbumPage />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/change-name" element={<ChangeNamePage />} />
      <Route path="/successful-payment" element={<SuccessfulPaymentPage />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
};
