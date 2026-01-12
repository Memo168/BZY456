'use client'

import { useLangStore } from '@/store/langStore';

export default function Footer() {
  const { lang } = useLangStore();

  return (
    <footer className="bg-[#F2EAE6] text-gray-800 px-8 py-6 text-center text-sm">
      <p>RBH 莱茵兄弟国际贸易 © 2026 版权所有</p>
      <p>邮箱：info@rbh.com ｜ 电话：+49 176 9316 2072</p>
      <p>{lang === 'cn' ? '地址：浙江省衢州市龙游县 / 德国北威州迪伦 52349' : 'Adresse: Longyou, Quzhou, Zhejiang / Düren, NRW, Deutschland 52349'}</p>
    </footer>
  );
}
