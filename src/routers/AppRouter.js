import React from 'react'
import { BrowserRouter, Route, Routes, Link,NavLink } from 'react-router-dom'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpExpensePage from '../components/HelpExpensePage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'

  

  
  const AppRouter=()=>(

        <BrowserRouter>
        <div>
          <Header/>
          <Routes>
          <Route path="/" element={<ExpenseDashboardPage />} />
          <Route path="create" element={<AddExpensePage />} />
          <Route path="/edit/:id" element={<EditExpensePage />} />
          <Route path="/help" element={<HelpExpensePage />} />
          <Route path="*" element={<NotFoundPage />} />
      </Routes> 
        </div>
       
      </BrowserRouter>
      
  )
  
  export default AppRouter