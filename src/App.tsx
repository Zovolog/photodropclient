import { createContext, useState } from "react";
import { Main } from "./Components/Main";
interface auth {
  isAuthorized: any;
  getIsAuthorized: any;
}
export const token = createContext({} as auth);
function App() {
  const [isAuthorized, getIsAuthorized] = useState(
    sessionStorage.getItem("access_token_client_part")
  );
  return (
    <token.Provider
      value={{
        isAuthorized,
        getIsAuthorized,
      }}
    >
      <div>
        <Main />
      </div>
    </token.Provider>
  );
}

export default App;
