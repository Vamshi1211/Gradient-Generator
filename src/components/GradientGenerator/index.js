import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientContainer,
  GradientControllers,
  Heading,
  Paragraph,
  UnOrderedList,
  InputContainer,
  Input,
  Label,
  UnOrderedListContainer,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeTab: gradientDirectionsList[0].directionId,
    bgColor1: '#8ae323',
    bgColor2: '#014f7b',
    bgColorValue: gradientDirectionsList[0].value,
    isGenerate: false,
  }

  onClickTab = (directionId, value) => {
    this.setState({activeTab: directionId, bgColorValue: value})
  }

  onChangeColor1 = event => {
    this.setState({bgColor1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({bgColor2: event.target.value})
  }

  onGenerateButtonClicked = () => {
    this.setState({isGenerate: true})
  }

  render() {
    const {activeTab, bgColor1, bgColor2, bgColorValue, isGenerate} = this.state
    const generatedValue = `to ${bgColorValue}, ${bgColor1}, ${bgColor2}`

    return (
      <GradientContainer
        data-testid="gradientGenerator"
        generatedValue={generatedValue}
        isGenerate={isGenerate}
        bgColorValue={bgColorValue}
      >
        <GradientControllers>
          <Heading>Generate a CSS color Gradient</Heading>
          <Paragraph>Choose Direction</Paragraph>
          <UnOrderedList>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                key={eachItem.directionId}
                eachControlItem={eachItem}
                onClickTab={this.onClickTab}
                isActive={activeTab === eachItem.directionId}
              />
            ))}
          </UnOrderedList>
          <Paragraph>Pick the Colors</Paragraph>
          <UnOrderedListContainer>
            <InputContainer>
              <Label htmlFor="labelId">{bgColor1}</Label>
              <Input
                id="labelId"
                value={bgColor1}
                type="color"
                onChange={this.onChangeColor1}
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="labelId2">{bgColor2}</Label>
              <Input
                id="labelId2"
                value={bgColor2}
                type="color"
                onChange={this.onChangeColor2}
              />
            </InputContainer>
          </UnOrderedListContainer>
          <GenerateButton type="button" onClick={this.onGenerateButtonClicked}>
            Generate
          </GenerateButton>
        </GradientControllers>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
