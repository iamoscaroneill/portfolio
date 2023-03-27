import portfolio from './Portfolio.module.css'
import { projects } from '../../Utilities/helpers'
import Projects from '../Projects/Projects'

const Portfolio = () => {
  return (
    <div className={portfolio.container}>
      {projects.map((project, i) => {
        return (
          <Projects key={i} data={project}/>
        )
      })}
    </div>
  )
}

export default Portfolio