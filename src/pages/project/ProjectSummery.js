import Avatar from '../../components/Avatar'
import { useFirestore } from '../../hooks/useFirestore'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useHistory } from 'react-router-dom'

// const ProjectSummery = (props) => {
//     return (
//         <div>
//             <div className="project-summery">
//                 <h2 className="page-title">{props.projectName.name}</h2>
//                 <p className="due-date">
//                     Project due by {props.projectName.dueDate && props.projectName.dueDate.toDate().toDateString()}
//                 </p>
//                 <p className="details">
//                     {props.projectName.details}
//                 </p>
//                 <h4>Project is assigned to : </h4>
//                 {props.projectName.assignedUsersList && props.projectName.assignedUsersList.map(user => (
//                     <div key={user.id}>
//                         <Avatar src={user.photoURL} />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default ProjectSummery

export default function ProjectSummery({ project }) {
    const { deleteDocument } = useFirestore('projects')
    const { user } = useAuthContext()
    const history = useHistory()

    const handleClick = (e) => {
        deleteDocument(project.id)
        history.push('/')
    }

    return (
        <div>
            <div className="project-summery">
                <h2 className="page-title">{project.name}</h2>
                <p>By {project.createdBy.displayName}</p>
                <p className="due-date">
                    Project due by {project.dueDate && project.dueDate.toDate().toDateString()}
                </p>
                <p className="details">
                    {project.details}
                </p>
                <h4>Project is assigned to : </h4>
                <div className="assigned-users">
                    {project.assignedUsersList && project.assignedUsersList.map(user => (
                        <div key={user.id}>
                            <Avatar src={user.photoURL} />
                        </div>
                    ))}
                </div>
                {/* {user.uid === project.createdBy.id && ( */}
                    <button className="btn" onClick={handleClick}>Mark as Complete</button>
                {/* )} */}
            </div>
        </div>
    )
}