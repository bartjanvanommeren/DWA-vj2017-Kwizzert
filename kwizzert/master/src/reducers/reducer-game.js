import ReactDOM from 'react-dom';

export default function (state, action) {
    var game = state || {
        name: "Example Game",
        password: "JDGRTY",
        teams: [
            {
                id: "1",
                name: "team1",
                accepted: false,
                score: 0.0,
                correct: 0
            },
            {
                id: "2",
                name: "team2",
                accepted: false,
                score: 0.0,
                correct: 0
            },
            {
                id: "3",
                name: "team3",
                accepted: false,
                score: 0.0,
                correct: 0
            },
            {
                id: "4",
                name: "team4",
                accepted: false,
                score: 0.0,
                correct: 0
            },
            {
                id: "5",
                name: "team5",
                accepted: false,
                score: 0.0,
                correct: 0
            },
            {
                id: "6",
                name: "team6",
                accepted: false,
                score: 0.0,
                correct: 0
            },],
        roundNr: 0,
        questionNr: 0,
        categorys: [
            {
                name: "ExampleCategory1",
                questions: [
                    {
                        question: "hoe laat is het",
                        answer: "tijd is relatief"
                    },
                    {
                        question: "wat is mijn naam?",
                        answer: "repelsteeltje"
                    },
                    {
                        question: "waarom is een banaan krom?",
                        answer: "banaan kabouters"
                    }
                ]
            },
            {
                name: "ExampleCategory2",
                questions: [
                    {
                        question: "hoe laat is het",
                        answer: "tijd is relatief"
                    },
                    {
                        question: "wat is mijn naam?",
                        answer: "repelsteeltje"
                    },
                    {
                        question: "waarom is een banaan krom?",
                        answer: "banaan kabouters"
                    }
                ]
            },
            {
                name: "ExampleCategory3",
                questions: [
                    {
                        question: "hoe laat is het",
                        answer: "tijd is relatief"
                    },
                    {
                        question: "wat is mijn naam?",
                        answer: "repelsteeltje"
                    },
                    {
                        question: "waarom is een banaan krom?",
                        answer: "banaan kabouters"
                    }
                ]
            }],
        selectedCategory: "Category1",
        selectedQuestion: "Example question",
        selectedQuestionAnswer: "Example answer",
        gameState: 1, // 1=pre-round 2=pre-question 3=question 4=post-question
    }

    function toggleTeamAccepted(i) {
        game.teams[i].accepted = !game.teams[i].accepted;
        console.log(game.teams[i].accepted)
    }

    function changeGameName(name) {
        game.name = name;
    }

    function nextState(){
        // 1=pre-game 2=pre-round 3=pre-question 4=question 5=post-question
        game.gameState ++;
        switch (game.gameState) {
            case 2:
                game.roundNr ++;
                break;
            case 3:
                game.questionNr ++;
                break;
            case 6:
                if (game.questionNr >= 12){
                    game.gameState = 1;
                    game.questionNr = 0;
                } else {
                    game.gameState = 2;
                }
                break;
            default:
        }
        console.log("state: " + game.gameState);
        console.log("round: " + game.roundNr);
        console.log("question: " + game.questionNr);
    }

    switch (action.type) {
        case "TOGGLE_TEAM_ACCEPTED":
            toggleTeamAccepted(action.payload);
            return game
        case "CHANGE_GAME_NAME":
            changeGameName(action.payload);
            return game
        case "NEXT_STATE":
            nextState();
            return game
        default:
            return game
    }
}