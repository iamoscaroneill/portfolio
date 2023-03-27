import React from 'react'
import projects from './Projects.module.css'

const Projects = ({ data }) => {
  return (
    <div className={projects.container}>
        <div className={projects.info}>
            <h1 className={projects.title}>{data.title}</h1>
            <div className={projects.memo}>{data.memo}</div>
            <div className={projects.stack}>Technologies Used:</div>
            <div style={{ display: 'flex', flexDirection: 'row'}}>
                {data.tech.map((x, i) => {
                    return (
                        <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                            <span>{x.language}</span>
                            <img className={projects.icon} src={x.icon} alt={x.language}/>
                        </div>
                    )
                    })
                }
            </div>

            <div className={projects['link-container']}>
                <div className={projects.button}><a target="_blank" href={data.github} rel="noreferrer noopener">Source Code</a></div>
                <div className={projects.button}><a target="_blank" href={data.website} rel="noreferrer noopener">Website</a></div>
            </div>
        </div>

        <div className={projects.display}>
            <div className={projects['image-container']}>
                <img className={projects.screenshot} src={data.image} alt={`${data.title} screenshot`}/>
            </div>
        </div>
    </div>
  )
}

export default Projects