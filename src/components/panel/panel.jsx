import React, {useState} from 'react'
import Item from '../item'
import './index.less'

const Panel = () => {
  console.log(config, 'config')
  const [width, setWidth] = useState(300)
  return <div className="panel">
    <div className="header">
      <h1>阿方的demo</h1>
    </div>
    <div className="contentWrapper">
      <div className="content">
        {window?.config?.content?.map(item => {
          return <Item title={item.title} list={item.list} />
        })}
       
      </div>
    </div>
  </div>
}

export default Panel
