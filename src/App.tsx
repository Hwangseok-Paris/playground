import { useRoutes } from "react-router-dom";
import routes from "./routes/routes.tsx";

import "./App.css";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";

// const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
//   // const navigate = useNavigate();
//   // const location = useLocation();

//   return <>{children}</>;
// };

function App() {
  const element = useRoutes(routes);
  return <>{element}</>;
}

export default App;
