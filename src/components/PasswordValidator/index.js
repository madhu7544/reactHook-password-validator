import {useState} from 'react'

import {
  Container,
  PasswordContainer,
  Heading,
  Desc,
  Input,
  ErrorCont,
} from './styledComponents'

const PasswordValidator = () => {
  const [input, setInput] = useState('')

  const onchangeInput = event => {
    setInput(event.target.value)
  }

  const errorMsg =
    input.length >= 8 ? '' : 'Your password must be at least 8 characters'
  return (
    <Container>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Desc>Check how strong and secure is your password</Desc>
        <Input type="password" value={input} onChange={onchangeInput} />
        <br />
        <ErrorCont>{errorMsg}</ErrorCont>
      </PasswordContainer>
    </Container>
  )
}
export default PasswordValidator
