import React from 'react'
import Panel from '../../components/panel'
import Project from '../../components/project'
import './main.less'

// 使用DndProvider的一个注意点
// DndProvider不可以和钩子在一个组件中
const Main = () => {
  console.log(window?.config, 'config')
  return <div className="main">
    <Panel />
    <Project /> 
  </div>
}

export default Main
