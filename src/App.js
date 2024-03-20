import './App.css';
import LoginPage from './login/LoginPage'
import SignUpPage from './login/Signup'

import { Routes, Route } from "react-router-dom"
import CandidateDetails from './login/candidatedetails';

function App()  {
  return (
    <>
          <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="signup" element={<SignUpPage/>} />
            <Route path="candidate_details" element={<CandidateDetails/>} />
          </Routes>
    </>
  );
}

export default App;
