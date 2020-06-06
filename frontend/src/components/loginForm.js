/** @jsx jsx */
/** @jsxFrag React.Fragment */
import {css, jsx} from '@emotion/core'
import {ErrorMessage, Formik} from 'formik'
import * as Yup from 'yup'
import FormError from './FormError'
const axios = require('axios');

const loginSchema = Yup.object().shape({
  usernameOrEmail: Yup.string()
    .required('Required'),
  password: Yup.string().required('Required'),
})

const LoginForm = (history) => (
  <div>
    <Formik
      initialValues={{
        usernameOrEmail: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={(values, {setSubmitting, setErrors}) => {
        let data = { }
        if ( values.usernameOrEmail.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i) ) {

          data = {'email': values.usernameOrEmail}
        }
        else {
          data = {'username': values.usernameOrEmail}
        }
        axios.post('http://localhost:8000/rest-auth/login/',{
          ...data,
          'password': values.password
        }).then( response => {
          history.history.push("/");
        })
          .catch( error => {
            let err = {}
            for (let [key, value] of Object.entries(error.response.data)) {
              if (key === "non_field_errors") {
                alert(JSON.stringify(value[0], null, 2));
              }
              let err1 = {}
              err1[key] = value[0]
              err = {...err, ...err1}
            }
            setErrors(err)
            setSubmitting(false)
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
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="usernameOrEmail"
              placeholder="email"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <ErrorMessage component={FormError} name="usernameOrEmail" />
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

export default LoginForm