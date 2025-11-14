export const metadata = {
  title: 'Salut - Application de Salutation',
  description: 'Une application conviviale pour saluer en français',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
