import Task from './Task'

const Tasks = ({ tasks, onEdit, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onEdit={onEdit} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  )
}

export default Tasks