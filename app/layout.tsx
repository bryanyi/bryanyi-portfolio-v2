import "./globals.css";

// export const metadata = {
//   title: "Bryan Yi",
//   description: "Bryan Yi's Portfolio",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </>
  );
}
