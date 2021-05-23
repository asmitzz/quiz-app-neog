import { QuizData } from "./Data.types";

export const data: QuizData = [
  {
    quizName: "Cricket",
    questions: [
      {
        question: "Where did cricket originate?",
        options: [
          {
            text: "England",
            isRight: true,
          },
          {
            text: "India",
            isRight: false,
          },
          {
            text: "Australia",
            isRight: false,
          },
          {
            text: "New zealand",
            isRight: false,
          },
        ],
      },
      {
        question: "What does LBW stand for?",
        options: [
          {
            text: "Long Ball Wide",
            isRight: false,
          },
          {
            text: "Long Beyond Width",
            isRight: false,
          },
          {
            text: "Leg Before Out",
            isRight: true,
          },
          {
            text: "Lol Bout to Win",
            isRight: false,
          },
        ],
      },
      {
        question:
          "Who did England beat in the final of the 2019 Cricket World Cup?",
        options: [
          {
            text: "Australia",
            isRight: false,
          },
          {
            text: "New zealand",
            isRight: true,
          },
          {
            text: "India",
            isRight: false,
          },
          {
            text: "Sri lanka",
            isRight: false,
          }
        ]
      }
    ]
  },
  {
    quizName: "Movies",
    questions: [
      {
        question: "First Indian movie submitted for Oscar",
        options: [
          {
            text: "The Guide",
            isRight: false,
          },
          {
            text: "Mother India",
            isRight: true,
          },
          {
            text: "Madhumati",
            isRight: false,
          },
          {
            text: "Amarpali",
            isRight: false,
          },
        ],
      },
      {
        question: "First Indian sound film was",
        options: [
          {
            text: "Alam Ara",
            isRight: true,
          },
          {
            text: "Raja HarishChandra",
            isRight: false,
          },
          {
            text: "Kishan Kanya",
            isRight: false,
          },
          {
            text: "None of the above",
            isRight: false,
          },
        ],
      },
      {
        question:
          "FilmFare awards started from the year",
        options: [
          {
            text: "1952",
            isRight: false,
          },
          {
            text: "1964",
            isRight: false,
          },
          {
            text: "1954",
            isRight: true,
          },
          {
            text: "1960",
            isRight: false,
          }
        ]
      }
    ]
  }
];
