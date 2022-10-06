import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Outlet />
        <span className="tags bottom-tags">
          <span className="bottom-tag-html">&lt;&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
