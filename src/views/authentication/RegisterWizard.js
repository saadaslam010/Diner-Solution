// ** React Imports
import { Link } from "react-router-dom";

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
} from "reactstrap";

// ** Styles
import "@styles/react/pages/page-authentication.scss";
import Step1 from "./regitser-steps/Step1";
import { useRef, useState } from "react";
import Step2 from "./regitser-steps/Step2";
import Step3 from "./regitser-steps/Step3";

const RegisterBasic = () => {
  const ref = useRef(null);

  // ** State
  const [stepper, setStepper] = useState(null);

  const steps = [
    {
      id: "step1",
      title: "Sign Up",
      content: <Step1 />,
    },
    {
      id: "step2",
      title: "Subscription",
      content: <Step2 />,
    },
    {
      id: "step3",
      title: "Payment",
      content: <Step3 />,
    },
  ];

  return (
    <div className="auth-wrapper auth-basic loginImg sign-in-warpper px-2">
      <div className="auth-inner my-2">
        <Card className="mb-0">
          <Wizard
            type="modern-horizontal"
            ref={ref}
            steps={steps}
            options={{
              linear: false,
            }}
            instance={(el) => setStepper(el)}
          />
        </Card>
      </div>
    </div>
  );
};

export default RegisterBasic;
