'use client';

import { useLangStore } from '@/store/langStore';
import Link from 'next/link'; // ✅ 引入 Link

export default function Header() {
  const { lang } = useLangStore();

  return (
    <header className="bg-white text-[#8B3A3A] px-6 pt-12 pb-6 border-b border-gray-200">
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">

        {/* ✅ 左侧 Logo 区域，包裹在 Link 里 */}
        <Link href="/" className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 hover:cursor-pointer">
          <div className="text-6xl font-extrabold leading-none tracking-wide">RBH</div>
          <div className="flex flex-col text-sm leading-tight pt-1 md:pt-2 text-center md:text-left text-[#2B2B2B]">
            <span>Rhein</span>
            <span>Brüeder</span>
            <span>Handel</span>
          </div>
        </Link>

        {/* 右侧标题区域 */}
        <div className="text-center md:text-right">
          <div className="text-2xl font-semibold">
            {lang === 'cn' ? '莱茵兄弟国际贸易' : 'RBH Rhein Brüder Handel'}
          </div>
          <div className="text-sm text-gray-500">LOGO 待添加</div>
        </div>

      </div>
    </header>
  );
}
