import Header from './Header'
import Hero from './Hero'
import Products from './Products'

export default function Home() {
  return (
    <main className="min-h-screen w-full py-10 overflow-auto">
      <Header />
      <Hero />
      <Products />
    </main>
  )
}
