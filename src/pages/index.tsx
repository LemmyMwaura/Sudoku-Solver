import Head from 'next/head'
import Sudoku from '@/components/Sudoku'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sudoku Solver</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="wrapper">
        <Sudoku />
      </main>
    </>
  )
}
