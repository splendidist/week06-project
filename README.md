🎯 Please mention the requirements you met and which goals you achieved for this assignment.

Project Plan

Before building the app for this project, I made a design using Figma. I took some inspiration from my previous cookie clicker app, and added some elements that I had wanted to use in my previously, such as a username input, and a shop for accessories for the cat :3 I made some designs for modals that tell the user how to play the game and give some context to the game theme. I also listed what parts of the app I wanted to be interactive for the user, and made some svgs for the app. You can find my desing plan here:
https://www.figma.com/file/DnwAjek2IncDxLwOmPEKUL/week06-project-wireframe?type=design&node-id=0%3A1&mode=design&t=wIbhlkFmeqY7c8VL-1

User Stories

- As a user, I want to be able to click the cookie and increment the counter
- As a user, I want to see the counter automatically increment using an interval timer
- As a user, I want to purchase items i can afford in the shop and increase the number of cookies every time the interval passes

Requirments

- I created state variables to store the current number of cookies and the cookies per second (Main.jsx).
- I set up a timer to increment the number of cookies by the cookiesPerSecond value (useEffect), and handled clearing the timer using the useEffect return value (Main.jsx).
- I set up an array of objects containing the items available for purchase in the store, their cost, and their increment increase value (upgrades.js). I then mapped through these and created a button for each (Main.jsx).
- I created a function to handle the purchase of an item. This checks if the user has enough cookies to purchase the item, and if so, subtracts the cost of the item from the number of cookies and adds the increment value to the cookiesPerSecond value.

Stretch Goals

- I set up local storage so that when the user refreshes or reloads the page, they have the same cookies and cps values
- I attempted to make the app responsive using media queries, and used lighthouse to ensure a good accessibility report
- I attempted to make modals using components, using arrays in Header.jsx

Future Additions

Some things I want to add to this app in the future include:

- Allowing the user to use the accessories shop
- Allowing the user to input their username and have it replace the placeholder
- Making the app accessible with tab and enter
- Allow the user to change the cat icon with a button either side of the cat
- Have a restart button

🎯 Were there any requirements or goals that you were not quite able to achieve?

Although the user is able to purchase upgrade from the shop if they can afford them, and the cookies are subtracted and cps added, their are a few bugs:

- when the user clicks the cookie for the very first time, nothing happens
- when the user refreshed the page, the cookies go down by 1 cookie (e.g if you click the cookie 5 times and refresh the page, you now have 4 cookies)

🎯 If so, could you please tell us what was it that you found difficult about these tasks?

I found using react the most difficult for this task. I understand the components e.g mapping through the buttons and using components, but some of the logic for the cookie clicker I think I overcomplicated intially which made it difficult to understand. I did find allowing the user to purchase upgrade items difficult, as I thought it should be possible by just adding setCookies(cookies - cost) to the buyUgrade function. I eventually got the function to work AFTER setting up local storage.

I think I could have used conditional rendering for my functions, but just did if statements because I understand them and to save time. I also would have liked to have split up my App.css into different files to keep them organised/tidy but didn't have enough time.

🍪 What went really well and what could have gone better?

Using CSS and mapping through the buttons went really well. I also think making the modals went well too as this isn't something I've done before. I think the logic of the cookie clicker game would have gone better if I understood JavaScript and React more.

🍪 Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials).

https://www.w3schools.com/howto/howto_css_modals.asp - modal boxes

https://react.dev/reference/react-dom/createPortal#rendering-a-modal-dialog-with-a-portal - modals in react

https://codesandbox.io/p/sandbox/react-dev-6c6clm?file=%2Fsrc%2Fstyles.css%3A59%2C1-72%2C2&utm_medium=sandpack - onlick event for imported components

https://github.com/splendidist/week04-project/tree/main - previous cookie clicker code

🍪 Describing errors or bugs you encountered while completing your assignment.

- Images not appearing on vercel when app was deployed. I fixed this by moving all of my images to the public folder.
- For a long time I thought this function was adding 1 to the cookies every time the cookies was clicked, then realised it is actually adding the cps to the current cookies in the interval. I made a new function that adds 1 to the cookies every time it is clicked.

  function addCookie() {
  setCookies((currentCookies) => {
  return currentCookies + refCps.current;
  });
  }

- I struggled to get this line of code to work for a long time: setCookies(cookies - cost); but got it to work after setting up the local storage.
- I have a bug where when the user loads the page, it removes 1 cookie from their current cookies (e.g if you click the cookie 5 times and refresh the page, you now have 4 cookies)
- I also have a bug where the first cookie click does nothing
- I also find when you spam the cookie button the current cookies displayed lags behind a bit

✨ Icon Sources

Cookie icon - https://www.flaticon.com/authors/smashicons

All other icons and cat cursor - https://www.flaticon.com/authors/freepik
