import {useParams} from 'react-router-dom'
import {useDocument} from '../../hooks/useDocument'
import ProjectSummery from './ProjectSummery'

// styles
import './Project.css'
import ProjectComments from './ProjectComments'


export default function Project() {
    const { id } = useParams()
    const { error, document } = useDocument('projects', id)

    if (error) {
        return <div className="error">{error}</div>
    }

    if(!document) {
        return <div className="loading">Loading...</div>
    }

    return (
        <div className="project-details">
           <ProjectSummery project={document} />
           <ProjectComments project={document}/>
        </div>

    )
}