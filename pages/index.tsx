import Head from 'next/head'
import Allocator from '../components/Allocator'

export default function Home() {
  return (
    <>
      <Head>
        <title>Secret Gyfter - Fruit Edition</title>
        <meta name="description" content="Enter your name to get randomly assigned a fruit!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Allocator />
      </main>
    </>
  )
}
