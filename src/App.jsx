import { BrowserRouter, Routes, Route } from 'react-router'
import MUIComplaintForm from './pages/MUIComplaintForm'
import SessionExpired from './pages/SessionExpired'

function App() {
  return (
    <BrowserRouter>
          <Routes>
          <Route path="/ComplaintForm" element={<MUIComplaintForm />} />
          <Route path="/sessionExpired" element={<SessionExpired />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
