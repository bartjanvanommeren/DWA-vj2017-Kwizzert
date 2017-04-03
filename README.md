# Kwizzert

This README will give you a short summary of the Kwizzert App. We start with a walkthrough into getting this project up and running. Further we will list the requirements, architecture, communication protocol, components, routes and external libraries used.

Kwizzert is a real-time web-app supposed to be used as an party game for groups of people setting up and taking quizzes, a pub quiz.

A more extensive description of the app can be found in [Kwizzert Description.pdf](https://github.com/bartjanvanommeren/DWA-vj2017-Kwizzert/blob/master/Kwizzert%20Description.pdf)

### Version
0.0.1

## Installation
```
git clone https://github.com/bartjanvanommeren/DWA-vj2017-Kwizzert.git
npm install
npm start
```
## Requirements
### Teams
 - Team sizes do not matter
 - Teams can join a game with the provided password
 - Teams can only join at the beginning of a game
 - Atleast two teams signup but there can be more participating teams
 - A game consists of multiple rounds and each round has 12 questions
 - Questions can be selected from 3 categories
 - The team app can be used on smartphones
 - Team names are unique and required
 - Teams can edit their answer after submitting it, as long as the question has not been closed by the quiz master

### Kwizmeestert
 - Quiz master verify's team submissions
 - The quiz master can start a game
 - The quiz master can select the 3 category's for the question of that round
 - The quiz master verify's wether answers submitted by the participatting teams are valid or not
 - The quiz master can skip a question
 - The quiz master can end a game
 - The quiz master can select the next question
 - The quiz master app can be used on tablets
 
### Scoreboard
 - The scoreboard displays the points of the teams
 - The scoreboard displays the time left to answer a question
 - The scoreboard indicates what state the game is in examples: quizz setup, answer submission, answer validation, post game screen
 - Displays the round
 - Displays the question
 - Displays team names and the scores of these teams
 - Displays the amount of correct answers this round
 - Displays category of the question
 - Live updates on verification input of the quiz master
 - The scoreboard emphasizes the winning team after a game/round has ended
 - The scoreboard app can be used on a regular screen
 
### Other 
 - The server supports multiple games running simultaniously
 - Every question is only asked once  
 - Empty answers by teams are ignored
 
### Optional Requirements
 - Questions are time limited
 - The App keeps a history of played games
 - The database stores the game data so games can be played over multiple days
 
## Mockups - Bart-Jan
The game has several states it can cycle through, based on what the game master is doing the scoreboard and the team app will display status messages or navigate to new pages.

State examples:
- Pre Game
- Pre Round
- Pre Question
- Question
- Post Question

Flow examples
GM starts game -> Signups of teams (Pre Game) -> GM selects categories for current round (Pre Round) ->GM selects the question (Pre Question) -> The teams submit answers (Question) -> The GM closes submissions and validates answers (Post Question) -> The GM selects next question (Question Setup)

The game will repeat the last cycle from question select 12 times after which it will drop back into Pre Round and the scoreboard will update the current scores.

An example of what the apps will look like can be found here:
http://ugjp7u.axshare.com

## Architecture - Sven
### Component Diagram
![Component Diagram](https://github.com/bartjanvanommeren/DWA-vj2017-Kwizzert/blob/master/Kwizzert%20Component.jpg "Component Diagram")
 
### Deployment Diagram
![Deployment Diagram](https://github.com/bartjanvanommeren/DWA-vj2017-Kwizzert/blob/master/Kwizzert%20Deployment%20v2.jpg "Deployment Diagram")

### Component Descriptions
Component|Description
---|---
React | Library used to create Single Page Applications with JavaScript
React-Router | Library for React to route the web application on the client
NodeJS | Serverside JavaScript
Kwizzert | Main application that serves all three Single Page Applications
ScorebordSPA | Single Page Application for the scoreboard app
TeamSPA | Single Page Application for the teams app
KwizmeestertSPA | Single Page Application for the quiz master app
BusinessLayer | Handles all database interactions
Mongoose | Provides schema's for MongoDB models
MongoDB | Database to store information for the Kwizzert

## Communication Protocol - Sven & Bart-Jan
The communication between the business layer and the SPA's will be done through a REST API. For now, the only functionality this API offers is getting the list of questions for a specific category, getting the details for a specific question id and getting a list of all possible categories.

For getting the list of questions:
/api/:version/questions/:category --GET

For getting the list of categories:
/api/:version/categories --GET

For getting the details of a specific question:
/api/:version/question/:id

The communication between the clients (browsers) and the Kwizzert App will be done through Websockets. Each message contains a type which specifies what kind of message has been sent, so both the client and the server can identify what action should be executed. All messages are sent as JSON strings.

A generic message sent over the websocket would look like this:
``` JavaScript
{
    MessageType : String,
    Message : Object
}
```

### Create Game
Message is sent when the quiz master creates a game:
``` JavaScript
{
    MessageType : CREATE_GAME,
    Message : {}
}
```
The response following this request:
``` JavaScript
{
    MessageType : CREATE_GAME_RESPONSE,
    Message : {
                   Status: String,
                   Password: String
              }
}
```

### Registering Team
The message that is sent when a team registers:
``` JavaScript
{
    MessageType : TEAM_REGISTER,
    Message : {
                  Password: String
              }
}
```
This will trigger a responsemessage: 
``` JavaScript
{
    MessageType : TEAM_REGISTER_RESPONSE,
    Message : {
                   Status: String
              }
}
```
If the team register request was succesful, a message is sent to the quiz master as well:
``` JavaScript
{
    MessageType : NEW_TEAM_REGISTERED
    Message : {
                   TeamName : String
              }
}
```
The quiz master can then either approve or deny the request:
``` JavaScript
{
    MessageType : NEW_TEAM_REGISTERED_APPROVAL
    Message : {
                   TeamName : String,
                   Approved : Boolean
              }
}
```

### Registering Scoreboard
Message sent by the scoreboard to connect to a game:
``` JavaScript
{
    MessageType : SCOREBOARD_REGISTER,
    Message : {
                  Password: String
              }
}
```
The server will respond to request with the following message:
``` JavaScript
{
    MessageType : SCOREBOARD_REGISTER_RESPONSE,
    Message : {
                  Status: String,
                  Round : Number,
                  QuestionNumber: Number,
                  Question : String,
                  CurrentScore : [(TeamName : String, Score: Number)]
}
```

### Starting Game
The message that is sent by the quiz master when a game is started:
``` JavaScript
{
    MessageType : START_GAME,
    Message : {
                  Password: String
              }
}
```
This will trigger a response to all approved teams:
``` JavaScript
{
    MessageType : GAME_STARTED,
    Message : {
                  Password: String,
                  Round : Number,
                  QuestionNumber : Number
              }
}
```
A similar message is sent to the scoreboard, but it also contains the score for all teams:
``` JavaScript
{
    MessageType : GAME_STARTED,
    Message : {
                  Password: String,
                  Round : Number,
                  QuestionNumber : Number,
                  CurrentScore : [(TeamName : String, Score: Number)]
              }
}
```

### Starting Round
This message is sent by the quiz master when he starts a round:
``` JavaScript
{
    MessageType : START_ROUND,
    Message : {
                  Password: String,
                  CategoryOne : String,
                  CategoryTwo : String,
                  CategoryThree : String
              }    
}
```
The server responds to this request:
``` JavaScript
{
    MessageType : START_ROUND_RESPONSE,
    Message : {
                   Status: String
              }
}
```
If the round is started a message is sent to the teams and the scoreboard:
``` JavaScript
{
    MessageType : ROUND_STARTED,
    Message : {}
}
```

### Start Question
Sent by the quiz master once he has selected a question:
``` JavaScript
{
    MessageType : NEW_QUESTION_SELECTED,
    Message : {
                   Password: String,
                   QuestionId : String
              }
}
```
The quiz master gets a response to this request:
``` JavaScript
{
    MessageType : NEW_QUESTION_SELECTED_RESPONSE,
    Message : {
                   Status: String
              }
}
```
A message is sent to both the teams and the scoreboard if the new question has been approved:
``` JavaScript
{
    MessageType : NEW_QUESTION,
    Message : {
                   QuestionId: String,
              }
}
```

## React Components - Bart-Jan
Here you can find a list of planned components, we plan to split jsx and logical code staying true to the MVVM pattern, communication with the server will not be split and live in the controller of the specific page.

### Quiz Master

Header -
Lets the quiz master end a game, displays the current round/ question.

CreateGame -
Lets the quiz master register a new game, server will communicate wether the game name is accepted.

GameSetup -
Shows the quiz master teams that signin to the game, quiz master can select which teams are allowed to join and can start the game.

RoundSetup -
Lets the quiz master pick categories out of available categories.

QuestionSetup -
Lets the quiz master pick a question out of selected categories, by default a random question will be selected, selected questions will be removed from the question list.

QuestionProgress -
Shows the quiz master team submissions and lets the game master close submissions

PostQuestion -
Lets the quiz master verify wether answer are correct or not.

### Team

Header -
Displays the current round/ question.

Signup -
Lets the team signup for a game with submitted team name.

Status -
Used when there is no input needed from teams, shows a short message about the current state of the game.

Question -
Lets the team submit and edit an answer.

### Scoreboard

Header -
Displays the current round/ question.

Signin -
Lets the scoreboard connect to a game.

Status -
Displays the scores, correct answers, current state and team names.
Also displays the category, question and answer.

PostGame -
Displays a leaderboard, top 3 winning teams will be emphasized.

## Routes - Bart-Jan
/team/join

Team UI to join a game.

/team/:gameID/:teamId

Team UI for a running game.

/master/create

Kwizmeesterst UI for creating a new game.

/master/:gameID

Kwizmeestert UI for a running game.

/scoreboard/connect

Scoreboard UI for connecting a scoreboard to a running game.

/scoreboard/:gameID

Scoreboard UI for a running game.


/team/, /master/ and /scoreboard/ are serverside routing, all other routing will be done clientside.

## External libraries
Libary name | Version
--- | ---
[NodeJS](https://nodejs.org/en/) | 6.10.1
[MongoDb](https://www.mongodb.com/) | 3.4.3
[Mongoose](http://mongoosejs.com/) | 4.9.3
[React](https://facebook.github.io/react/) | 15.4.2
[React-router](https://github.com/ReactTraining/react-router) | 4.0.0
[Ws](https://github.com/websockets/ws) | 2.2.2
[Bootstrap](http://getbootstrap.com/) | 3.3.7 
[Express](https://expressjs.com/) | 4.15.2
