# Requirements Specification

## User Story 1 Dilean 1
  __"As a user, I want to be able to schedule routines for each day with  workout options to choose from and be displayed with an instructional video."__

1. Workout Page
    1. The workout page shall have the following structure: a video showing an example of the exercise, timer/stopwatch for tracking the duration of a workout, start/stop for the timer/stopwatch and a back/next button for going back and forth the next workout. 
2. Routine Page
    1. We shall make a CRUD for the routines objects.
    2. A routine shall be composed of workout objects in an ordered list
    3. A routine shall have a calculated field for estimated calories that will be burned. 
    4. When creating a routine it shall show a page where you can select a workout from a list that can be filtered by the target muscle area. 
    5. A routine object shall contain a days of the week and time to work out for scheduling purposes. 

## User Story 2 Dilean 2
__"I want to be able to keep track of the days i've worked out."__

1. A user shall be able to see a small icon showing the days worked out in a row (Kinda of like a streak in duolingo).
2. Clicking on the icon shall display a pop up highlighting the days the the user has worked out in a calendar. 

## User Story 4 David 1 
__" As a user when visiting the website for the first time I would like to be able to create an account so my progress will be saved."__

1. A user shall be required to create an account when accessing the website for the first time.
    1.1. We shall create CRUD methods for a  the User object
2. A user shall be prompted to login to the website if they want to access their fitness history. 


## User Story 5 David 2
__"As a user I want to be able to search common foods and input them into my nutritional goals for the day."__
1. A user shall be able to search for foods. 
  
    1.1. A basic search engine shall be created to search a database. 
  
2. A user shall be able to log foods into their daily goals from the search results. 


## User Story 6 Aziz 1
__"As a user and I want the to be able to create custom recipes and be able to see it's nutritional facts."__

1. A user shall be able to create a recipe and shall be able to call it on the food logging page.

   1.1  A basic search engine shall be created to search a database. 


## User Story 7 Aziz 2 
 __"As a user and I want the to be able to track water intake and sleep hour."__
 
1. A user shall be able to log their water intake and amount they sleep.


## User Story 8 Jinho 1 
__"As a end-user, I want to see overall calories I burned over a week so that I can check if my workout plan goes well or not."__ 

1. A user shall see a chart on the screen that is about the overall calories for a day, week and month. 

    1-1. The user's workout history shall be stored such as a kind of workout, calories burned in the database.

    1-2. The workout history shall be able to be retrieved anytime so that the user shall be able to check his/her workout anytime.


## User Story 9 Jinho 2 
__"As a end-user, I want to be able to rate my workout after I'm done so that I can get better recommendations on my next workout."__ 
> This user story is similar to Dilean's third user story. So we merged it into this user story.

1. A user will be asked to rate each workout after it's done.

  1-1. The user's rating may be stored in the database so that 
  the user may edit the rating to the workout anytime.

  1-2. The stored user's rating may be used to recommend other workouts for the user in the future.
  


## User Story 10 Revanth 1 
__"I want reminders to be sent when I miss a workout, so I can stay consistent with my fitness goals."__

1. Create a button to download an ICS file to schedule workouts:

    1.1 The button shall allow the user to download an ICS file for scheduling workouts.
  
    1.2 The ICS file shall include workout date, time, and a description based on the user's routine.

2. When the button is clicked, a pop-up will appear:

    2.1 The pop-up shall display confirmation of the ICS file download with options to view or cancel.
 
    2.2 The pop-up shall include instructions or a link for adding the ICS file to calendar apps (e.g., Google Calendar, Outlook).


## User Story 11 Revanth 2 
__"As a User, I want to track my progress over time through detailed charts and graphs, so I can see how I am improving."__

1. Create a simple chart to track workout progress:
 
    1.1 A chart shall be implemented to display the number of days worked out per week, using a bar or line graph format for clarity.
 
    1.2 The chart shall automatically update based on the user’s workout history stored in the database to reflect real-time progress. Display workout consistency:

    2.1 The chart shall include a visual indicator (e.g., color coding) to show the user’s consistency in completing workouts, making it easy to identify trends.

    2.2 Data for the chart shall be retrieved from the user’s workout logs, ensuring accurate representation of their workout frequency.
