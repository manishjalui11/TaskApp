import { useState } from 'react'

const EditTask = ({ onEdit, id, ttext, tday}) => {
    const [text, setText] = useState(ttext)
    const [day, setDay] = useState(tday)

    const onSubmit = (e) => {
        e.preventDefault()
    
        if (!text) {
          alert('Please add a task')
          return
        }
        onEdit(id, text, day)
      }


    return (
        <form className='edit-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Edit Task</label>
                <input
                    type='text'
                    placeholder='Task'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input
                    type='datetime-local'
                    placeholder='Edit Day & Time'
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default EditTask
