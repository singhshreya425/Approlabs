import React from 'react'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'

const Tasks = () => {
    let data = [
        {
            text : "Crate Fire Stone Logo"
        },
        {
            text : "Add css and javascript if required"
        },
        {
            text : "SideHolder required "
        },
        {
            text : "Scoping and estermation"
        },
        {
            text : "Sprint Showcase"
        },
    ]
  return (
    <div>
        <div className='pt-6'>
            <p className='text-2xl font-bold inline p-2 py-6 border-gray-500 border-b-4'>Task</p>
        </div>
        <div className='py-12'>
     {data.map((e)=>   <Form>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={e.text}
          />
        </div>
      ))}
    </Form>)}
    </div>
    </div>
  )
}

export default Tasks
