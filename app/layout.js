export const metadata = {
  title: "Urbanova Capital",
  description: "Plataforma de inversión inmobiliaria escalable",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}