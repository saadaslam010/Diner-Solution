// ** React Imports
import { Link } from 'react-router-dom'

// ** Icons Imports
import { Facebook, Twitter, Mail, GitHub } from 'react-feather'
import Wizard from "@components/wizard";

// ** Custom Components
import InputPasswordToggle from '@components/input-password-toggle'

// ** Reactstrap Imports
import { Card, CardBody, CardTitle, CardText, Form, Label, Input, Button, ButtonGroup, CardHeader, CardFooter } from 'reactstrap'

// ** Styles
import '@styles/react/pages/page-authentication.scss'
import { useFormik } from 'formik';
import FormikProvider from "../../../context/formik"
import * as Yup from "yup"
import CustomInput from "@customComponents/CustomInput"
import CustomButton from "@customComponents/CustomButton"
import { useState } from 'react';

const Step2 = () => {

    const [plan, setPlan] = useState("Monthly")

  return (
          <CardBody>
            {/* <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
              <h2 className='brand-text text-primary ms-1'>Dinner Solution</h2>
            </Link> */}
            <CardTitle tag='h4' className='mb-1 text-center'>
              Choose a Subscription Plan
            </CardTitle>
            <ButtonGroup style={{marginTop: 20}} className='d-flex justify-content-center'>
                <Button color={plan == "Monthly" ? "primary" : "secondary"} outline
                onClick={() => {
                    setPlan("Monthly")
                }}
                >
                    Monthly
                </Button>
                <Button color={plan == "Yearly" ? "primary" : "secondary"} outline
                onClick={() => {
                    setPlan("Yearly")
                }}
                >
                    Yearly
                </Button>
            </ButtonGroup>

                {
                    plan == "Monthly" &&
                <Card outline={true} >
                <CardBody className='text-center'>
                <CardText color='primary' className='text-center'>
                    Monthly Plan
                </CardText>
                <span style={{fontSize: "3rem", fontWheight: "700"}}>$150</span>
                <br />
                <span style={{fontSize: "1.2rem", fontWheight: "700"}}>Monthly</span>
                <br />
                <span style={{fontSize: "1rem", fontWheight: "700"}}>{"(excl. Vat)"}</span>
                </CardBody>
                <CardFooter className='text-center'>
                <Button  color='primary'>
                    Select
                </Button>
                </CardFooter>
                </Card>
                }

                {
                    plan == "Yearly" &&
                <Card outline={true}>
                <CardBody className='text-center'>
                <CardText color='primary' className='text-center'>
                    Yearly Plan
                </CardText>
                <span style={{fontSize: "3rem", fontWheight: "700"}}>$960</span>
                <br />
                <span style={{fontSize: "1.2rem", fontWheight: "700"}}>Yearly</span>
                <br />
                <span style={{fontSize: "1rem", fontWheight: "700"}}>{"(excl. Vat)"}</span>
                </CardBody>
                <CardFooter className='text-center'>
                <Button  color='primary'>
                    Select
                </Button>
                </CardFooter>
                </Card>
                }   
                


            {/* <p className='text-center mt-2'>
              <span className='me-25'>Already have an account?</span>
              <Link to='/login'>
                <span>Sign in instead</span>
              </Link>
            </p> */}
          </CardBody>
  )
}

export default Step2
