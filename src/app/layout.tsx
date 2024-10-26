import { Metadata } from 'next';
import '../../styles/globals.css';

export const metadata: Metadata = {
  title: 'Brenda Scarlat',
  description: 'Navegue com a INTERNET mais MODERNA de Santa Catarina!',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        {children}
     </body>
    </html>
  );
}
