import React from 'react'
import './index.less'

const Project = () => {
  return <div className="project">
    <div className="item">
      {window?.config?.project?.map(item => {
        return <a target="_blank" href={item?.url} rel="noreferrer">
          <img alt="" src={item?.img} loading="lazy" />
        </a>
      })}
    </div>
  </div>
}

export default Project
