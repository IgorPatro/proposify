import React, { type ReactNode } from "react";

interface EditorLayoutProps {
  children: ReactNode;
}

const EditorLayout = ({ children }: EditorLayoutProps) => {
  return (
    <div className="p-8">
      <nav>
        <ul className="flex gap-2">
          <li>
            <a href="/dashboard">Main tools</a>
          </li>
          <li>
            <a href="/dashboard/templates">Temporary nav</a>
          </li>
        </ul>
      </nav>
      <div className="pt-8">{children}</div>
    </div>
  );
};

export default EditorLayout;
