import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import MUIComplaintForm from './pages/MUIComplaintForm'
import SessionExpired from './pages/SessionExpired'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
          <Routes>
          <Route path="/complaintForm" element={<MUIComplaintForm />} />
          <Route path="/sessionExpired" element={<SessionExpired />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
