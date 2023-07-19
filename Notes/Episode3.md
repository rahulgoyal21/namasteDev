**JSX and React is separate**
React can be written without jsx but jsx make devs life easy to read and write code

**JSX is not HTML inside JS**

1. Its a myth. JSX is a HTML Like syntax
2. we can run any JS code inside JSX with curly braces {}.
3. It prevents cross-site scripting attacks, dont blindly run whatever we give to it. It first check for security. It sanitizes everything we pass over to JSX.
4. It can have only single parent on the root.
5. JSX sanitized everything we passes over it, like its not blindly render anything given to it. Example - it prevents XSS (Cross-site scripting attack) by sanitizing the data.

# JS ENGINE

does not understand JSX code, its understand only ECMAScript.
Code gets transpiled by parcel before it goes to JS engine.
Babel does the transpilation job internally

# React element

JSX is a react element

# React component

A function returning some peace of JSX (react element, React.createElement()) is a react component

# Component composition

Rendering of a component inside a component(parent component) is called component composition.
