import { BrowserRouter, Routes, Route } from 'react-router'
import MUIComplaintForm from './pages/MUIComplaintForm'
import SessionExpired from './pages/SessionExpired'
import ViewComplaint from './pages/ViewComplaint'

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<ViewComplaint />} />
            <Route path="/ComplaintForm" element={<MUIComplaintForm />} />
            <Route path="/sessionExpired" element={<SessionExpired />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
