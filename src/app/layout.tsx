import "../styles/globals.css";
import { AppProvider } from "./context/AppContext";

export const metadata = {
  title: "Blue Ribbon Sport Club",
  description: "Internship Frontend Task",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans text-white bg-gradient-to-br from-black via-blue-900 to-black">
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
