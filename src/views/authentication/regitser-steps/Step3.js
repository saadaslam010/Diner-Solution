// ** React Imports
import { Link, useHistory } from "react-router-dom";

// ** Icons Imports
import { Facebook, Twitter, Mail, GitHub } from "react-feather";
import Wizard from "@components/wizard";

// ** Custom Components
import InputPasswordToggle from "@components/input-password-toggle";

// ** Reactstrap Imports
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Form,
  Label,
  Input,
  Button,
  Row,
  Col,
  Alert,
  UncontrolledAlert,
} from "reactstrap";

// ** Styles
import "@styles/react/pages/page-authentication.scss";
import { useFormik } from "formik";
import FormikProvider from "../../../context/formik";
import * as Yup from "yup";
import CustomInput from "@customComponents/CustomInput";
import CustomButton from "@customComponents/CustomButton";
import CustomSelect from "@customComponents/CustomSelect";
import Cleave from "cleave.js/react";
import Swal from "sweetalert2";

const Step3 = () => {
  const histroy = useHistory();

  const paymentSchema = Yup.object().shape({
    country: Yup.string().required("Reqauired"),
    state: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    zipCode: Yup.string().required("Required"),
    email: Yup.string().required("Required").email("Invalid Email"),
    cardName: Yup.string().required("Required"),
    cardNumber: Yup.string().required("Required"),
    exiry: Yup.string().required("Required"),
    cvc: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      country: "",
      state: "",
      address: "",
      city: "",
      zipCode: "",
    },
    validationSchema: paymentSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const countryOptions = [
    {
      label: "USA",
      value: "USA",
    },
    {
      label: "UK",
      value: "UK",
    },
  ];

  const stateOptions = [
    {
      label: "Florida",
      value: "Florida",
    },
    {
      label: "Alaska",
      value: "Alaska",
    },
  ];

  function paymentSuccess() {
    Swal.fire({
      icon: "success",
      title: "Your Payment Was Successfull",
      text: "Thank you for your payment. You should recieve a confirmation Email with more details shortly",
      showConfirmButton: true,
      confirmButtonText: "Back To Login",
    }).then((result) => {
      if (result.isConfirmed) {
        histroy.push("/login");
      }
    });
  }

  return (
    <CardBody className="p-0">
      {/* <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
              <h2 className='brand-text text-primary ms-1'>Dinner Solution</h2>
            </Link> */}
      <UncontrolledAlert color="primary">
        <div className="alert-body">
          We are fully compliant with Payment Card Industry Date Security
          Standards
        </div>
      </UncontrolledAlert>
      <CardTitle tag="h2" className="mb-1 text-center fw-600 text-primary">
        Payment
      </CardTitle>
      <FormikProvider formik={{ ...formik, isLoading: "" }}>
        <Form
          className="auth-register-form mt-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <Row>
            <Col md="6">
              <h4 className="text-center mb-2">Billing Details</h4>
              <div className="my-1">
                <CustomSelect
                  name="country"
                  placeholder={"Country"}
                  options={countryOptions}
                />
              </div>

              <div className="mb-1">
                <CustomSelect
                  name="state"
                  placeholder={"State"}
                  options={stateOptions}
                />
              </div>

              <div className="mb-1">
                <CustomInput name="address" placeholder="Street Address" />
              </div>

              <div className="mb-1">
                <CustomInput name="city" placeholder="City" />
              </div>

              <div className="mb-1">
                <CustomInput name="zipCode" placeholder="Zip Code" />
              </div>
            </Col>

            <Col md="6">
              <h4 className="mb-2">Payment Method</h4>
              <div className="my-1">
                <CustomInput name="email" placeholder="Email" />
              </div>

              <div className="mb-1">
                <CustomInput name="cardName" placeholder="Name On Card" />
              </div>

              <div className="mb-1">
                <Cleave
                  placeholder="Card Number"
                  name="cardNumber"
                  options={{ creditCard: true }}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  className="form-control"
                />
                {formik.errors.cardNumber && formik.touched.cardNumber && (
                  <div
                    className="invalid-feedback"
                    style={{ display: "block" }}
                  >
                    {formik.errors.cardNumber}
                  </div>
                )}
              </div>

              <div className="mb-1">
                <Cleave
                  placeholder="MM/YY"
                  name="expiry"
                  options={{ date: true, datePattern: ["m", "y"] }}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  className="form-control"
                />
                {formik.errors.expiry && formik.touched.expiry && (
                  <div
                    className="invalid-feedback"
                    style={{ display: "block" }}
                  >
                    {formik.errors.expiry}
                  </div>
                )}
              </div>

              <div className="mb-1">
                <Cleave
                  placeholder="CVC"
                  name="cvc"
                  options={{ numeral: true }}
                  maxLength={3}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  className="form-control"
                />
                {formik.errors.cvc && formik.touched.cvc && (
                  <div
                    className="invalid-feedback"
                    style={{ display: "block" }}
                  >
                    {formik.errors.cvc}
                  </div>
                )}
              </div>
            </Col>
          </Row>
          <CustomButton
            color="primary"
            block
            onClick={() => {
              paymentSuccess();
            }}
          >
            Submit
          </CustomButton>
        </Form>
      </FormikProvider>
      {/* <p className='text-center mt-2'>
              <span className='me-25'>Already have an account?</span>
              <Link to='/login'>
                <span>Sign in instead</span>
              </Link>
            </p> */}
    </CardBody>
  );
};

export default Step3;
