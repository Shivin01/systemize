import React from 'react'
import PropTypes from 'prop-types'
import {ErrorMessage, Form, Formik} from 'formik'
import * as Yup from 'yup'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import {formatDate, parseDate} from 'react-day-picker/moment'
import iziToast from 'izitoast'
import 'react-day-picker/lib/style.css'
import '../date-picker.css'

import Modal from './Modal'
import CustomField from './CustomField'
import CustomSelectField from './CustomSelectField'
import {createTask, updateTask} from '../utils/api'
import FormError from './FormError'
import ModalFooter from './ModalFooter'

function CreateTask({
  task = {},
  setShowModal,
  showModal,
  isFetchingUser,
  users,
}) {
  const initialValues = {
    name: task.name || '',
    description: task.description || '',
    dueDate: task.due_date || null,
    status: task.status || 1,
    label: task.label || 4,
    assignedTo: task.assigned_to || null,
    priority: task.priority || 1,
  }

  const onSubmit = (values, {setSubmitting}) => {
    setSubmitting(true)
    const data = {
      ...values,
      due_date: values.dueDate,
      assigned_to: values.assignedTo,
    }

    if (task.id) {
      updateTask(task.id, data)
        .then(() => {
          iziToast.success({
            title: 'OK',
            message: 'Successfully updated the task!',
          })
          setShowModal(false)
        })
        .catch(() => {
          iziToast.error({
            title: 'Error',
            message: 'Error occurred while updating task',
          })
        })
    } else {
      createTask(data)
        .then(() => {
          iziToast.success({
            title: 'OK',
            message: 'Successfully created a task!',
          })
          setShowModal(false)
        })
        .catch(() => {
          iziToast.error({
            title: 'Error',
            message: 'Error occurred while saving task',
          })
        })
    }
  }

  const numberNullableField = Yup.number().nullable()

  const statusOptions = [
    {label: 'New', value: 1},
    {label: 'In Progress', value: 2},
    {label: 'Completed', value: 3},
  ]

  const labelOptions = [
    {label: 'Personal', value: 1},
    {label: 'Work', value: 2},
    {label: 'Shopping', value: 3},
    {label: 'Others', value: 4},
  ]

  const priorityOptions = [
    {label: 'Low', value: 1},
    {label: 'Medium', value: 2},
    {label: 'High', value: 3},
  ]

  const userOptions = users.map(user => ({
    value: user.id,
    label: `${user.username}`,
  }))

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object().shape({
        name: Yup.string().required('Please enter a task name'),
        description: Yup.string(),
        dueDate: Yup.string().required('Please enter a due date'),
        status: numberNullableField.required('Please enter a status'),
        label: numberNullableField.required('Please enter a status'),
        assignedTo: numberNullableField,
        priority: numberNullableField.required('Please enter a status'),
      })}
      onSubmit={onSubmit}
    >
      {({setFieldTouched, setFieldValue, dirty, isSubmitting}) => (
        <Modal
          setShowModal={setShowModal}
          heading={task.id ? 'Update Task' : 'Create Task'}
          saveBtnText="Save"
          isSaveBtnDisabled={isSubmitting || !dirty}
          showModal={showModal}
        >
          <Form>
            <div className="p-6 overflow-auto">
              <div className="flex flex-wrap -mx-3 mb-6">
                <CustomField fieldName="name" required />
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <CustomField fieldName="description" type="textarea" />
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <CustomSelectField
                  fieldName="status"
                  options={statusOptions}
                  className="w-full md:w-1/2 px-3 mb-6 md:mb-0"
                />
                <CustomSelectField
                  fieldName="label"
                  options={labelOptions}
                  className="w-full md:w-1/2 px-3 mb-6 md:mb-0"
                />
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <CustomSelectField
                  fieldName="priority"
                  options={priorityOptions}
                  className="w-full md:w-1/2 px-3 mb-6 md:mb-0"
                />
                <CustomSelectField
                  fieldName="assignedTo"
                  options={userOptions}
                  className="w-full md:w-1/2 px-3 mb-6 md:mb-0"
                  selectProps={{
                    isLoading: isFetchingUser,
                  }}
                />
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Due Date<span className="text-orange-800">*</span>
                  </label>
                  <DayPickerInput
                    onDayChange={day => {
                      setFieldValue('dueDate', day)
                    }}
                    formatDate={formatDate}
                    format="YYYY-MM-DD HH:mm Z"
                    keepFocus={false}
                    parseDate={parseDate}
                    onDayPickerHide={() => {
                      setFieldTouched('dueDate', true)
                    }}
                  />
                  <ErrorMessage name="dueDate" component={FormError} />
                </div>
              </div>
            </div>
            <ModalFooter
              setShowModal={setShowModal}
              isDisabled={isSubmitting || !dirty}
            />
          </Form>
        </Modal>
      )}
    </Formik>
  )
}

CreateTask.propTypes = {
  setShowModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  isFetchingUser: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
}

export default CreateTask
