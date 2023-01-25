"use client"
import Link from "next/link";

import theme from "@theme/theme";
import {ThemeProvider} from "@mui/material";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <h1>App</h1>
      <Link href='contact'>Contact</Link>
    </ThemeProvider>
  );
}
export default App;
