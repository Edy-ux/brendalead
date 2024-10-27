import { Metadata } from 'next';
import '../../styles/globals.css';

export const metadata: Metadata = {
  title: 'Brenda Scarlat',
  
  openGraph: {
    title: 'Brenda Scarlat',
    description: 'Navegue com a INTERNET mais MODERNA de Santa Catarina!',
    url: 'https://brendascarlat.vercel.app/',
    siteName: 'Next.js',
    images: [
      {
        url: 'http://localhost:3000/api/og?title=Next.js', // Dynamic og route
        width: 800,
        height: 600,
      },
      {
        url: 'http://localhost:3000/api/og?title=Next.js', // Dynamic og route
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className='h-full bg-zinc-900'>
        {children}
     </body>
    </html>
  );
}
