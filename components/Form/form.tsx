import { TextareaAutosize, Button, TextField, Grid } from "@mui/material";

export const FormGroup = ({
  changeHandler,
  clickHandler,
  formData: { firstName, lastName, phone, city, description },
}: any) => {
  return (
    <>
      <h2 style={{ margin: "10px 0" }}>Todos Form</h2>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            onChange={changeHandler}
            label="First Name"
            variant="standard"
            name="firstName"
            type="text"
            value={firstName}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            onChange={changeHandler}
            label="Last Name"
            variant="standard"
            name="lastName"
            type="text"
            value={lastName}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            onChange={changeHandler}
            label="Phone Number"
            variant="standard"
            name="phone"
            type="phone"
            value={phone}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            onChange={changeHandler}
            label="city"
            variant="standard"
            name="city"
            type="text"
            value={city}
          />
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize
            aria-label=""
            name="description"
            onChange={changeHandler}
            minRows={10}
            placeholder="Enter the Description"
            style={{ borderRadius: "5px" }}
            cols={58}
            value={description}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="button" onClick={clickHandler} variant="outlined">
            Create
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
