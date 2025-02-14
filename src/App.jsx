import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Layout from './Layout';
import DefaultPage from './views/DefaultPage';
import About from './views/About';
import RecipesDishDelights from './views/RecipesDishDelights';
import RecipesPersonal from './views/RecipesPersonal';
import Contact from './views/Contact';

const router = createBrowserRouter([
  {
    path: "/exam-react",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DefaultPage />,
      },
      {
        path: "recipesDishDelights",
        element: <RecipesDishDelights />,
      },
      {
        path: "recipesPersonal",
        element: <RecipesPersonal />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      }
    ],
  },
]);


function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
