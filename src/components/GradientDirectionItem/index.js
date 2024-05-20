import {ListItemController, GradientControllerButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachControlItem, onClickTab, isActive} = props
  const {directionId, value, displayText} = eachControlItem

  const onClickButton = () => {
    onClickTab(directionId, value)
  }

  return (
    <ListItemController>
      <GradientControllerButton
        type="button"
        onClick={onClickButton}
        isActive={isActive}
      >
        {displayText}
      </GradientControllerButton>
    </ListItemController>
  )
}

export default GradientDirectionItem
