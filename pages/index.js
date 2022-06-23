import React, { useState } from "react";
import Header from "../components/Header";

import MarkdownEditor from "../components/MarkdownEditor";
import Preview from "../components/Preview";
const Index = () => {
  const [markdownValue, setMarkdownValue] = useState(``);

  return (
    <div>
      <Header markdownValue={markdownValue}  />
      <div className="flex h-[calc(100vh-3.5rem)]">
        <MarkdownEditor
          setMarkdownValue={setMarkdownValue}
          markdownValue={markdownValue}
        />
        <div className="h-full w-1 bg-themeGray"></div>
        <Preview markdownValue={markdownValue} />
      </div>
    </div>
  );
};

export default Index;
