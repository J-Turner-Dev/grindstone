## Building Todoist Clone from Scratch Using React (Custom Hooks, Context) & Firebase NOSQL Database nicknamed GrindStone

This application is a case study for myself to understand how to create a web app using React and the NoSQL database Firebase. It employs React components, hooks, state, context and will eventually use a testing library to test the app as well as adding accessibility to the React components. This web app is part of a tutorial by Karl Hadwen located here: https://www.youtube.com/watch?v=hT3j87FMR6M&list=WL&index=39 I have plans on adding my own creations and components as well as new features on my own in the future. I nicknamed this project GrindStone. This to do list app will help users keep their nose to the grindstone and accomplish their tasks!

![Preview](GrindStone-preview.PNG?raw=true)

Progress....

Context was added to the Project. Context allows React to pass props (arguments) through multiple React components without actually adding them as props in each component. If a component needs a prop from the top of the component tree it will not have to be added to every component to pass it through the tree.

Also some styling was done to make it more viewable to work on

![Preview](GrindStone-preview2.PNG?raw=true)

More Progress....

At this point I have added the project components to the sidebar. Also the ability to see the tasks in the 3 collated projects tabs and the tasks for the projects in the main content area. The ability to add and remove projects by creating or deleting projects to and from the database was also added. So far it is looking really solid!

![Preview](GrindStone-preview3.PNG?raw=true)

Current Condition....

At this point the to-do-list app is fully functional.  It contains the ability to create projects, creat tasks for each project or general inbox tasks.  Each task is sorted by project and date.  The next step for this project is to add accessibitly for the components.  And build the testing for each component to make use of the data-testid tags each html element contains.  Further along the project I plan on adding more features, but for now it is a solid to do list app.
