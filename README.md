## Setup Instructions

- **After forking and cloning the repository:**
  1. Navigate to the project directory:
     ```bash
     cd <project-folder-name>
     ```
  2. Install dependencies:
     ```bash
     npm install
     ```
  3. Start the development server:
     ```bash
     npm start
     ```
<br><br/>
# **Passing Information with Children in React**

When first learning React, one of the early concepts you'll encounter is the use of **props** to pass data from a parent component to its child components. Props are a fundamental part of how React enables reusable and modular code, setting it apart from vanilla JavaScript.

However, there's another powerful way to pass content to child components: the **children** prop. This approach allows you to embed data or JSX directly within the child component's tags. 

While props remain a versatile tool for explicit data transfer, **children** can sometimes make your code more intuitive and easier to read.

In this lab, we'll explore how to use **children** effectively and when it might be a better choice than props.


Got it! Here’s the section reformatted for your README:

# **Conditional Rendering and Prop-Heavy Components**

Let's head over into App.js and see how things are being rendered for this Real Estate company we are making a site. We have a div container and a few column divs in there. (Now for the sake of keeping things easy, I decided not to make more child components, but usually I would do that for the three sepearte columns. Also, since we aren't making any fetch requests, things are mostly hard coded in, but I would view it the same as puling data in from state.)
Now, we are using a componet called OldCard, which we realize we like the design of so much, that we are going to use it in all diffferent areas of the page. Since they are all tasked with very differnt things, like rendering pictures, or passing along a Name etc, they have to have the ability to take in a lot of different props. 
If we head over to OldCard.jsx now we can see whats happening. We have a whole list of props that they can accept, but because not all use cases of this componet will have those props, we are going to rely on conditonal rendering to get this to work.

> **Side Note:** How are we conditionally rendering something with `{feed && <span className="feed">{feed}</span>}`?   
> [See below for more info](#conditional-rendering-in-jsx)

Currently, this component has a lot of logic and feels cluttered. If we decide to use it for something else in the future, we'll need to add even more logic. But don't worry—there's another way to handle this!

## Conditional Rendering in JSX

In React, the syntax `{feed && <span className="feed">{feed}</span>}` uses JavaScript's logical AND (`&&`) operator for conditional rendering. Here's how it works:

- If `image` is truthy (not `null`, `undefined`, `false`, or `0`), React evaluates and renders the `<img />` element.
- If `image` is falsy, nothing is rendered.

This shorthand helps keep your code concise by avoiding traditional `if` statements. 

For more detailed documentation, check out [React's guide on conditional rendering](https://react.dev/learn/conditional-rendering).