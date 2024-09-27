
# Project Overview Proposal

Project Type: Fitness App with Mascot <br />
Project Name: Primal Fit

## Elevator Pitch

We are building this project to motivate users to track their calories and fitness progress while having an engaging experience with a silly mascot as a reminder.

## N "things of complexity," where N is the number of students in the group.

Describe each component briefly. How do the components fit together (i.e., predicted architecture)?

1. Front End (React)
2. Middleware (API: Flask)
3. Backend (PostgreSQL)
4. Container (Docker)
5. Design (Figma)
6. Hosting (Heroku, AWS)

Before we start writing any code, we will design a prototype in Figma; once satisfied, we will build the UI with code where data can be recorded and displayed. The acquired data will be stored in the backend, and the middleware will be in charge of delivering the backend data to the front end and vice versa. For easier development, we will then create a Docker container, and once we finish our MPV, we will host it so that anyone is able to access it.

## How do the components fit together (i.e., predicted architecture)?

Prompt: "We think, based on not touching it yet, we'll do..." What language or technology stack or framework will be used?

The front end is going to display all the data contained in the backend. We will develop an API to seamlessly retrieve the backend information. Once we get our MVP finished, we will then create a Docker container and have it host it on a hosting site such as Heroku or AWS.

## What language, technology stack, or framework will be used?

Include a response to: "Why are you picking the tech stack that you are?"

1. Frontend:

- React
    - React is the most popular JS framework utilized in many companies. While none of our team members have experience in it, we value the skills that could be gained from the project.
 
- Boostrap
    - We decided on bootsrap because of it's ample documentation and it's ease of learning curve. With tailwaind we would have to create our own components while with bootstrap would be already made. We value this feautre from bootstrap becase all the members in our group are not very good with css.

- State Management: Redux / Recoil / Zustand:
    - Although none of our members are familiar with state management, from the research done, this is integral to the developing process, and we are in between choosing Redux (complex but widely used), Recoil / Zustand (simpler), or using the native options in React.

- Chart.js
    - We will use this JS library to display the user’s data in an easy-to-understand and reactive format.

2. API: Python - Flask, Django, FastApi.
- We choose Python for its simple syntax and ease of learning curve and because most of our team members are familiar with the language.

3. Backend: PostgreSQL
- We decided to use a relational database because of its ease of use and easy to understand, as well as its access to to related data points.

4. Docker
- We are thinking of using Docker because it is becoming an industry standard and will allow us to easily be able to deploy and run the app no matter the OS being used, improving our productivity.
5. Design: Figma
- We will be developing all our designs inside Figma because it allows for great collaboration as well as giving us a new skill that is valued in the workplace.
6. Hosting: Heroku, AWS
- Once we have our MVP, we will research hosting options to upload our application on the cloud.

## What is the predicted life cycle/methodology that you will follow?

We will be using the Agile methodologies, specifically Scrum. With 2 weeks of sprints and having regular scrum meetings.

We will use a Traban board (Trello) to keep track of each other’s work, be accountable for each other, and be reviewed every day for a short period of time and deeply after the end of the sprint.

We will develop a user story to complete our requirements, consisting of the following parts:

1. Design

2. Development

3. Testing

4. Deployment

5. Review
