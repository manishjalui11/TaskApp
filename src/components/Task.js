import { useState } from 'react'
import { FaRegTimesCircle } from 'react-icons/fa'
import { FaPen } from 'react-icons/fa'
import EditTask from './EditTask'

const Task = ({ task, onEdit, onDelete, onToggle }) => {
  
  const [showEdit, setShowEdit] = useState(false)
  
  return (
    <div>
      <div
        className={`task ${task.reminder ? 'reminder' : ''}`}
        onDoubleClick={() => onToggle(task.id)}
      >
        <h3>
          {task.text}{' '}
          <div>
            <FaPen
              style={{ color: '#000', cursor: 'pointer', marginRight: 10 }}
              onClick={() => setShowEdit(!showEdit)}
            />
            <FaRegTimesCircle
              style={{ color: '#f76d78', cursor: 'pointer', marginRight: 0 }}
              onClick={() => onDelete(task.id)}
            />
          </div>
        </h3>
        <p>{task.day}</p>
      </div>
      {showEdit && <EditTask  onEdit={onEdit} id={task.id} ttext={task.text} tday={task.day}/>}
    </div>
  )
}

export default Task