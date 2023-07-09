// import { Button } from 'antd'
// import React from 'react'
import('react')
// import(/* webpackChunkName: "page2-react" */ 'react')
import('lodash')

export default function User() {


  const onClick = () => {
    // import('lodash').then((module) => { 
    //   const _ = module.default
    //   console.log(_.now())
    // })
    console.log(_.now())
  }

  return (
    <div>
      <h2>
      User
      </h2>
      {/* <Button onClick={onClick}>import</Button> */}
    </div>   
  )
}
