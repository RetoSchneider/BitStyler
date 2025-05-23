import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'BitStyler - Warhammer 40k ASCII Art Generator',
  description: 'Transform your images into ASCII art with a Warhammer 40k aesthetic',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <div className="min-h-screen flex flex-col">
          <header className="bg-black py-4 border-b-2 border-red-900">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="text-red-700 text-3xl font-bold tracking-wider">BITSTYLER</div>
                  <div className="text-gray-500 text-xs">{'// IMPERIAL EDITION'}</div>
                </div>
                <nav>
                  <ul className="flex space-x-6">
                    <li>
                      <Link
                        href="/"
                        className="text-gray-300 hover:text-red-500 uppercase text-sm tracking-wider font-bold"
                      >
                        ASCII Art
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>

          <main className="flex-grow py-8">
            <div className="container mx-auto px-4">{children}</div>
          </main>

          <footer className="bg-black py-4 border-t-2 border-red-900 text-gray-600 text-sm">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center">
                <div>
                  <p>© {new Date().getFullYear()} BitStyler // For the Emperor</p>
                </div>
                <div>
                  <p className="text-xs">The Imperium of Man approves this cogitator program</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
