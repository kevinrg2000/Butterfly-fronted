import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
        <main className=''>
            <div className=''>
                <Outlet />
            </div>
        </main>
    </>
  )
}

export default Layout