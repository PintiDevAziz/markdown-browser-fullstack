import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { oneDark } from "@codemirror/theme-one-dark";
import { markdown } from "@codemirror/lang-markdown";
const MarkdownEditor = ({ markdownValue, setMarkdownValue }) => {
  return (
    <div className="w-1/2 bg-themeBlack h-full  flex-shrink-0 ">
      <div className="text-gray-500 uppercase tracking-widest font-bold w-full h-10 flex items-center bg-themeGrayDarker px-6">
        MarkDown
      </div>
      <CodeMirror
        height="87vh"
       
        className="border-b  break-words border-textGray"
        theme={oneDark}
   placeholder={'Enter your markdown'}
        onChange={(value) => {
          setMarkdownValue(value);
        }}
        value={markdownValue}
        extensions={[markdown({ defaultCodeLanguage: "javascript" })]}
      />
    </div>
  );
};

export default MarkdownEditor;
