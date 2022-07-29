import React from "react";
import CKEditor from "ckeditor4-react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <CKEditor
        data="<p>This is an example CKEditor 4 WYSIWYG editor instance.</p>"
      />
    </div>
  );
}
