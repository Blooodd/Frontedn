import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false); // State to track form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "Name is required";
    tempErrors.email = /\S+@\S+\.\S+/.test(formData.email)
      ? ""
      : "Email is not valid";
    tempErrors.message = formData.message ? "" : "Message is required";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      setSubmitted(true); // Set submitted to true after successful validation
      setFormData({ // Clear form fields after successful submission
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h5">Contact Us</Typography>
      {submitted ? ( // Display message after form submission
        <Typography variant="body1" sx={{ mt: 2 }}>
          Form submitted successfully!
        </Typography>
      ) : (
        <>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={Boolean(errors.name)}
            helperText={errors.name}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={Boolean(errors.message)}
            helperText={errors.message}
            margin="normal"
            multiline
            rows={4}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Submit
          </Button>
        </>
      )}
    </Box>
  );
}

export default ContactForm;
