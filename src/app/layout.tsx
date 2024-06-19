import Layout from "@/components/Layout/layout";
import { Navbar } from "@/components/Navbar/navbar";
import Sidebar from "@/components/Sidebar/sidebar";
import { sidebarItemsData } from "@/constants/sidebarItemsData";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "kickyui",
  description: "kickyui is design website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background">
            <Navbar
              logo="kickyui"
              navLinks={[
                { name: "Components", href: "/components/button" },
                { name: "Themes", href: "/themes" },
              ]}
              socialLinks={[
                { name: "GitHub", href: "https://github.com/kicky1/kickyui" },
              ]}
            />
            <Layout
              sidebar={<Sidebar items={sidebarItemsData} />}
              children={children}
            />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
