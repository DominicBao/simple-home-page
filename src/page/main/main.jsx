import React from 'react'
import Panel from '../../components/panel'
import './main.less'

// 使用DndProvider的一个注意点
// DndProvider不可以和钩子在一个组件中
const Main = () => {
  return <div className="main">
    <Panel />
  </div>
}

export default Main
