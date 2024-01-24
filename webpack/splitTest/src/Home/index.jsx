import React, { useRef, useState } from 'react'
// import { Spin } from 'antd'
import(/* webpackChunkName: "page1-lodash"*/ 'lodash')

export default function Home() {
  const [Loaded, setLoaded] = useState(null)
  const loadRef = useRef({})
  if (loadRef.current) {
    loadRef.current = null
    import('./Loaded').then((module) => {
      setLoaded(module.default)
    })
  }
  if (Loaded) {
    return Loaded
  }
  // console.log(_.now())
  // return (<Spin></Spin>)
  return <div>Home</div>
}
