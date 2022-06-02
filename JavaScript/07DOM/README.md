# **The Document Object Model (DOM) is an application programming interface (API) for manipulating HTML documents.**

**The DOM represents an HTML document as a tree of nodes. The DOM provides functions that allow you to add, remove, and modify parts of the document effectively.**

## *Selecting elements*

### **getElementById()– select an element by id**.

The document.getElementById() method returns an Element object that represents an HTML element with an id that matches a specified string.

If the document has no element with the specified id, the document.getElementById() returns null.

### **getElementsByName()– select elements by name.**

The getElementsByName() returns a live NodeList of elements with a specified name.

The NodeList is an array - like object, not an array object.

### **getElementsByTagName()– select elements by a tag name**

The `getElementsByTagName()` is a method of the document or element object.

The `getElementsByTagName()` accepts a tag name and returns a list of elements with the matching tag name.

The `getElementsByTagName()` returns a live `HTMLCollection` of elements. The `HTMLCollection` is an array-like object.

### **getElementsByClassName()– select elements by one or more class names.**

The `getElementsByClassName()` method returns an array-like of objects of the child elements with a specified class name. The `getElementsByClassName()` method is available on the `document` element or any other elements.

When calling the method on the `document` element, it searches the entire document and returns the child elements of the document:

### **querySelector()– select elements by CSS selectors.(querySelector() and querySelectorAll())**

The `querySelector()` is a method of the `Element` interface. The `querySelector()` method allows you to select the first element that matches one or more CSS selectors.

The following illustrates the syntax of the `querySelector()` method:

*let element = parentNode.querySelector(selector);*

In this syntax, the `selector` is a CSS selector or a group of CSS selectors to match the descendant elements of the `parentNode`.

If the `selector` is not valid CSS syntax, the method will raise a `SyntaxError` exception.

If no element matches the CSS selectors, the `querySelector()` returns `null`.
