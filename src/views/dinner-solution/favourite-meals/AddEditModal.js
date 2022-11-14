import React from "react";
import { useState, Fragment } from "react";
// ** Third Party Components
import { X, UserPlus, UserCheck, Globe } from "react-feather";
// ** Reactstrap Imports
import { Modal, ModalHeader, ModalBody, Label, Form, Row, Col, Input, ModalFooter } from "reactstrap";
import FormikProvider from "../../../context/formik"
import CustomInput from "@customComponents/CustomInput"
import CustomButton from "@customComponents/CustomButton"
import CustomSelect from "@customComponents/CustomSelect"
import { useFormik } from "formik";
import * as Yup from "yup"


const AddEditModal = ({ open, stateChanger }) => {

    const validationSchema = Yup.object().shape({
        menuName: Yup.string()
        .required("Required"),
        mainDish: Yup.string()
        .required("Required"),
        side1: Yup.string()
        .required("Required"),
        side2: Yup.string()
        .required("Required"),
        side3: Yup.string()
        .required("Required"),
        side4: Yup.string()
        .required("Required"),
        dessert: Yup.string()
        .required("Required"),
        notes: Yup.string()
    })

    const formik = useFormik({
        initialValues: {
            menuName: "",
            mainDish: "",
            side1: "",
            side2: "",
            side3: "",
            side4: "",
            dessert: "",
            notes: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    })

  return (
    <Modal
      isOpen={open}
      toggle={() => {
        stateChanger(false)
      }}
      contentClassName="p-0"
      backdrop="static"
      keyboard={false}
      size="lg"
      centered
      scrollable
    >
      <ModalHeader toggle={() => {
        stateChanger(false)
      }}>
        Menu Name
      </ModalHeader>
        <ModalBody className="flex-grow-1">
          <h2>Create Menu</h2>
          <hr />
          <FormikProvider formik = {{...formik, isLoading: ""}} >
            <Form>
            <Row>
                <Col md="6">
                    <div className="mb-1">
                    <CustomInput
                    name="menuName"
                    placeholder="Appricot Chicken & Rice"
                    label="Menu Name"
                    />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <div className="mb-1">
                    <Label>Main Dish</Label>
                    <CustomSelect
                    name="mainDish"
                    placeholder="Main Dish"
                    options={[]}
                    />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <div className="mb-1">
                    <Label>Side Dish - Veggie</Label>
                    <CustomSelect
                    name="side1"
                    options={[]}
                    />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <div className="mb-1">
                    <Label>Side Dish - Veggie</Label>
                    <CustomSelect
                    name="side2"
                    options={[]}
                    />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <div className="mb-1">
                    <Label>Side Dish - Starch</Label>
                    <CustomSelect
                    name="side3"
                    options={[]}
                    />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <div className="mb-1">
                    <Label>Side Dish - Bread</Label>
                    <CustomSelect
                    name="side1"
                    options={[]}
                    />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <div className="mb-1">
                    <CustomInput
                    name="dessert"
                    label="Dessert"
                    placeholder="Cake"
                    />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <div className="mb-1">
                    <Label>Meal Notes</Label>
                    <Input
                    type="textarea"
                    name="notes"
                    placeholder="Meal Notes ..."
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    {
                        formik.errors.notes && formik.touched.notes &&
                        <div style={{display: "block"}} className="feedback-invalid">
                            {formik.errors.notes}</div>
                    }
                    </div>
                </Col>
            </Row>
            </Form>
          </FormikProvider>  
        </ModalBody>
        <ModalFooter>
            <CustomButton onClick={() => {
                stateChanger(false)
            }} color="danger">
                Cancel
            </CustomButton>
        </ModalFooter>
    </Modal>
  );
};

export default AddEditModal;
