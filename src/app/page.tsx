'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<'cn' | 'de'>('cn');
  const toggleLang = () => setLang(prev => (prev === 'cn' ? 'de' : 'cn'));

  const navItems = lang === 'cn'
    ? ['首页', '关于我们', '服务', '联系我们']
    : ['Startseite', 'Über uns', 'Dienstleistungen', 'Kontakt'];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-screen-xl mx-auto px-4">

        {/* Header 顶部 */}
        <header className="bg-white text-[#8B3A3A] px-6 pt-12 pb-6 border-b border-gray-200">
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6">
              <div className="text-6xl font-extrabold leading-none tracking-wide">RBH</div>
              <div className="flex flex-col text-sm leading-tight pt-1 md:pt-2 text-center md:text-left text-[#2B2B2B]">
                <span>Rhein</span>
                <span>Brueder</span>
                <span>Handel</span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-2xl font-semibold">莱茵兄弟国际贸易</div>
              <div className="text-sm text-gray-500">LOGO 待添加</div>
            </div>
          </div>
        </header>

        {/* 语言切换按钮：导航栏上方右上角 */}
        <div className="flex justify-end items-center px-6 py-2">
          <button
            onClick={toggleLang}
            className="text-[#8B3A3A] text-sm font-medium hover:underline"
          >
            {lang === 'cn' ? 'CN / DE' : 'DE / CN'}
          </button>
        </div>

        {/* 顶部装饰条 */}
        <div className="w-full h-1 bg-[#8B3A3A]" />

        {/* 导航栏（含响应式） */}
        <nav className="bg-[#2B2B2B] text-white px-4 h-14 flex items-center justify-between relative text-sm font-medium border-t-4 border-[#8B3A3A]">

          {/* 汉堡按钮（仅移动端） */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* 桌面导航选项（靠左） */}
          <div className="hidden md:flex flex-1 justify-start space-x-6 h-full">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="px-6 h-full flex items-center justify-center text-sm font-semibold tracking-wide uppercase hover:bg-[#8B3A3A] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* 搜索按钮靠右 */}
          <button className="h-full flex items-center justify-center px-4 hover:bg-[#8B3A3A] transition-colors">
            <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 20 20">
              <path d="M12.9 14.32a8 8 0 1 1 1.414-1.414l4.387 4.387-1.414 1.414-4.387-4.387zM8 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </button>

          {/* 折叠菜单（移动端） */}
          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-[#2B2B2B] flex flex-col items-start px-4 py-3 space-y-2 md:hidden z-10">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-full py-2 px-3 hover:bg-[#8B3A3A] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </nav>

        {/* 大图区域留白 */}
        <div className="h-24 bg-white" />
        <section className="bg-gray-100 h-[300px] flex items-center justify-center text-gray-500 text-lg">
          {lang === 'cn' ? '大图区域，后续添加横幅图' : 'Banner Bereich – folgt später'}
        </section>

        {/* 欢迎语 */}
        <section className="py-20 text-center bg-white">
          <h1 className="text-3xl font-bold text-[#8B3A3A]">
            {lang === 'cn'
              ? '欢迎访问 RBH 莱茵兄弟国际贸易'
              : 'Willkommen bei RBH Rhein Brüder Handel'}
          </h1>
        </section>

        {/* 关于我们 */}
        <section className="px-8 py-12 bg-white text-center">
          <h2 className="text-2xl font-bold mb-4">
            {lang === 'cn' ? '关于我们' : 'Über uns'}
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
            {lang === 'cn'
              ? '成立于 2025 年，RBH 莱茵兄弟国际贸易发源于德国莱茵流域与中国长江三角洲，致力于推动全球化发展和现代丝绸之路，连接中欧商品市场和文化交流。'
              : 'Gegründet im Jahr 2025, stammt RBH Rhein Brüder Handel aus dem Rhein-Gebiet in Deutschland und dem Jangtse-Delta in China. Unser Ziel ist es, die Globalisierung und eine moderne Seidenstraße zu fördern, die europäische und chinesische Märkte und Kulturen verbindet.'}
          </p>
        </section>

        {/* 三大服务领域 */}
        <section className="px-8 py-12 bg-gray-50 text-center">
          <h2 className="text-2xl font-bold mb-8">
            {lang === 'cn' ? '主要业务领域' : 'Unsere Hauptbereiche'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded shadow-sm bg-white">
              <h3 className="text-xl font-semibold mb-2">
                {lang === 'cn' ? '高端礼品跨国贸易' : 'Internationale Geschenkartikel'}
              </h3>
              <p className="text-gray-600">
                {lang === 'cn'
                  ? '面向国际市场的特色礼品出口，满足多样商业文化需求。'
                  : 'Export von hochwertigen Geschenkartikeln für internationale Geschäftsanlässe.'}
              </p>
            </div>
            <div className="p-6 border rounded shadow-sm bg-white">
              <h3 className="text-xl font-semibold mb-2">
                {lang === 'cn' ? '食品进出口' : 'Lebensmittelhandel'}
              </h3>
              <p className="text-gray-600">
                {lang === 'cn'
                  ? '专注于高标准食品贸易，保障餐饮行业品质与安全。'
                  : 'Handel mit hochwertigen Lebensmitteln – sicher, geprüft und zuverlässig.'}
              </p>
            </div>
            <div className="p-6 border rounded shadow-sm bg-white">
              <h3 className="text-xl font-semibold mb-2">
                {lang === 'cn' ? '海外建材贸易' : 'Baumaterialien-Export'}
              </h3>
              <p className="text-gray-600">
                {lang === 'cn'
                  ? '桥接中欧建材供需，服务工程项目及长期合作客户。'
                  : 'Verbindung von Bauangeboten zwischen Europa und China für Großprojekte.'}
              </p>
            </div>
          </div>
        </section>

        {/* 联系我们 */}
        <section className="text-center py-12 bg-white">
          <h3 className="text-xl font-semibold mb-2">
            {lang === 'cn' ? '准备拓展您的国际业务？' : 'Bereit für internationale Expansion?'}
          </h3>
          <p className="text-gray-600 mb-4">
            {lang === 'cn'
              ? '联系我们，获取专业支持与服务。'
              : 'Kontaktieren Sie uns für professionelle Beratung und Service.'}
          </p>
          <button className="bg-[#8B3A3A] text-white px-6 py-2 rounded hover:bg-[#732f2f]">
            {lang === 'cn' ? '联系我们' : 'Kontakt'}
          </button>
        </section>

        {/* Footer 底部信息 */}
        <footer className="bg-[#F2EAE6] text-gray-800 px-8 py-6 text-center text-sm">
          <p>RBH 莱茵兄弟国际贸易 © 2026 版权所有</p>
          <p>邮箱：info@rbh.com ｜ 电话：+49 176 9316 2072</p>
          <p>地址：浙江省衢州市龙游县 / 德国北威州迪伦 52349</p>
        </footer>
      </div>
    </div>
  );
}
