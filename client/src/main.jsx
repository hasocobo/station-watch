import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import App from './App'
import Hero from './components/Pages/Hero/Hero.jsx'
import './index.css'
import Login from './components/Pages/LoginSignup/Login.jsx'
import CreateTest from './components/Pages/CreateTest/CreateTest.jsx'
import PendingTests from './components/Pages/PendingTests/PendingTests.jsx'
import Labs from './components/Pages/Labs/Labs.jsx'
import TestHistory from './components/Pages/TestHistory/TestHistory.jsx'
import Notifications from './components/Pages/Notifications/Notifications.jsx'
import AddNew from './components/Pages/AddNew/AddNew.jsx'
import UserProvider from './components/Context/UserProvider.jsx'
import RestrictedView from './components/Pages/LoginSignup/RestrictedView.jsx'
import Stations from './components/Pages/Labs/Stations.jsx'
import LabProvider from './components/Context/LabProvider.jsx'
import StationView from './components/Pages/Labs/StationView.jsx'
import Signup from './components/Pages/LoginSignup/Signup.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Hero />
      },
      {
        path: '/testolustur',
        element: <CreateTest />
      },
      {
        path: '/bekleyentestler',
        element: <PendingTests />
      },
      {
        path: '/laboratuvarlar',
        element: <Labs />
      },
      {
        path: '/laboratuvarlar/:labId',
        element: <Stations />
      },
      {
        path: '/laboratuvarlar/:labId/:stationId',
        element: <StationView />
      },
      {
        path: '/testgecmisi',
        element: <TestHistory />
      },
      {
        path: '/bildirimler',
        element: <Notifications />
      },
      {
        path: '/ekle',
        element: <AddNew />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <LabProvider>
        <RouterProvider router={router} />
      </LabProvider>
    </UserProvider>
  </React.StrictMode>
)
