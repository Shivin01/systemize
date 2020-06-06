import React from 'react'
import PropTypes from 'prop-types'
import {Form, Formik} from 'formik'
import * as Yup from 'yup'

import Modal from './Modal'
import CustomField from './CustomField'
import CustomSelectField from './CustomSelectField'

function CreateTask({setShowModal}) {
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
        dueDate: '',
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
      {({dirty, isSubmitting}) => (
        <Form>
          <Modal
            setShowModal={setShowModal}
            heading="Create Task"
            saveBtnText="Save"
            isSaveBtnDisabled={isSubmitting || !dirty}
          >
            <CustomField fieldName="name" required />
            <CustomField fieldName="description" />
            <CustomField fieldName="dueDate" required />
            <CustomSelectField fieldName="status" options={statusOptions} />
            <CustomSelectField fieldName="label" options={labelOptions} />
            <CustomSelectField fieldName="assignedTo" options={[]} />
            <CustomSelectField fieldName="priority" options={priorityOptions} />
          </Modal>
        </Form>
      )}
    </Formik>
  )
}

CreateTask.propTypes = {
  setShowModal: PropTypes.func.isRequired,
}

export default CreateTask
