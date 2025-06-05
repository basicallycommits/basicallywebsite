import React from "react";
import ReactMarkdown from "react-markdown";

type MarkdownProps = {
  children: string;
};

const headingSizes: Record<number, string> = {
  1: "text-4xl font-bold",
  2: "text-3xl font-semibold",
  3: "text-2xl font-semibold",
  4: "text-xl font-medium",
  5: "text-lg font-medium",
  6: "text-base font-medium",
};

const Markdown: React.FC<MarkdownProps> = ({ children }) => (
  <ReactMarkdown
    components={{
      h1: ({ node, ...props }) => <h1 className={headingSizes[1]} {...props} />,
      h2: ({ node, ...props }) => <h2 className={headingSizes[2]} {...props} />,
      h3: ({ node, ...props }) => <h3 className={headingSizes[3]} {...props} />,
      h4: ({ node, ...props }) => <h4 className={headingSizes[4]} {...props} />,
      h5: ({ node, ...props }) => <h5 className={headingSizes[5]} {...props} />,
      h6: ({ node, ...props }) => <h6 className={headingSizes[6]} {...props} />,
      p: ({ node, ...props }) => <p className="text-base" {...props} />,
    }}
  >
    {children}
  </ReactMarkdown>
);

export default Markdown;
