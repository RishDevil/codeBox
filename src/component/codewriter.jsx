import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled } from "react-codemirror2";
import {
  faCompressAlt,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CodeWriter = ({ name, sethtml, values, language }) => {
  const [open, setopen] = useState(true);

  const handlechange = (editor, data, value) => {
    sethtml(value);
  };
  return (
    <div className={`editor ${open ? "" : "close"}`}>
      <div className="nav">
        <div className="name">{name}</div>
        <div className="button" onClick={() => setopen(!open)}>
          <FontAwesomeIcon icon={open ? faCompressAlt : faExchangeAlt} />
        </div>
      </div>
      <div className="codeeditor">
        <Controlled
          value={values}
          onBeforeChange={handlechange}
          options={{
            mode: language,

            theme: "material",
            lineNumbers: true,
            lineWrapping: true,
          }}
        />
      </div>
    </div>
  );
};

export default CodeWriter;
