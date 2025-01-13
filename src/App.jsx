import { Outlet } from "react-router-dom"
import { Footer, Header } from "./components"

function App() {
  return (
    <div>
      <Header />
      <main className="mt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
