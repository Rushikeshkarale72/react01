import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const Editor = () => {
  const [text, setText] = useState("# Markdown Preview");

  const getText = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="container">
      <div className="col1">
        <textarea
          name="editor"
          value={text}
          // cols="50"
          rows="100"
          onChange={getText}
        ></textarea>
      </div>
      <div className="col2">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Editor;