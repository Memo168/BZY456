'use client'

import { useLangStore } from '@/store/langStore';

export default function ContactPage() {
  const { lang } = useLangStore();

  return (
    <section className="py-20 px-6 bg-white text-center">
      <h1 className="text-3xl font-bold text-[#8B3A3A] mb-6">
        {lang === 'cn' ? '联系我们' : 'Kontaktieren Sie uns'}
      </h1>

      <p className="text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
        {lang === 'cn'
          ? '欢迎通过以下方式联系我们，我们会尽快与您取得联系。'
          : 'Kontaktieren Sie uns gerne über die folgenden Wege – wir melden uns schnellstmöglich bei Ihnen.'}
      </p>

      <div className="text-gray-600">
        <p className="mb-2">
          {lang === 'cn' ? '邮箱：' : 'E-Mail:'} <a href="mailto:info@rbh.com" className="underline">info@rbh.com</a>
        </p>
        <p className="mb-2">
          {lang === 'cn' ? '电话：' : 'Telefon:'} +49 176 9316 2072
        </p>
        <p>
          {lang === 'cn'
            ? '地址：浙江省衢州市龙游县 / 德国北威州迪伦 52349'
            : 'Adresse: Longyou, Quzhou, Zhejiang (China) / Düren 52349, NRW (Deutschland)'}
        </p>
      </div>
    </section>
  );
}
