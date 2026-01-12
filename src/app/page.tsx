'use client';

import Link from 'next/link'
import { useLangStore } from '@/store/langStore';

export default function Home() {
  const { lang } = useLangStore();

  return (
    <>
      {/* ✅ 横幅图区域占位 */}
      <section className="bg-gray-100 h-[300px] flex items-center justify-center text-gray-500 text-lg">
        {lang === 'cn'
          ? '大图区域，后续添加横幅图'
          : 'Banner Bereich – folgt später'}
      </section>

      {/* ✅ 欢迎语 */}
      <section className="py-20 text-center bg-white">
        <h1 className="text-3xl font-bold text-[#8B3A3A]">
          {lang === 'cn'
            ? '欢迎访问 RBH 莱茵兄弟国际贸易'
            : 'Willkommen bei RBH Rhein Brüder Handel'}
        </h1>
      </section>

      {/* ✅ 关于我们 */}
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

      {/* ✅ 三大业务领域 */}
      <section className="px-8 py-12 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-8">
          {lang === 'cn' ? '主要业务领域' : 'Unsere Hauptbereiche'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              cn: '高端礼品跨国贸易',
              de: 'Internationale Geschenkartikel',
              descCN: '面向国际市场的特色礼品出口，满足多样商业文化需求。',
              descDE:
                'Export von hochwertigen Geschenkartikeln für internationale Geschäftsanlässe.',
            },
            {
              cn: '食品进出口',
              de: 'Lebensmittelhandel',
              descCN: '专注于高标准食品贸易，保障餐饮行业品质与安全。',
              descDE:
                'Handel mit hochwertigen Lebensmitteln – sicher, geprüft und zuverlässig.',
            },
            {
              cn: '海外建材贸易',
              de: 'Baumaterialien-Export',
              descCN: '桥接中欧建材供需，服务工程项目及长期合作客户。',
              descDE:
                'Verbindung von Bauangeboten zwischen Europa und China für Großprojekte.',
            },
          ].map((item, idx) => (
            <div key={idx} className="p-6 border rounded shadow-sm bg-white">
              <h3 className="text-xl font-semibold mb-2">
                {lang === 'cn' ? item.cn : item.de}
              </h3>
              <p className="text-gray-600">
                {lang === 'cn' ? item.descCN : item.descDE}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ 联系我们 */}
      <section className="text-center py-12 bg-white">
        <h3 className="text-xl font-semibold mb-2">
          {lang === 'cn'
            ? '准备拓展您的国际业务？'
            : 'Bereit für internationale Expansion?'}
        </h3>
        <p className="text-gray-600 mb-4">
          {lang === 'cn'
            ? '联系我们，获取专业支持与服务。'
            : 'Kontaktieren Sie uns für professionelle Beratung und Service.'}
        </p>
        <Link href="/contactus">
  <button className="bg-[#8B3A3A] text-white px-6 py-2 rounded hover:bg-[#732f2f]">
    {lang === 'cn' ? '联系我们' : 'Kontakt'}
  </button>
</Link>
      </section>
    </>
  );
}
