import React, { useState, useEffect } from "react";
import "./App.css";
import CodeWriter from "./component/codewriter";

function App() {
  const [html, sethtml] = useState("");
  const [css, setcss] = useState("");
  const [js, setjs] = useState("");
  const [sourcecode, setsourcecode] = useState("");
  useEffect(() => {
    const interval = setTimeout(() => {
      setsourcecode(`<html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
</html>`);
    }, 250);
    return () => clearTimeout(interval);
  }, [html, css, js]);
  return (
    <div className="App">
      <div className="editorWrap">
        <CodeWriter
          name="Html"
          sethtml={sethtml}
          values={html}
          language="html"
        />
        <CodeWriter name="Css" sethtml={setcss} values={css} language="css" />
        <CodeWriter name="Js" sethtml={setjs} values={js} language="js" />
      </div>
      <div className="frame">
        <iframe
          className="iframe"
          title="output"
          frameBorder="0"
          height="100%"
          width="100%"
          sandbox="allow-scripts"
          srcDoc={sourcecode}
        />
      </div>
    </div>
  );
}

export default App;
