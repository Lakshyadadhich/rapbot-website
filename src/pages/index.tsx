import Loader from '@/components/Loader'
import { navigate } from 'gatsby'
import React, { useEffect } from 'react'

const index = () => {
  useEffect(() => {
    navigate('/multi/index-1')
  }, [])
  return (
    <>
      <Loader />
    </>
  )
}

export default index
