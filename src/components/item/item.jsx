import React from 'react'
import './index.less'

const Item = ({title, list = []}) => {
  return <div className="item">
    <h2>{title}</h2>
    <ul>
      {list.map(item => {
        return <li><a href={item.url}>{item.content}</a></li>
      })}
    </ul>
  </div>
}

export default Item
