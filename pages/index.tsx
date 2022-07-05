import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { TbExternalLink } from 'react-icons/tb'

const skills: string[] = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Node.js', 'React.js', 'Vue.js', 'Ruby', 'Ruby on Rails', 'Python', 'AWS', 'GCP', 'Firebase']

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Toyokazu Miura</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-screen-md mx-auto pt-8 pb-24 px-4">
        <h1 className="text-3xl font-medium text-slate-100">Toyokazu Miura (m1ul24)</h1>
        <p>Software Engineer</p>
        <div className="mt-10">
          <div className="w-40 h-40 mx-auto relative">
            <Image src="/profile.jpeg" layout="fill" objectFit='contain' alt="profile" style={{ borderRadius: '50%' }} />
          </div>
        </div>
        <ul className="list-disc ml-4 mt-10">
          <li>pico LLC代表。</li>
          <li>タイミーでCIO、RobesでCTOをしていました。</li>
          <li>スタートアップでの経験が長く、プロジェクトの立ち上げ経験が豊富です。</li>
          <li>現在は開発以外にも、技術顧問やコンサルティングのお仕事もお受けしています。</li>
        </ul>
        <p className="mt-4 flex items-center"><a href="https://github.com/m1ul24" target="_blank" rel="noopener noreferrer" className="underline mr-1">Github</a><TbExternalLink size="20" /></p>
        <section className="mt-24">
          <h2 className="text-3xl font-medium">Work experience</h2>
          <p className="mt-4 text-slate-300">※以下は実績の一部です</p>
          <div>
            <p className="text-slate-400 my-8">2021</p>
            <div className="mt-4">
              <h4 className="text-xl font-medium">ヘイ株式会社</h4>
              <p className="font-medium">Frontend</p>
            </div>
          </div>
          <div>
            <p className="text-slate-400 my-8">2020</p>
            <div className="mt-4">
              <h4 className="text-lg font-medium">エン・ジャパン株式会社</h4>
              <p className="font-medium">Frontend</p>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-medium">株式会社エンゲート</h4>
              <p className="font-medium">Frontend, Backend</p>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-medium">株式会社ミュージックマイン</h4>
              <p className="font-medium">Frontend</p>
            </div>
          </div>
          <div>
            <p className="text-slate-400 my-8">2019</p>
            <div className="mt-4">
              <h4 className="text-lg font-medium">株式会社Luup</h4>
              <p className="font-medium">Frontend, Backend</p>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-medium">株式会社キュービック</h4>
              <p className="font-medium">Frontend, Backend</p>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-medium">株式会社Robes</h4>
              <p className="font-medium">CTO</p>
            </div>
          </div>
          <div>
            <p className="text-slate-400 my-8">2018</p>
            <div className="mt-4">
              <h4 className="text-lg font-medium">株式会社オープンロジ</h4>
              <p className="font-medium">Frontend</p>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-medium">株式会社タイミー</h4>
              <p className="font-medium">CIO</p>
            </div>
          </div>
        </section>
        <section className="mt-24">
          <h2 className="text-3xl font-medium">Skills</h2>
          <div className="flex flex-wrap mt-4">
            {skills.map((skill) =>
              <span className="text-base bg-slate-500 rounded-2xl py-1 px-4 mr-2 mt-2" key={skill}>{ skill }</span>
            )}
          </div>
        </section>
        <section className="mt-24">
          <h2 className="text-3xl font-medium">Contact</h2>
          <p className="mt-4">miura.toyokazu@pico-llc.co</p>
        </section>
      </main>
    </div>
  )
}

export default Home
