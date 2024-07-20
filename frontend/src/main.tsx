import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage.tsx';
import CreateQuestion from './pages/CreateQuestion.tsx';
import TestPage from './pages/TestPage.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomePage />} />
      
      <Route path="create_question" element={<CreateQuestion />} />
      <Route path="test" element={<TestPage />} />
      
      
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>

      <RouterProvider router={router} />

  </React.StrictMode>
);
