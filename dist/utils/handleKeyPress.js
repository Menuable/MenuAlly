/**
 @description Handles keypress events within a tab trap.
 @param {Event} event - The keypress event.
 @param {Element} lastFocusedElement - The last focused element.
 @param {NodeList} itemList - NodeList of elements in the tab trap.
 */
const handleKeyPress = (event, lastFocusedElement, itemList) => {
    const listLength = itemList.length;
    const firstTabStopIndex = 0;
    const lastTabStopIndex = listLength - 1;
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }
    let currentActiveIndex = Array.from(itemList).indexOf(document.activeElement);
    switch (event.key) {
        case 'ArrowDown':
        case 'ArrowRight':
            // Do something for "down arrow" or "right arrow" key press.
            if (currentActiveIndex === lastTabStopIndex) {
                itemList[firstTabStopIndex].focus();
            }
            else {
                itemList[currentActiveIndex + 1].focus();
            }
            break;
        case 'ArrowUp':
        case 'ArrowLeft':
            // Do something for "up arrow" or "left arrow" key press.
            if (currentActiveIndex === firstTabStopIndex) {
                itemList[lastTabStopIndex].focus();
            }
            else {
                itemList[currentActiveIndex - 1].focus();
            }
            break;
        case 'Escape':
            lastFocusedElement.focus();
            break;
        default:
            return; // Quit when this doesn't handle the key event.
    }
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
};
export default handleKeyPress;