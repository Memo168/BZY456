'use client'

import { useLangStore } from '@/store/langStore'

export default function AboutPage() {
  const { lang } = useLangStore()

  return (
    <main className="px-6 py-12 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-[#8B3A3A]">
        {lang === 'cn' ? '关于我们' : 'Über uns'}
      </h1>

      <p className="mb-4 leading-7">
        {lang === 'cn' ? (
          <>
            我们不仅从事 <strong>“产品”</strong> 的进出口，更系统性地开展
            <strong>“服务”</strong> 与 <strong>“技术”</strong> 的跨境流动，
            并始终建立在欧盟与中国双重合规框架之下。
          </>
        ) : (
          <>
            Wir betreiben nicht nur den Import und Export von <strong>Produkten</strong>,
            sondern fördern systematisch den grenzüberschreitenden Fluss von
            <strong> Dienstleistungen </strong> und <strong> Technologien </strong> –
            stets auf der Grundlage der dualen Konformität zwischen der EU und China.
          </>
        )}
      </p>

      <p className="mb-4 leading-7">
        {lang === 'cn'
          ? '我们的核心能力在于：在合法、可控、可审计的前提下，打通产品、服务与技术在欧盟与中国之间的协同流通。'
          : 'Unsere Kernkompetenz liegt darin, den koordinierten Fluss von Produkten, Dienstleistungen und Technologien zwischen der EU und China unter legalen, kontrollierten und auditierbaren Bedingungen zu ermöglichen.'}
      </p>

      <p className="mt-8 italic text-gray-600">
        {lang === 'cn'
          ? '我们做的不是简单的进出口，而是构建欧盟与中国之间长期、稳定、可持续的产业合作通道。'
          : 'Unser Ziel ist es nicht nur der einfache Handel, sondern der Aufbau eines langfristigen, stabilen und nachhaltigen Kooperationskanals zwischen der EU und China.'}
      </p>
    </main>
  )
}
