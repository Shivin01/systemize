import React, {useState} from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'

import {status, activeTab} from '../constants'
import CreateTask from './CreateTask'
import {useAllUsers} from '../contexts/all-users'

function Task({status, task, setActiveTask}) {
  return (
    <div
      className="inline-flex p-3 rounded w-full mt-2 items-center justify-between hover:bg-gray-300 cursor-pointer"
      onClick={() => setActiveTask(task)}
    >
      <div className="bg-blue-900 rounded-full w-10 h-10" />
      <div className="mr-auto ml-4">
        <p className="font-semibold">{task.name}</p>
        <span className="text-xs font-light">Due date: {task.due_date}</span>
      </div>
      <span className="inline-block mr-2">{status}</span>
    </div>
  )
}

Task.propTypes = {
  status: PropTypes.string.isRequired,
  task: PropTypes.array.isRequired,
}

function TaskGroup({status, tasks, showStatus = true, setActiveTask}) {
  return (
    <div className="mt-5">
      {showStatus && (
        <h2 className="uppercase text-gray-700 font-medium">{status}</h2>
      )}
      <div className="mt-3">
        {tasks.map(task => (
          <Task status={status} task={task} setActiveTask={setActiveTask} />
        ))}
      </div>
    </div>
  )
}

TaskGroup.propTypes = {
  status: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  showStatus: PropTypes.bool,
}

function getFilteredTasks(tasks, statusType) {
  return tasks.filter(task => +task.status === +statusType)
}

function UserTasks({tasks}) {
  const [active, setActive] = useState(activeTab.ASSIGNED)
  const [activeTask, setActiveTask] = useState(null)
  const {users, isFetching} = useAllUsers()

  const newTasks = getFilteredTasks(tasks, status.NEW)
  const inProgressTasks = getFilteredTasks(tasks, status.IN_PROGRESS)
  const completedTasks = getFilteredTasks(tasks, status.COMPLETED)

  return (
    <div>
      <ul className="flex border-b mt-10">
        <li
          className={cs('mr-1', {
            '-mb-px': active === activeTab.WORKED_ON,
          })}
        >
          <a
            className={cs(
              'bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold',
              {
                'border-l border-t border-r rounded-t':
                  active === activeTab.WORKED_ON,
              },
            )}
            onClick={() => setActive(activeTab.WORKED_ON)}
            href="#fdsfd"
          >
            Worked On
          </a>
        </li>
        <li
          className={cs('mr-1', {
            '-mb-px': active === activeTab.ASSIGNED,
          })}
        >
          <a
            className={cs(
              'bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold',
              {
                'border-l border-t border-r rounded-t':
                  active === activeTab.ASSIGNED,
              },
            )}
            onClick={() => setActive(activeTab.ASSIGNED)}
            href="#ome"
          >
            Assigned to me
          </a>
        </li>
      </ul>
      {active === activeTab.ASSIGNED ? (
        <>
          <TaskGroup
            setActiveTask={setActiveTask}
            status="In Progress"
            tasks={inProgressTasks}
          />
          <TaskGroup
            setActiveTask={setActiveTask}
            status="New"
            tasks={newTasks}
          />
        </>
      ) : (
        <TaskGroup
          setActiveTask={setActiveTask}
          showStatus={false}
          status="Completed"
          tasks={completedTasks}
        />
      )}
      {activeTask ? (
        <CreateTask
          task={activeTask}
          setShowModal={() => setActiveTask(null)}
          showModal={!!activeTask}
          users={users}
          isFetchingUser={isFetching}
        />
      ) : null}
    </div>
  )
}

UserTasks.propTypes = {
  tasks: PropTypes.array.isRequired,
}

export default UserTasks
