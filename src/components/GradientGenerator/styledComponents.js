import styled from 'styled-components'
import {
  ListItemController,
  GradientControllerButton,
} from '../GradientDirectionItem/styledComponents'

export const GradientContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    ${props =>
      props.isGenerate
        ? props.generatedValue
        : `to ${props.bgColorValue}, #8ae323, #014f7b`}
  );
  height: 100vh;
`

export const GradientControllers = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    max-width: 1110px;
  }
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`
export const Paragraph = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  opacity: 0.5;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

export const UnOrderedList = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;

  @media screen and (min-width: 768px) {
    width: 60%;
    flex-wrap: nowrap;
  }
`
export const UnOrderedListContainer = styled.ul`
  padding: 0px;
  display: flex;
  justify-content: space-between;

  width: 90%;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const InputContainer = styled(ListItemController)`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Input = styled.input`
  width: 80px;
  height: 30px;

  border: none;
  outline: none;
  cursor: pointer;
`
export const Label = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  margin-bottom: 10px;
`
export const GenerateButton = styled(GradientControllerButton)`
  background-color: #00c9b7;
  color: #1e293b;
  opacity: 1;
  margin-top: 20px;
`
