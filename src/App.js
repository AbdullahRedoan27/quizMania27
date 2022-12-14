import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Topics from './Components/Topics/Topics';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import NotFound from './Components/NotFound/NotFound';
import Quizpage from './Components/Quizpage/Quizpage';



function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: 'topics',
          loader: ()=>fetch(`https://openapi.programming-hero.com/api/quiz`),
          element: <Topics></Topics>
        },
        {
          path: '/Statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/Blog',
          element: <Blog></Blog>
        },
        {
          path: '/quizquestionno/:id',
          loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <Quizpage></Quizpage>
        }
      ]
    },
    {
      path: '*',
      element: <NotFound></NotFound>
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
