import styled from 'styled-components'

export const ListItemController = styled.li`
  list-style-type: none;
  padding: 0px;
  margin-right: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-right: 20px;
    margin-bottom: 20px;
  }
`
export const GradientControllerButton = styled.button`
  background-color: #ffffff;
  font-family: 'Roboto';
  color: #334155;
  padding: 10px 32px 10px 32px;
  border: none;
  cursor: pointer;
  outline: none;
  font-weight: 600;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    padding: 8px 32px 8px 32px;
  }
`
