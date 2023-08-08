import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./globals.css";
import GlobalStateProvider from "../store/GlobalStateProvider";

export const metadata = {
  title: "SpaceX launchs",
  description: "Test created by Antonio Fernandez @Silveste",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalStateProvider>{children}</GlobalStateProvider>
      </body>
    </html>
  );
}
