**The Document Object Model(DOM) is an application programming interface(API) for manipulating HTML documents.**

**The DOM represents an HTML document as a tree of nodes.The DOM provides functions that allow you to add, remove, and modify parts of the document effectively.**

Selecting elements 

1. **getElementById()– select an element by id**.

   The document.getElementById() method returns an Element object that represents an HTML element with an id that matches a specified string.

   If the document has no element with the specified id, the document.getElementById() returns null.
2. **getElementsByName()– select elements by name.**

   The getElementsByName() returns a live NodeList of elements with a specified name.

   The NodeList is an array - like object, not an array object.
3. **getElementsByTagName()– select elements by a tag name.**
4. **getElementsByClassName()– select elements by one or more class names.**
5. **querySelector()– select elements by CSS selectors.**
