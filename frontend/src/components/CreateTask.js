import React from 'react'
import PropTypes from 'prop-types'
import {Form, Formik} from 'formik'
import * as Yup from 'yup'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import {formatDate, parseDate} from 'react-day-picker/moment'
import 'react-day-picker/lib/style.css'
import '../date-picker.css'

import Modal from './Modal'
import CustomField from './CustomField'
import CustomSelectField from './CustomSelectField'

function CreateTask({setShowModal, showModal}) {
  const onSubmit = values => {
    console.log({values})
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

  return (
    <Formik
      initialValues={{
        name: '',
        description: '',
        dueDate: new Date(),
        status: 1,
        label: 4,
        assignedTo: null,
        priority: 1,
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required('Please enter a task name'),
        description: Yup.string(),
        dueDate: numberNullableField.required('Please enter a due date'),
        status: numberNullableField,
        label: numberNullableField,
        assignedTo: numberNullableField,
        priority: numberNullableField,
      })}
      onSubmit={onSubmit}
    >
      {({values, dirty, isSubmitting}) => (
        <Form>
          <Modal
            setShowModal={setShowModal}
            heading="Create Task"
            saveBtnText="Save"
            isSaveBtnDisabled={isSubmitting || !dirty}
            showModal={showModal}
          >
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
                options={[]}
                className="w-full md:w-1/2 px-3 mb-6 md:mb-0"
              />
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Due Date<span className="text-orange-800">*</span>
                </label>
                <DayPickerInput
                  onDayChange={day => {
                    console.log(day)
                  }}
                  formatDate={formatDate}
                  format="LL"
                  parseDate={parseDate}
                />
              </div>
            </div>
          </Modal>
        </Form>
      )}
    </Formik>
  )
}

CreateTask.propTypes = {
  setShowModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
}

export default CreateTask
