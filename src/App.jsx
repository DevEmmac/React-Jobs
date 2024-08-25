import React from 'react'
import Homepage from './pages/Homepage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import { Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider} from 'react-router-dom';

const App = () => {
  // Add New Job
  const addJob = async(newJob) => {
   const respond = await fetch('./api/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newJob),
   });
   return;
  };
  
  // Delete Job
  const deleteJob = async (id) => {
    const respond = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
     });
     return;
  };


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
         <Route index element={<Homepage />} /> 
         <Route path='/jobs' element={<JobsPage />} />
         <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
         <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />}  loader={jobLoader }/>
         <Route path='*' element={<NotFoundPage />} />
      </Route>   
    )
  );
  return (
   <RouterProvider router={router} />
  )
};

export default App;
