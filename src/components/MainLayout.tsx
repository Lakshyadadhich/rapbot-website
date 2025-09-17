import Cta from '@/pages/multi/index-1/components/Cta'
import Footer from '@/pages/multi/index-1/components/Footer'
import Aos from 'aos'
import React, { ReactNode, Suspense, useEffect } from 'react'
import BackToTop from './BackToTop'
import Loader from './Loader'
import NavBar from './navbar/NavBar'

const MainLayout = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
      <Suspense fallback={<Loader />}>
        <NavBar />
        <main>
          {children}
          <Cta />
        </main>
        <Footer />
        <BackToTop ClassName="progress-wrap" />
      </Suspense>
    </>
  )
}

export default MainLayout
