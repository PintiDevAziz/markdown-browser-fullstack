import React, { useEffect } from "react";
import { AiOutlineMenu, AiOutlineDownload } from "react-icons/ai";
import { useState } from "react";
const Header = ({ markdownValue }) => {
  const [error, setError] = useState();

  const saveFile = async () => {
    if (markdownValue) {
      let fileTitile = prompt("Enter file title");

      const markdownFile = new File([markdownValue], `${fileTitile}.md`, {
        type: "text/plain",
      });
      const fileBlobUrl = URL.createObjectURL(markdownFile);
      let link = document.createElement("a");
      link.setAttribute("href", fileBlobUrl);
      link.setAttribute("download", markdownFile.name);
      document.body.appendChild(link);
      link.click();
      link.remove();
      setError(false);
    } else {
      setError(true);
    }
  };
  useEffect(() => {
    if (error) {
      alert("you do not need empty file ");
    }
  }, [error]);
  return (
    <div className="w-full h-14 bg-themeGray flex items-center px-4 justify-between text-white">
      <div className="flex items-center gap-x-6">
        <button className="bg-[#35383F] h-10 w-10 flex items-center justify-center ">
          <AiOutlineMenu className="text-2xl" />
        </button>
        <div className="font-semibold tracking-[0.4rem] uppercase border-r border-gray-300 pr-3">
          MarkDown
        </div>
        {/* add tabs component  */}
      </div>
      <div className="flex items-center gap-x-4 text-gray-300">
        <button
          onClick={saveFile}
          className="flex items-center gap-x-1 bg-themeOrange h-10 rounded px-3 text-white hover:bg-themeOrange/90 transition-all"
        >
          <AiOutlineDownload />
          <p>Download File</p>
        </button>
      </div>
    </div>
  );
};

export default Header;
