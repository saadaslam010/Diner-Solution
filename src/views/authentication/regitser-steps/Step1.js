// ** React Imports
import { Link } from 'react-router-dom'

// ** Icons Imports
import { Facebook, Twitter, Mail, GitHub } from 'react-feather'
import Wizard from "@components/wizard";

// ** Custom Components
import InputPasswordToggle from '@components/input-password-toggle'

// ** Reactstrap Imports
import { Card, CardBody, CardTitle, CardText, Form, Label, Input, Button } from 'reactstrap'

// ** Styles
import '@styles/react/pages/page-authentication.scss'
import { useFormik } from 'formik';
import FormikProvider from "../../../context/formik"
import * as Yup from "yup"
import CustomInput from "@customComponents/CustomInput"
import CustomButton from "@customComponents/CustomButton"

const Step1 = () => {

    const registerSchema = Yup.object().shape({
        fullName: Yup.string()
        .required("Reqauired"),
        email: Yup.string()
        .email("Invalid Email")
        .required("Required"),
        username: Yup.string()
        .required("Required"),
        password: Yup.string()
        .required("Required")
        .min(8, "Minimum 8")
    })

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            username: "",
            password: ""
        },
        validationSchema: registerSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    })

  return (
          <CardBody>
            {/* <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
              <h2 className='brand-text text-primary ms-1'>Dinner Solution</h2>
            </Link> */}
            <CardTitle tag='h4' className='mb-1 text-center'>
              Create a New Account
            </CardTitle>
            <FormikProvider formik={{...formik, isLoading: ""}}>
            <Form className='auth-register-form mt-2' onSubmit={e => e.preventDefault()}>
              <div className='mb-1'>
                <CustomInput
                name="fullName"
                label="Full Name"
                placeholder="John Smith"
                />
              </div>
              <div className='mb-1'>
              <CustomInput
                name="email"
                label="Email"
                placeholder="example@example.com"
                />
              </div>
              <div className='mb-1'>
              <CustomInput
                name="username"
                label="Username"
                placeholder="Enter Username"
                />
              </div>
              <div className='mb-1'>
              <CustomInput
                name="password"
                label="Password"
                placeholder="********"
                />
              </div>
              <div className='form-check mb-1'>
                <Input type='checkbox' id='terms' />
                <Label className='form-check-label' for='terms'>
                  I agree to
                  <a className='ms-25' href='/' onClick={e => e.preventDefault()}>
                    privacy policy & terms
                  </a>
                </Label>
              </div>
              <CustomButton color='primary' block>
                Sign up
              </CustomButton>
            </Form>
            </FormikProvider>
            <p className='text-center mt-2'>
              <span className='me-25'>Already have an account?</span>
              <Link to='/login'>
                <span>Sign in instead</span>
              </Link>
            </p>
          </CardBody>
  )
}

export default Step1
