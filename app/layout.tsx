import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import { ConvexClientProvider } from '@/components/ConvexClientProvider';
import { getToken } from '@/lib/auth-server';
import './globals.css';

const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pennify — Personal Finance, Crystal Clear',
  description:
    'Track expenses, set budgets, reach your goals. AI-powered categorization with full offline support.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = await getToken();
  return (
    <html lang='en'>
      <body className={`${bricolage.variable} antialiased`}>
        <ConvexClientProvider initialToken={token}>
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
