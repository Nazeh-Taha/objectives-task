import { CssBaseline } from "@material-ui/core";
import { useState } from "react";
import Loading from "./components/Loading";
import Router from "./router";

function App() {
  const [loading] = useState(false);

  return loading ? (
    <Loading />
  ) : (
    <>
      <CssBaseline />
      <Router />
    </>
  );
}

export default App;
