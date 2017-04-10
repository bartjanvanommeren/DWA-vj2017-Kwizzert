
export default function() {
    return {
        name: "Example Game",
        password: "JDGRTY",
        teams: ["team1", "team2", "team3", "team4", "team5", "team6"],
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
}