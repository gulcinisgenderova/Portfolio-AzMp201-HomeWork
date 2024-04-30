import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { v4 as uuidv4 } from "uuid";

function FormExample({ data, setData }) {
  const [validated, setValidated] = useState(false);
  const [inpValue, setInpValue] = useState("");

  const handleSubmit = (event) => {
    console.log(inpValue);

    let obj = {
      id: uuidv4(),
      name: inpValue,
    };

    axios.post("https://northwind.vercel.app/api/products", obj);

    setData([...data, obj]);

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return 
}

export default FormExample;
