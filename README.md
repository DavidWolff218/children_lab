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

# **Conditional Rendering and Prop-Heavy Components**

Let's head over into `App.jsx` and see how things are being rendered for the Real Estate site we're building. We have a container `div` with a few column `div`s inside. For simplicity, I’ve avoided creating additional child components for each of the three separate columns, but in a real scenario, I’d usually do that. Also, since we're not making fetch requests, the data is mostly hardcoded, though this can be viewed as pulling data in from state.
Now, we are using a componet called OldCard, which we realize we like the design of so much, that we are going to use it in all diffferent areas of the page. Since they are all tasked with very differnt things, like rendering pictures, or passing along a Name etc, they have to have the ability to take in a lot of different props. 
If we head over to OldCard.jsx now we can see whats happening. We have a whole list of props that they can accept, but because not all use cases of this componet will have those props, we are going to rely on conditonal rendering to get this to work.

> **Side Note:** How are we conditionally rendering something with `{feed && <span className="feed">{feed}</span>}`?   
> [See below for more info](#conditional-rendering-in-jsx)

Currently, this component has a lot of logic and feels cluttered. If we decide to use it for something else in the future, we'll need to add even more logic. But don't worry—there's another way to handle this!

## Exploring a New Approach: Using `children` in React

In this section, we'll transition to a new branch in your repository called `children`.

We'll leave the old code and OldCard component in place as a reference so you can see the original HTML structure and logic.

Unlike traditional props, which pass explicit values to components, the children prop allows us to embed JSX directly inside a component's tags. This approach provides more flexibility and can help simplify your code, especially when dealing with dynamic layouts or reusable components.

We'll start by setting up the "Meet the Team" column using the NewCard component. Instead of using a self-closing tag, we'll include the component with opening and closing tags to add content within it.

```jsx
// App.jsx
<div className="column">
  <h2>Meet the Team</h2>
  <NewCard>
  </NewCard>
</div>
```

Now, using the commented-out OldCard props and the HTML structure from the OldCard component, we will replicate the necessary elements for the name, quote, and image. However, instead of using props, we’ll hardcode the information directly into the NewCard component.
**Don’t worry about the button part just yet; we will get back to that later.**

```jsx
// App.jsx
<NewCard >
  <div className="name">
    <h3>Waldo</h3>
    <h4>I'll find you a home before you find me!</h4>
  </div>
  <img
    className="image"
    src="https://shorturl.at/jSZkp"
    alt="teammember"
  />
</NewCard>
```

### Update NewCard to Receive and Render Children

If we check the page now, we can see that the card component is being rendered on the screen, but none of the data is showing up. This happens because the `NewCard` component isn’t yet set up to receive the `children`.

Unlike with props, we don’t need to explicitly define a key in the parent to pass down the data. The JSX and HTML between the opening and closing tags of the `NewCard` component are already being passed as `children`.

To fix this, let's go into the `NewCard` component and set it up to receive and display `children`. Similar to props, we'll destructure `children` directly in the argument list of the component using curly brackets. After that, we just need to include `{children}` in the JSX to render the content.

```jsx
// NewCard.jsx
const NewCard = ({ children }) => {
  return (
    <div className="new-card">
      {children}
    </div>
  );
};

export default NewCard;
```


>Remember, when working with **props**, you can give them any name you want. However, when using this method with `children`, you **must** use the word `children` in the child component to access the passed content.

## Passing Down Props for Button Functionality

On our webpage, we should see most of the content being rendered, but we still need to add a functional button. While we're primarily passing content down as **children**, we can still pass specific props for elements like the button.

We'll modify the parent to pass the **buttonText** and **onClick** callback as named props while still wrapping most of the content as **children**.

```jsx
// App.jsx
<div className="column">
  <h2>Meet the Team</h2>
  <NewCard
    buttonText="Email Team Member"
    onClick={memberOnClick}
  >
    <h3>Waldo</h3>
    <h4>I'll find you a home before you find me!</h4>
    <img className="image" src="https://shorturl.at/jSZkp" alt="team member" />
    <p>Waldo is an expert in finding hidden gems in the real estate market.</p>
  </NewCard>
</div>
```

Inside the NewCard component, we'll add a button that uses the props buttonText and onClick while keeping the rest of the content dynamic through children.

```jsx
//NewCard.jsx
const NewCard = ({ buttonText, onClick, children }) => (
  <div className="card">
    {children}
    <button onClick={onClick}>{buttonText}</button>
  </div>
);
```

## Wrapping Up

If we check our page now, we should see a fully rendered and functional card! 🎉 

This implementation demonstrates how to combine **children** for dynamic content with regular props for specific functionality, like the button in this example. 

Try to replicate this setup with the other cards to get more practice passing down both **children** and **props** effectively.

If you run into any issues, check out the **solution branch** for guidance!


## Conditional Rendering in JSX

In React, the syntax `{feed && <span className="feed">{feed}</span>}` uses JavaScript's logical AND (`&&`) operator for conditional rendering. Here's how it works:

- If `feed` is truthy (not `null`, `undefined`, `false`, or `0`), React evaluates and renders the `<span />` element.
- If `feed` is falsy, nothing is rendered.

This shorthand helps keep your code concise by avoiding traditional `if` statements. 
