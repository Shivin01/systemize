import React from 'react'
import PropTypes from 'prop-types'
import * as Yup from 'yup'
import Modal from './Modal'
import {Form, Formik} from 'formik'
import moment from 'moment-timezone'

import CustomField from './CustomField'
import CustomSelectField from './CustomSelectField'
import ModalFooter from './ModalFooter'
import iziToast from 'izitoast'
import {updateProfile} from '../utils/api'

function UpdateProfile({setShowModal, showModal, userDetails}) {
  const initialValues = {
    firstName: userDetails.first_name,
    lastName: userDetails.last_name,
    timezone: userDetails.timezone || null,
  }

  const onSubmit = (values, {setSubmitting}) => {
    setSubmitting(true)
    const data = {
      first_name: values.firstName,
      last_name: values.lastName,
      timezone: values.timezone,
    }

    updateProfile(userDetails.id, data)
      .then(() => {
        iziToast.success({
          title: 'OK',
          message: 'Successfully updated profile!',
        })
      })
      .catch(() => {
        iziToast.error({
          title: 'Error',
          message: 'Error occurred while updating profile!',
        })
      })
  }

  const timezoneOptions = moment.tz.names().map(tz => ({
    label: tz,
    value: tz,
  }))

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required('Please enter first name'),
        lastName: Yup.string().required('Please enter last name'),
        timezone: Yup.string().nullable().required('Please select a timezone'),
      })}
      onSubmit={onSubmit}
    >
      {({dirty, isSubmitting}) => (
        <Modal
          setShowModal={setShowModal}
          heading="Update Profile"
          isSaveBtnDisabled={isSubmitting || !dirty}
          showModal={showModal}
        >
          <Form>
            <div className="p-6 overflow-auto">
              <div className="flex flex-wrap -mx-3 mb-6">
                <CustomField fieldName="firstName" required />
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <CustomField fieldName="lastName" required />
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <CustomSelectField
                  fieldName="timezone"
                  options={timezoneOptions}
                  className="w-full px-3 mb-6 md:mb-0"
                />
              </div>
            </div>
            <ModalFooter
              setShowModal={setShowModal}
              isDisabled={isSubmitting || !dirty}
              saveBtnText="Update"
            />
          </Form>
        </Modal>
      )}
    </Formik>
  )
}

UpdateProfile.propTypes = {
  setShowModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  userDetails: PropTypes.object.isRequired,
}

export default UpdateProfile
