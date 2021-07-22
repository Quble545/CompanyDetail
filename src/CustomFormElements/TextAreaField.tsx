import { useFormikContext } from 'formik'

import {  makeStyles, FormLabel, Tooltip } from '@material-ui/core'
import { Help } from '@material-ui/icons'

const useStyles = makeStyles(() => ({
  textInput: {
    width: '92%',
    marginTop: 10,
    border:"1px solid #d0d0d0",
    borderRadius: 4,
    fontFamily: "Roboto",
    fontSize: 17,
    color: "#444",
    padding: 15,
    lineHeight: 1.6
  },
  icon: {
    color: '#000',
    fontSize: 18,
    position: 'relative',
    top: 5,
  },
  tooltip: {
    backgroundColor: '#fff',
    color: '#444',
    fontSize: 12,
    border: '1px solid #000',
  },
  errorLabel: {
    color: 'red',
    fontFamily: 'Roboto',
    marginTop: 4,
  },
  required: {
    color: 'red',
  },
}))

interface IProps {
    name: string,
    label: string,
    required?: boolean,
    tooltip?: string
}

const TextAreaField = ({ name, label, required, tooltip }: IProps) => {
  const classes = useStyles()
  const {
    setFieldTouched,
    handleChange,
    errors,
    values,
    touched,
  } = useFormikContext<any>()

  return (
    <>
      <FormLabel>
        {label}
        {required && <span className={classes.required}>*</span>}
        {tooltip &&  <Tooltip
          classes={{ tooltip: classes.tooltip }}
          title={tooltip}
          placement="top-start"
          arrow
        >
          <Help className={classes.icon} />
        </Tooltip>}
      </FormLabel>
      <textarea
        rows={5}
        className={classes.textInput}
        onBlur={() => setFieldTouched(name)}
        onChange={handleChange(name)}
        value={values[name]}
      />
      {touched[name] && errors[name] ? (
        <div className={classes.errorLabel}>{errors[name]}</div>
      ) : null}
    </>
  )
}

export default TextAreaField
