import React from 'react'
import { Link } from 'react-router-dom'
const Category = () => {
  return (
    <div>
      <div className='px-5 mt-5'>
        <div className='d-flex justify-content-center'>
            <h3>Category List</h3>
        </div>
        <Link to='/dashboard/add_category' className='btn btn-success'>Add Category</Link>
      </div>
    </div>
  )
}

export default Category