/** @jsx jsx */
/** @jsxFrag React.Fragment */
import {css, jsx} from '@emotion/core'
import {ErrorMessage, Formik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import FormError from './FormError'

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .required('Required')
    .email('Invalid email')
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, {
      excludeEmptyString: false,
    }),
  password: Yup.string().required('Required'),
  confirmPassword: Yup.string()
    .when('password', {
      is: val => val && val.length > 0,
      then: Yup.string().oneOf(
        [Yup.ref('password')],
        'Both password need to be the same',
      ),
    })
    .required('Required'),
  username: Yup.string().required('Required'),
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
})

const SignupForm = () => (
  <div>
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
        firstName: '',
        lastName: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, {setSubmitting}) => {
        console.log(setSubmitting)
        console.log(values)

        axios
          .post('http://localhost:8000/rest-auth/registration/', {
            email: values.email,
            username: values.username,
            password1: values.password,
            password2: values.confirmPassword,
          })
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
            var err = {}
            for (let [key, value] of Object.entries(error.response.data)) {
              var err1 = {}
              if (key === 'password1') {
                key = 'password'
              }
              else if (key === 'password2') {
                key = 'confirmPassword'
              }
              err1[key] = value[0]
              err = {...err, ...err1}
            }
            setErrors(err)
          })
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        dirty,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className="pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            <ErrorMessage component={FormError} name="username" />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              placeholder="email"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <ErrorMessage component={FormError} name="email" />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="first-name"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
            <ErrorMessage component={FormError} name="firstName" />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="last-name"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            <ErrorMessage component={FormError} name="lastName" />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <ErrorMessage component={FormError} name="password" />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="******************"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
            />
            <ErrorMessage component={FormError} name="confirmPassword" />
          </div>
          <button
            className="text-white font-bold py-2 px-8 rounded-lg focus:outline-none focus:shadow-outline"
            type="submit"
            css={css`
              background: linear-gradient(264.33deg, #7ee0ef 0%, #15aad9 100%);
              box-shadow: 0px 15px 20px rgba(32, 175, 221, 0.34);
            `}
            disabled={isSubmitting || !dirty}
          >
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
)

export default SignupForm
