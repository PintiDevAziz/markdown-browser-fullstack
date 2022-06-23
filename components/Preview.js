import React from "react";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism } from "react-syntax-highlighter";
const Preview = ({ markdownValue }) => {
  return (
    <div className="w-1/2 flex-shrink-0 overflow-auto bg-[#2C2D31]">
      <div className="text-gray-500 uppercase tracking-widest font-bold w-full h-10 flex items-center bg-themeGrayDarker px-6">
        Preview
      </div>
      <div>
        {markdownValue ? (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            linkTarget="_blank"
            skipHtml={true}
            components={{
              pre: ({ node, ...props }) => (
                <pre className="bg-transparent m-0 " {...props} />
              ),
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <div className="relative">
                    <div className="absolute top-1 right-3 text-sm  uppercase font-semibold  tracking-wider">
                      {className.replace("language-", "")}
                    </div>
                    <Prism
                      children={String(children).replace(/\n$/, "")}
                      style={dracula}
                      language={match[1]}
                      {...props}
                    />
                  </div>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
            className="prose prose-2xl prose-invert p-4 bg-themeGray w-full h-[41.5rem]"
          >
            {markdownValue}
          </ReactMarkdown>
        ) : (
          <div className="text-white w-full h-[40rem] font-bold animate-pulse text-3xl tracking-[0.4rem] flex items-center justify-center">
            First enter something for Preview
          </div>
        )}
      </div>
    </div>
  );
};

export default Preview;
