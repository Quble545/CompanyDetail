import { useState } from 'react'

import { Grid, makeStyles, Button } from '@material-ui/core'
import { Formik } from 'formik'
import * as Yup from 'yup'

import InputField from '../CustomFormElements/InputField'
import SelectField from '../CustomFormElements/SelectField'
import TextAreaField from '../CustomFormElements/TextAreaField'

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingBottom: 50
  },
}))

interface ICompanyDetailt {
  id: number
  companyName: string
  companyNumber: string
  vatNumber: string
  website: string
  addressLine1: string
  addressLine2: string
  postCode: string
  city: string
  country: string
  phoneNumber: string,
  numberOfYearsOfTrading: string,
  numberOfEmployees: string,
  anualRevenue: string,
  anualProfit: string,
  companyBackground: string,
  companyModal: string,
  industry: string
}

const schema = Yup.object({
  id: Yup.number(),
  companyName: Yup.string().min(3).max(25).required().label('Company name'),
  companyNumber: Yup.string().required().label('Company number'),
  vatNumber: Yup.string().label('Vat number'),
  website: Yup.string().min(5).max(25).label('Website'),
  addressLine1: Yup.string().min(10).max(50).required().label('Address Line 1'),
  addressLine2: Yup.string().min(10).max(50).label('Address Line 2'),
  postCode: Yup.string()
    .min(3)
    .max(5)
    .required('Must be Number')
    .label('Post Code'),
  city: Yup.string().min(3).max(10).required().label('City'),
  country: Yup.string().min(3).max(10).required().label('Country'),
  phoneNumber: Yup.string().min(12).max(13).required().label('phone Number'),
  numberOfYearsOfTrading: Yup.string().required().label("Number of years of trading"),
  numberOfEmployees: Yup.string().required().label("Number of employees"),
  anualRevenue: Yup.string().required().label("Anual revenue"),
  anualProfit: Yup.string().required().label("Anual profit"),
  companyBackground: Yup.string().min(50).max(300).required().label("Company background"),
  companyModal: Yup.string().min(50).max(300).required().label("Company modal"),
  industry: Yup.string().min(5).max(25).required().label("Industry")

})

const Form = () => {
  const classes = useStyles()
  const compObj: ICompanyDetailt = {
    id: 0,
    companyName: '',
    companyNumber: '',
    vatNumber: '',
    website: '',
    addressLine1: '',
    addressLine2: '',
    postCode: '',
    city: '',
    country: '',
    phoneNumber: '',
    numberOfYearsOfTrading: "",
    numberOfEmployees: "",
    anualRevenue: "",
    anualProfit: "",
    companyBackground: "",
    companyModal: "",
    industry: ""
  }
  const numberOfYearsOfTrading = [
    { value: "1", option: '0-1' },
    { value: "2", option: '1-3' },
    { value: "3", option: '3+' },
  ]
  const numberOfEmployees = [
    { value: "1", option: '1-5' },
    { value: "2", option: '6-10' },
    { value: "3", option: '10+' },
  ]
  const [company, setCompany] = useState<ICompanyDetailt>(compObj)
  const handleClear = () => {
    setCompany(compObj)
  }

  return (
    <Formik
      initialValues={{ ...company }}
      enableReinitialize={true}
      validationSchema={schema}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit, resetForm }) => (
        <Grid container spacing={1} className={classes.container}>
          <Grid item xl={5} lg={6} sm={6} xs={12}>
            <InputField name="companyName" label="Company name" required />
          </Grid>
          <Grid item xl={5} lg={6} sm={6} xs={12}>
            <InputField name="companyNumber" label="Company number" required />
          </Grid>
          <Grid item xl={5} lg={6} sm={6} xs={12}>
            <InputField
              name="vatNumber"
              label="VAT registration number"
              tooltip="If not vat registred, leave blank"
            />
          </Grid>
          <Grid item  xl={5} lg={6} sm={6} xs={12}>
            <InputField name="website" label="Website" />
          </Grid>

          <Grid item  xl={5} lg={6} sm={6} xs={12}>
            <InputField name="addressLine1" label="Address line 1" required />
          </Grid>

          <Grid item  xl={5} lg={6} sm={6} xs={12}>
            <InputField name="addressLine2" label="Address line 2" />
          </Grid>

          <Grid item  xl={5} lg={6} sm={6} xs={12}>
            <InputField name="postCode" label="Post Code" />
          </Grid>

          <Grid item  xl={5} lg={6} sm={6} xs={12}>
            <InputField name="city" label="City" required />
          </Grid>

          <Grid item  xl={5} lg={6} sm={6} xs={12}>
            <InputField name="country" label="Country" required />
          </Grid>

          <Grid item  xl={5} lg={6} sm={6} xs={12}>
            <InputField name="phoneNumber" label="Phone number" required />
          </Grid>

          
          <Grid item  xl={5} lg={6} sm={6} xs={12}>
            <SelectField name="numberOfYearsOfTrading" options={numberOfYearsOfTrading} label="Number of years of trading" required />
          </Grid>

           <Grid item  xl={5} lg={6} sm={6} xs={12}>
            <SelectField name="numberOfEmployees" options={numberOfEmployees} label="Number of employees" required />
          </Grid>

           <Grid item  xl={5} lg={6} sm={6} xs={12}>
            <InputField name="anualRevenue" label="Anual revenue (Last two years)" required />
          </Grid>

          <Grid item  xl={5} lg={6} sm={6} xs={12}>
            <InputField name="anualProfit" label="Anual profit (Last two years)" required />
          </Grid>

          <Grid item  xl={5} lg={6} sm={6} xs={12}>
            <TextAreaField name="companyBackground" label="Company background" required tooltip="Write a brief summary which includes the management structure." />
          </Grid>

          <Grid item  xl={5} lg={6} sm={6} xs={12}>
            <TextAreaField name="companyModal" label="Company modal" required tooltip="Describe how your organisation creates, delivers and captures value." />
          </Grid>

          <Grid item  xl={5} lg={6} sm={6} xs={12}>
            <InputField name="industry" label="Industry/Nature of business" required />
          </Grid>

          <Grid item  xl={5} lg={6} sm={6} xs={12}>
          </Grid>

          <Grid item  xl={5} lg={6} sm={6} xs={6}>
            <Button
              onClick={() => {
                resetForm()
                handleClear()
              }}
              variant="contained"
              color="secondary"
            >
              Reset Fields
            </Button>
          </Grid>
          <Grid item  xl={5} lg={6} sm={6} xs={6}>
            <Grid container justifyContent="flex-end" spacing={2}>
              <Grid item>
                <Button
                  type="submit"
                  onClick={() => handleSubmit()}
                  variant="contained"
                  color="default"
                >
                  Save
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary">
                  Next
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Formik>
  )
}

export default Form
