

1. Difference between Selectors
getElementById: Selects and returns a single element based on its unique ID.

getElementsByClassName: Selects all elements with a matching class name and returns a live HTMLCollection.

querySelector: Uses CSS selectors and returns only the first matching element it finds.

querySelectorAll: Uses CSS selectors and returns a static NodeList containing all matching elements.
(Key difference: The query methods allow for complex CSS targeting, while the others are strictly for specific attributes.)

2. Creating and Inserting a New Element
To create and insert an element, you first generate it using document.createElement(), add content to it, and then attach it to a parent element in the DOM using methods like appendChild() or append().

3. Event Bubbling
Event bubbling is a phase in the event propagation process. When an event happens on an element (like a click), it first runs the handler on that element, then triggers the same event on its parent, and continues "bubbling" up the DOM tree to its ancestors until it reaches the document root.

4. Event Delegation
Event delegation is a technique where you attach a single event listener to a parent element instead of assigning individual listeners to multiple child elements.
Why it is useful: It relies on event bubbling to catch events from the children. This improves performance by saving memory and ensures that dynamically added child elements are automatically handled without needing new listeners.

5. preventDefault() vs stopPropagation()
preventDefault(): Prevents the browser's default behavior for a specific event. (For example, stopping a form submission from refreshing the page, or stopping a link from navigating to a new URL).

stopPropagation(): Stops the event from bubbling further up the DOM tree. This prevents parent elements from triggering their own event listeners for the same event.