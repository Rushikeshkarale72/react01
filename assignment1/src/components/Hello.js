import React from "react";

const Hello = () => {
    return(
        <div>
            <h1>About us</h1>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
            <p>The tutorial is divided into several sections:

                Setup for the Tutorial will give you a starting point to follow the tutorial.
                Overview will teach you the fundamentals of React: components, props, and state.
                Completing the Game will teach you the most common techniques in React development.
                Adding Time Travel will give you a deeper insight into the unique strengths of React.
                You don’t have to complete all of the sections at once to get the value out of this tutorial. Try to get as far as you can — even if it’s one or two sections.

            </p>
            <p>We recommend that you check out the tic-tac-toe game before continuing with the tutorial. One of the features that you’ll notice is that there is a numbered list to the right of the game’s board. This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.</p>
        </div>
    )
}

export default Hello;