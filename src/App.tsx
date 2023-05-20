import './app.css'

import { Header } from "./components/layout/header"
import { Footer } from "./components/layout/footer"

function App() {

  return (
    <div>
      <Header />
      <main className='main'>
        <h1>conteudo</h1>
      </main>
      <Footer />
    </div>
  )
}

export default App
