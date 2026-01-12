'use client';

import '@/globals.css';
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className="min-h-screen bg-white text-gray-900">
        {/* ✅ 限宽 + 居中容器 */}
        <div className="max-w-screen-xl mx-auto px-4">
          <Header />
          <Nav />
          <main className="py-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
