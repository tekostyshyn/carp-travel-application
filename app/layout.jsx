import "@styles/globals.css";
import { Inter, Karantina } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const karantina = Karantina({
  subsets: ["latin"],
  weight: "400",
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <title>CarpTravel App</title>
      <meta name="description" content="Uncover Carpathians Secrets with CarpTravel!" />
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
