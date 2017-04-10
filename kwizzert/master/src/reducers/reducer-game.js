export default function (state, action) {
    var game = state || {
        test: "nothing changed",
        name: "Example Game",
        password: "JDGRTY",
        teams: [
            {
                id: "1",
                name: "team1",
                accepted: true,
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
        Categorys: [
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
        gameState: 0, // 0=not-created 1=pre-game 2=pre-round 3=pre-question 4=question 5=post-question
    }

    function toggleTeamAccepted(i) {
        game.test = "something changed";
        game.teams[i].accepted = !game.teams[i].accepted;
        console.log(game.teams[i].accepted)
        console.log(game.test)
    }

    switch (action.type) {
        case "TOGGLE_TEAM_ACCEPTED":
            toggleTeamAccepted(action.payload);
            return game
        default:
            return game
    }
}