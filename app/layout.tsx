import "@/app/ui/global.css"; 
import { inter } from "@/app/ui/fonts";

// fundamentals using aliases @
// Absolute Import -The baseUrl configuration option allows you to import directly from the root of the project.
// Module Import- In addition to configuring the baseUrl path, you can use the "paths" option to "alias" module paths.
// if baseUrl is not specified then baseUrl will be the the directory containing tsconfig.json
// refrence https://nextjs.org/docs/app/building-your-application/configuring/absolute-imports-and-module-aliases



// this is root layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} >{children}</body>
    </html>
  );
}
