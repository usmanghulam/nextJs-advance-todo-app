import React, { ChangeEvent, useState } from "react";
import { FormGroup } from "../components/Form/form";
import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
    description: "",
  });
  const [snakBarOpen, setSnakBarOpen] = useState(false);
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const clickHandler = () => {
    const isTrue = Object.values(formData).every((value) => value !== "");
    if (isTrue) {
      console.log(formData);
    } else {
      setSnakBarOpen(true);
      setTimeout(() => {
        setSnakBarOpen(false);
      }, 3000);
    }
  };
  return (
    <>
      <Container maxWidth="sm">
        <FormGroup {...{ changeHandler, formData, clickHandler }} />
        <Snackbar open={snakBarOpen} message="All Input Fields are Required" />
      </Container>
    </>
  );
};
export default Form;
