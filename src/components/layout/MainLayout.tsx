import type { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header />
      <main className="flex-grow bg-gray-50">{children}</main>
    </div>
  );
}
