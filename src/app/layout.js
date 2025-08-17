// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Aprin',
  description: 'none',
};


export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}