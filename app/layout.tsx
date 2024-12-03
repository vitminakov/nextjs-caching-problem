import Providers from "./providers";
import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  header,
}: {
  children: React.ReactNode;
  header: any;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {header}
          {children}
        </Providers>
      </body>
    </html>
  );
}
