import React from 'react'
import { Route, Routes } from "react-router-dom";
import MainLayout from '../layout/MainLayout';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import CreateRoutinesPage from '../pages/CreateRoutinesPage';
import WorkoutPage from '../pages/WorkoutPage';
export default function AppRoutes() {
  return (
    <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route element={<MainLayout />}>
        <Route path='/' element={<div>Home : Add your home page component</div>} />
        <Route path='/create-rotines' element={<CreateRoutinesPage/>} />
        <Route path='/workout' element={<WorkoutPage/>} />
        </Route>
  </Routes>
  )
}
