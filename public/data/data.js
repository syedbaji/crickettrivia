cricApp.factory('cricdata', function() {
    return [{
            sno: 1,
            question: "When was the last time india won the cricket world cup?",
            options: [2001, 2002, 2003, 2004],
            answer: 2003
        },
        {
            sno: 2,
            question: "What is the highest individual score by a batsmen in test cricket?",
            options: [400, 375, 450, 275],
            answer: 375
        },
        {
            sno: 3,
            question: "Whe has won the most number of cricket world cups?",
            options: ['India', 'Suthafrica', 'Australia', 'Newzealand'],
            answer: 'Australia'
        },
        {
            sno: 4,
            question: "Howmany international centuries does Sachin tendulkar has under his name?",
            options: [35, 49, 52, 100],
            answer: 49
        }
    ];
});