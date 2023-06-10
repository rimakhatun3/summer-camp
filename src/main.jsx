import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router/router';

import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'
import AuthProvider from './Provider/AuthProvider';
const queryClient = new QueryClient()




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<QueryClientProvider client={queryClient}>
<div className='max-w-screen-xl mx-auto '>
<AuthProvider><RouterProvider router={router}>
</RouterProvider></AuthProvider>
</div>
    </QueryClientProvider>
    
    
  </React.StrictMode>,
)
