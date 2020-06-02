import React from 'react'
import PropTypes from 'prop-types'

function Task({status}) {
  return (
    <div className="inline-flex p-3 rounded w-full mt-2 items-center justify-between hover:bg-gray-300 cursor-pointer">
      <div className="bg-blue-900 rounded-full w-10 h-10" />
      <div className="mr-auto ml-4">
        <p className="font-semibold">CI/CI pipeline for EDGE builds</p>
        <span className="text-xs font-light">Due date: 12th June, 2020</span>
      </div>
      <span className="inline-block mr-2">{status}</span>
    </div>
  )
}

Task.propTypes = {
  status: PropTypes.string.isRequired,
}

function TaskGroup({status}) {
  return (
    <div className="mt-5">
      <h2 className="uppercase text-gray-700 font-medium">{status}</h2>
      <div className="mt-3">
        <Task status={status} />
        <Task status={status} />
        <Task status={status} />
        <Task status={status} />
      </div>
    </div>
  )
}

TaskGroup.propTypes = {
  status: PropTypes.string.isRequired,
}

function UserTasks() {
  return (
    <div>
      <ul className="flex border-b mt-10">
        <li className="-mb-px mr-1">
          <a
            className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
            href="#fdsfd"
          >
            Worked On
          </a>
        </li>
        <li className="mr-1">
          <a
            className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
            href="#ome"
          >
            Assigned to me
          </a>
        </li>
      </ul>
      <TaskGroup status="In Progress" />
      <TaskGroup status="New" />
    </div>
  )
}

export default UserTasks
