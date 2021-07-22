import { useFormikContext } from 'formik'

import { Select, makeStyles, FormLabel, Tooltip } from '@material-ui/core'
import { Help } from '@material-ui/icons'

const useStyles = makeStyles(() => ({
  textInput: {
    width: '100%',
    marginTop: 10,
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
    options: { value:string, option:string }[],
    label: string,
    required?: boolean,
    tooltip?: string
}

const SelectField = ({ name, options, label, required, tooltip }: IProps) => {
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
      <Select
        className={classes.textInput}
        variant="outlined"
        onBlur={() => setFieldTouched(name)}
        onChange={handleChange(name)}
        value={values[name]}
      >
         {options.map(op => (
             <option value={op.value} key={op.value}>{op.option}</option>
         ))}
      </Select>
      {touched[name] && errors[name] ? (
        <div className={classes.errorLabel}>{errors[name]}</div>
      ) : null}
    </>
  )
}

export default SelectField
