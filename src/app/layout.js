import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "react-hot-toast";
import { ProfileProvider } from "@/components/context/ProfileContext";


// app/layout.jsx

export const metadata = {
  title: {
    default: "IdeaVault",
    template: "IdeaVault | %s",
  },
  description:
    "Share, discover, and explore innovative startup ideas with the IdeaVault community.",
};

export default async function RootLayout ({ children }) {

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body>
        <ThemeProvider>
          <ProfileProvider>
          <Navbar />
          <main>{children}</main>
          </ProfileProvider>
          <Footer />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
