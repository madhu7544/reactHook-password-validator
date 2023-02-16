import styled from 'styled-components'

export const Container = styled.div`
  background-color: #24263c;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PasswordContainer = styled.div`
  background-color: #383a4e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  font-family: 'Roboto';
  padding: 50px;
  box-shadow: 0px 4px 40px rgba(23, 31, 70, 0.16);
`

export const Heading = styled.h1`
  font-weight: bold;
  font-size: 32px;
  color: #f8fafc;
  font-family: 'Roboto';
`
export const Desc = styled.p`
  color: #f8fafc;
  font-size: 14px;
  margin-top: 0px;
`
export const Input = styled.input`
  border: none;
  width: 100%;
  margin-top: 20px;
  height: 30px;
`
export const ErrorCont = styled.p`
  color: #ef4444;
  font-size: 14px;
  padding-top: 0px;
`
