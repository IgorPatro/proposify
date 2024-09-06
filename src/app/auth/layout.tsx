import React, { type ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex h-full min-h-screen w-full items-center justify-center p-4">
      {children}
    </div>
  );
};

export default AuthLayout;
