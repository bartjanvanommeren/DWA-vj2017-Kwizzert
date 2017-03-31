# Kwizzert

This README will give you a short summary of the Kwizzert App. We start with a walkthrough into getting this project up and running. Further we will list the requirements, architecture, communication protocol, components, routes and external libraries used.

Kwizzert is a real-time web-app supposed to be used as an party game for groups of people setting up and taking quizzes, a pub quiz.

A more extensive description of the app can be found in Kwizzert Description.pdf [Kwizzert Description.pdf](https://github.com/bartjanvanommeren/DWA-vj2017-Kwizzert/blob/master/Kwizzert%20Description.pdf)

### Version
0.0.0

## Installation
```
git clone https://github.com/bartjanvanommeren/DWA-vj2017-Kwizzert.git
npm install
npm start
```
## Requirements

 - There are teams
 - Team sizes do not matter
 - Teams can only join at the beginning of a game
 - Atleast two teams signup but there can be more participating teams
 - A game consists of multiple rounds and each round has 12 questions
 - Questions can be selected from 3 categories
 
 - There is a quiz master
 - quiz master verify's team submissions
 - can start a game
 - The quiz master can select the 3 category's for the question of that round
 - The quiz master verify's wether answers submitted by the participatting teams are valid or not
 - The quiz master can skip a question
 - The quiz master can end a game
 - The quiz master can select the next question
 
 - There is a scoreboard
 - The scoreboard displays the points of the teams
 - The scoreboard displays the time left to answer a question
 - The scoreboard indicates what state the game is in examples: quizz setup, answer submission, answer validation, post game screen
 - displays the round
 - displays the question
 - displays team names and the scores of these teams
 - displays the amount of correct answers this round
 - displays category of the question
 - live updates on verification input of the quiz master
 - The scoreboard only shows the top three teams and emphasizes the winning team
 
 - The team client is scaled to be used on smartphones
 - The quiz master client is scaled to be used on tablets
 - The scoreboard client is scaled to be used on beamers
 
 - The server supports multiple games running simutaniusly
 
 - Every question is only asked once
 - Team names are unique and required
 - Teams can edit their answer after submitting it
 - Empty answers by teams are ignored
 
### Optional Requirements
 - Questions are time limited
 - Multiple clients of the same team can connect
 - The App keeps a history of played games
 
## Mockups - Bart-Jan
The game has several states it can cycle through, based on what the game master is doing the scoreboard and the team app will display status messages or navigate to new pages.

State examples:
Pre Game
Pre Round
Pre Question
Question
Post Question

Flow examples
GM starts game -> Signups of teams (Pre Game) -> GM selects categories for current round (Pre Round) ->GM selects the question (Pre Question) -> The teams submit answers (Question) -> The GM closes submissions and validates answers (Post Question) -> The GM selects next question (Question Setup)

The game will repeat the last cycle from question select 12 times after which it will drop back into Pre Round and the scoreboard will update the current scores.

an example of what the apps will look like can be found here:
http://ugjp7u.axshare.com


## Architecture - Sven
### Component Diagram
![alt text](https://github.com/bartjanvanommeren/DWA-vj2017-Kwizzert/blob/master/Kwizzert%20Component.jpg "Component Diagram")
 
### Deployment Diagram
![alt text](https://github.com/bartjanvanommeren/DWA-vj2017-Kwizzert/blob/master/Kwizzert%20Deployment.jpg "Deployment Diagram") 

## Communication Protocol - Sven
REST
Websocket

## Components - Bart-Jan

## Routes - Bart-Jan
/team/:gameID/:teamId
team ui

/master/:gameID
quiz master ui

/scoreboard/:gameID
scoreboard ui

/team/, /master/ and /scoreboard/ are serverside routing, all other routing will be done clientside.

## External libraries
Mongoose
React
React router
Websocket
Redux
Bootstrap

## Todos
--TODO Sven: fix protocols, add description of components to diagram
