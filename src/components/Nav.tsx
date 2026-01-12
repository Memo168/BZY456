'use client'

import { useLangStore } from '@/store/langStore';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const { lang, toggleLang } = useLangStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = lang === 'cn'
    ? ['首页', '关于我们', '服务', '联系我们']
    : ['Startseite', 'Über uns', 'Dienstleistungen', 'Kontakt'];

  const routes = ['/', '/about', '/services', '/contactus'];

  return (
    <>
      {/* 语言切换按钮 */}
      <div className="flex justify-end items-center px-6 py-2">
        <button
          onClick={toggleLang}
          className="text-[#8B3A3A] text-sm font-medium hover:underline"
        >
          {lang === 'cn' ? 'CN / DE' : 'DE / CN'}
        </button>
      </div>

      {/* 导航条 */}
      <nav className="bg-[#2B2B2B] text-white px-4 h-14 flex items-center justify-between relative text-sm font-medium border-t-4 border-[#8B3A3A]">
        {/* 汉堡菜单按钮 */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* 桌面菜单 */}
        <div className="hidden md:flex flex-1 justify-start space-x-6 h-full">
          {navItems.map((item, idx) => {
            const isActive = routes[idx] !== '#contact' && pathname === routes[idx];
            return (
              <Link
                key={idx}
                href={routes[idx]}
                className={`px-6 h-full flex items-center justify-center text-sm font-semibold tracking-wide uppercase transition-colors ${
                  isActive ? 'bg-[#8B3A3A]' : 'hover:bg-[#8B3A3A]'
                }`}
              >
                {item}
              </Link>
            );
          })}
        </div>

        {/* 搜索按钮（右侧） */}
        <button className="h-full flex items-center justify-center px-4 hover:bg-[#8B3A3A] transition-colors">
          <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 20 20">
            <path d="M12.9 14.32a8 8 0 1 1 1.414-1.414l4.387 4.387-1.414 1.414-4.387-4.387zM8 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
          </svg>
        </button>

        {/* 移动端菜单 */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#2B2B2B] flex flex-col items-start px-4 py-3 space-y-2 md:hidden z-10">
            {navItems.map((item, idx) => {
              const isActive = routes[idx] !== '#contact' && pathname === routes[idx];
              return (
                <Link
                  key={idx}
                  href={routes[idx]}
                  className={`w-full py-2 px-3 transition-colors ${
                    isActive ? 'bg-[#8B3A3A]' : 'hover:bg-[#8B3A3A]'
                  }`}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </>
  );
}
