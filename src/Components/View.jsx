import React from 'react'

export default function View() {

  return (
    <div>

      <table border={2}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>1</td>
            <td>demo</td>
            <td>1111</td>
            <td>demo@gmail.com</td>
            <td>mangalore</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>


        </tbody>
      </table>

    </div>
  )
}
