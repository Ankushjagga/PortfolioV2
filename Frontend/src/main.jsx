import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider  , BrowserRouter} from 'react-router-dom'
// import mainRoutes from './Routes/main.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
// const routes = createBrowserRouter(mainRoutes)
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    <App/>
    </BrowserRouter>

  {/* <RouterProvider router={routes}> */}

  {/* </RouterProvider> */}
  </Provider>
)
