import { Route, Routes } from "react-router-dom"

import MindUpPortfolio from "./pages/MindUpPortfolio"
import { ToastContainer } from "react-toastify"


function App() {

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<MindUpPortfolio />} />
      </Routes>

    </>
  )
}

export default App
