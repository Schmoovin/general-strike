import Head from 'next/head'
import Link from 'next/link'
import React, { FC } from 'react'

type Props = {
  blogs: {
    id: string,
    slug: string,
    title: string,
    date: string,
  }[]
}

const Home: FC<Props> = ({
  blogs,
}) => {
  return (
    <div>
      <Head>
        <title>General Strike</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="relative flex flex-col items-center justify-center min-h-screen bg-stars bg-black text-white">
        <h1 className="text-xl lg:text-2xl text-center tracking-widest pt-20 lg:pt-0">
          General Strike
        </h1>

        <h2 className="text-lg">
          For a non-violent REVOLUTION
        </h2>

        <div className="max-w-4xl py-8">
          <ul>
            <li className="py-2">
              {'A people\'s Manifesto for A better World.'}
            </li>
            <li className="py-2">
              90% Tax on top 1%. Wealth Tax. Lower retirement age to 60. 50 for workers in physically demanding jobs. $25 an hour minimum wage. 12 weeks paid vacation. 28 hour work week. Pay everyone $25 an hour a day to exercise. $2000 month UBI. $1000 a month for every child under 18. All businesses 50% co-ops.
            </li>
            <li className="py-2">
              CEO’s can only make 20 times more than lowest paid worker.
            </li>
            <li className="py-2">
              One Year paid parental leave. Medicare For All.
            </li>
            <li className="py-2">
              End All foreclosures & Evictions. Rent & Mortgage freeze until crisis is over.
            </li>
            <li className="py-2">
              Free Public transportation. End fracking. Green New Deal. Publicly free Wi-Fi.
            </li>
            <li className="py-2">
              Reparations for A.D.O.S. $4.7 trillion over next 3 generations in trust to be opened at age 18. Free DNA testing & access to all records to trace heritage.
            </li>
            <li className="py-2">
              Abolish I.C.E. Return stolen children to parents. Use DNA testing to reunite them.
            </li>
            <li className="py-2">
              End All pipelines on Indigenous land.
            </li>
            <li className="py-2">
              Civilian Control of All Police Departments- hiring, firing, prosecuting
            </li>
          </ul>
        </div>

        <div className="py-8">
          <h1 className="text-xl">Posts</h1>
          <ul>
            {blogs.map(({ id, slug, title, date }) => {
              return (
                <li key={id}>
                  <Link href={`/blog/${slug}`}>
                    <a>
                      {title} ({date})
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <div>
          <div className="flex">
            <div className="flex flex-row text-center justify-items-center space-x-8 ml-auto mr-auto">
              <a href="#" aria-label="facebook" className="text-theme_grayishBlue hover:text-theme_softRed">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="currentColor" d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
              </a>
              <a href="#" aria-label="pinterest" className="text-theme_grayishBlue hover:text-theme_softRed">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="currentColor" d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
              </a>
              <a href="#" aria-label="instagram" className="text-theme_grayishBlue hover:text-theme_softRed">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}

// This function gets called at build time on server-side.
export async function getStaticProps(): Promise<{ props: Props }> {
  const fs = require('fs')
  const matter = require('gray-matter')
  const { v4: uuid } = require('uuid')

  const files: string[] = fs.readdirSync(`${process.cwd()}/contents`, 'utf-8')

  const blogs = files
    .filter((filename: string) => filename.endsWith('.md'))
    .map((filename: string) => {
      const path = `${process.cwd()}/contents/${filename}`
      const rawContent = fs.readFileSync(path, {
        encoding: 'utf-8',
      })
      const { data } = matter(rawContent)

      return { ...data, id: uuid() }
    })

  // By returning { props: blogs }, the Home component
  // will receive `blogs` as a prop.
  return {
    props: { blogs },
  }
}

export default Home
