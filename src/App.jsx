import { Outlet } from "react-router-dom"
import { Footer, Header } from "./components"

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-purple-50">
      <Header />
      <main className="mt-24 flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
