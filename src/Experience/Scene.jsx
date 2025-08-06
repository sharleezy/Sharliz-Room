import React, { Suspense } from 'react'
import Room from  "./models/Sharliz-Portfolio-v4"

const Scene = () => {
  return (
    <>
      <Suspense>
        <Room/>
      </Suspense>
    </>
  )
}

export default Scene
