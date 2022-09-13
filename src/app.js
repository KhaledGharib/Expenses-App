import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
  
const ExpenseDashboardPage = ()=>(
  <div>
    Expense Dashboard
  </div>
)
const AddExpensePage = ()=>(
  <div>
    Add Expense
  </div>
)
const EditExpensePage = ()=>(
  <div>
    Edit Expense Page
  </div>
)
const HelpExpensePage = ()=>(
  <div>
    Help Expense Page
  </div>
)
const NotFoundPage = ()=>(
  <div>
    404
  </div>
)

const routes = (
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<ExpenseDashboardPage />} />
      <Route path="create" element={<AddExpensePage />} />
      <Route path="/edit" element={<EditExpensePage />} />
      <Route path="/help" element={<HelpExpensePage />} />
      <Route path="*" element={<NotFoundPage />} />
  </Routes>
</BrowserRouter>
)


  ReactDOM.render(routes, document.getElementById('app'));
