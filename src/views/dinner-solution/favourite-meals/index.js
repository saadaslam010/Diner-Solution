import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import DataTable from "react-data-table-component";
import { Globe, Plus, Check, X, MoreVertical, Archive, Trash2, FileText, Edit, Calendar } from "react-feather";
import CustomDataTable from "@customComponents/CustomDataTable"
import Avatar from "@components/avatar";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  InputGroup,
  Badge,
  Label,
  UncontrolledTooltip,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  Spinner
} from "reactstrap";
import { apiUrls } from "../../../constants/index";
import AddEditModal from "./AddEditModal";

const Listing = () => {

    const [apiData, setApiData] = useState([])
    const [addEditModal, setAddEditModal] = useState(false)
    const [data, setData] = useState([
      {
        menuName: "Apprioct Chicken & Rice",
        mainDish: "Approcot Chicken",
        side1: "Steamed Chicken",
        side2: "",
        side3: "Rice",
        side4: "",
        dessert: "Ice Cream"
      }
    ])
    const [columns, setColumns] = useState([
        {
            name: "Menu Name",
            minWidth: "200px",
            selector: (row) => row.menuName,
        },
        {
          name: "Main Dish",
          minWidth: "200px",
          selector: (row) => row.mainDish
        },
        {
          name: "Side Dish 1",
          minWidth: "200px",
          selector: (row) => row.side1,
        },
        {
          name: "Side Dish 2",
          minWidth: "200px",
          selector: (row) => row.side2,
        },
        {
          name: "Side Dish 3",
          minWidth: "200px",
          selector: (row) => row.side3,
        },
        {
          name: "Side Dish 4",
          minWidth: "200px",
          selector: (row) => row.side4,
        },
        {
          name: "Dessert",
          minWidth: "200px",
          selector: (row) => row.dessert,
        },
        {
          name: "Actions",
          minWidth: "200px",
          cell: (row) => {
            return(
            <div className='column-action'>
              <UncontrolledDropdown>
                <DropdownToggle tag='div' className='btn btn-sm'>
                  <MoreVertical size={14} className='cursor-pointer' />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    className='w-100'
                    onClick={() => {

                    }}
                  >
                    <Edit size={14} className='me-50' />
                    <span className='align-middle'>View Edit Menu</span>
                  </DropdownItem>
                  <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                    <Calendar size={14} className='me-50' />
                    <span className='align-middle'>Add To Calendar</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
            )
          }
        }
      ])

    //Setting Data In Table After Api Response
    // useEffect(()=> {
    // if(apiData.length > 0){
    //     const temp = []
    //     apiData.map((one) => {
    //         const element = {
    //             id: one.id,
    //             name: one.name,
    //             species: one.species,
    //             gender: one.gender,
    //             image: one.image,
    //             status: one.status
    //         }
    //         temp.push(element)
    //     })
    //     setData(temp)
    // }
    // }, [apiData])

    

  return (
    <Fragment>
      <Row>
        <Col sm="12">
          <Card>
            <CardHeader className="flex-md-row py-1 flex-column align-md-items-center align-items-center border-bottom">
              <CardTitle>
                
                {/* <Globe className="me-1 text-primary" width={25} /> */}
                <span className="align-middle">Favourite Meal Management</span>
              </CardTitle>
              <div className="d-flex align-itmes-center mt-2 mt-md-0">
                <div>
                  <Button
                    color="primary"
                    size="sm"
                    onClick={() => {
                      setAddEditModal(true)
                    }}
                    className="height-28"
                  >
                    <Plus size={15} />
                    <span className="align-middle ms-50">Add New Menu</span>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardBody className="pt-1">
              <CustomDataTable
              data={data}
              columns={columns}
              apiURL={apiUrls.getChracters}
              queryKey={"get-chracters"}
              setApiData={setApiData}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
      </Row >

    <AddEditModal open={addEditModal} stateChanger={setAddEditModal} />  
    </Fragment>
  );
};

export default Listing;
