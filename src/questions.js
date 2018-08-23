const questions = [
  {
    id: 1,
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "The first computer bug was formed by faulty wires.",
    correct_answer: false,
    incorrect_answers: ["True"]
  },
  {
    id: 2,
    category: "Entertainment: Music",
    type: "boolean",
    difficulty: "medium",
    question:
      "Rapper Snoop Dogg's real name is 'Cordozar Calvin Broadus, Jr.' .",
    correct_answer: true,
    incorrect_answers: ["False"]
  },
  {
    id: 3,
    category: "Entertainment: Video Games",
    type: "boolean",
    difficulty: "easy",
    question:
      "English new wave musician Gary Numan founded the video game development company Facepunch Studios in March 2009.",
    correct_answer: false,
    incorrect_answers: ["True"]
  },
  {
    id: 4,
    category: "Geography",
    type: "boolean",
    difficulty: "medium",
    question: "There are no roads in/out of Juneau, Alaska.",
    correct_answer: true,
    incorrect_answers: ["False"]
  },
  {
    id: 5,
    category: "General Knowledge",
    type: "boolean",
    difficulty: "medium",
    question: "The vapor produced by e-cigarettes is actually water.",
    correct_answer: false,
    incorrect_answers: ["True"]
  },
  {
    id: 6,
    category: "History",
    type: "boolean",
    difficulty: "medium",
    question:
      "Assyrian king Sennacherib's destruction of Babylon in 689 BCE was viewed as a triumph by other Assyrian citizens.",
    correct_answer: false,
    incorrect_answers: ["True"]
  },
  {
    id: 7,
    category: "Entertainment: Music",
    type: "boolean",
    difficulty: "medium",
    question:
      "The country song  'A Boy Named Sue' was written by Shel Silverstein.",
    correct_answer: true,
    incorrect_answers: ["False"]
  },
  {
    id: 8,
    category: "Entertainment: Video Games",
    type: "boolean",
    difficulty: "easy",
    question: "Donkey Kong was originally set to be a Popeye arcade game.",
    correct_answer: true,
    incorrect_answers: ["False"]
  },
  {
    id: 9,
    category: "Entertainment: Japanese Anime & Manga",
    type: "boolean",
    difficulty: "easy",
    question:
      "The anime 'Lucky Star' follows the story of one girl who is unaware she is God.",
    correct_answer: false,
    incorrect_answers: ["True"]
  },
  {
    id: 10,
    category: "Sports",
    type: "boolean",
    difficulty: "medium",
    question:
      "Skateboarding will be included in the 2020 Summer Olympics in Tokyo.",
    correct_answer: true,
    incorrect_answers: ["False"]
  },
  {
    id: 11,
    category: "Entertainment: Video Games",
    type: "boolean",
    difficulty: "hard",
    question:
      "In 'Portal 2', Cave Johnson started out Aperture Science as a shower curtain company.",
    correct_answer: true,
    incorrect_answers: ["False"]
  },
  {
    id: 12,
    category: "General Knowledge",
    type: "boolean",
    difficulty: "easy",
    question: "The color orange is named after the fruit.",
    correct_answer: true,
    incorrect_answers: ["False"]
  },
  {
    id: 13,
    category: "General Knowledge",
    type: "boolean",
    difficulty: "easy",
    question: "You can legally drink alcohol while driving in Mississippi.",
    correct_answer: true,
    incorrect_answers: ["False"]
  },
  {
    id: 14,
    category: "General Knowledge",
    type: "boolean",
    difficulty: "medium",
    question: "The French word to travel is 'Travail'",
    correct_answer: false,
    incorrect_answers: ["True"]
  },
  {
    id: 15,
    category: "Entertainment: Board Games",
    type: "boolean",
    difficulty: "easy",
    question:
      "The Angry Video Game Nerd's alter ego is 'Board James'.",
    correct_answer: true,
    incorrect_answers: ["False"]
  },
  {
    id: 16,
    category: "Entertainment: Japanese Anime & Manga",
    type: "boolean",
    difficulty: "medium",
    question:
      "The anime Attack on Titan was directed by Tetsur Araki, the same person who directed the anime Highschool of the Dead.",
    correct_answer: true,
    incorrect_answers: ["False"]
  },
  {
    id: 17,
    category: "Entertainment: Video Games",
    type: "boolean",
    difficulty: "easy",
    question:
      "The main playable character of the 2015 RPG 'Undertale' is a monster.",
    correct_answer: false,
    incorrect_answers: ["True"]
  },
  {
    id: 18,
    category: "Entertainment: Television",
    type: "boolean",
    difficulty: "medium",
    question:
      "In the TV series Red Dwarf, Kryten's full name is Kryten 2X4B-523P.",
    correct_answer: "True",
    incorrect_answers: ["False"]
  },
  {
    id: 19,
    category: "Entertainment: Japanese Anime & Manga",
    type: "boolean",
    difficulty: "easy",
    question:
      "In Pokemon, Ash's Pikachu refuses to go into a pokeball.",
    correct_answer: true,
    incorrect_answers: ["False"]
  },
  {
    id: 20,
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "'HTML' stands for Hypertext Markup Language.",
    correct_answer: true,
    incorrect_answers: ["False"]
  },
  {
    id: 21,
    category: "Animals",
    type: "boolean",
    difficulty: "easy",
    question: "A flock of crows is known as a homicide.",
    correct_answer: false,
    incorrect_answers: ["True"]
  },
  {
    id: 22,
    category: "Entertainment: Music",
    type: "boolean",
    difficulty: "medium",
    question: "EDM label Monstercat signs tracks instead of artists.",
    correct_answer: true,
    incorrect_answers: ["False"]
  },
  {
    id: 23,
    category: "Geography",
    type: "boolean",
    difficulty: "hard",
    question:
      "Switzerland has four national languages, English being one of them.",
    correct_answer: false,
    incorrect_answers: ["True"]
  },
  {
    id: 24,
    category: "History",
    type: "boolean",
    difficulty: "medium",
    question:
      "The Hundred Years' War was fought for more than a hundred years.",
    correct_answer: true,
    incorrect_answers: ["False"]
  },
  {
    id: 25,
    category: "Entertainment: Video Games",
    type: "boolean",
    difficulty: "medium",
    question: "In Rocket League, you can play Basketball.",
    correct_answer: true,
    incorrect_answers: ["False"]
  },
  {
    id: 26,
    category: "Entertainment: Video Games",
    type: "boolean",
    difficulty: "easy",
    question: "In Pokemon, Arbok evolves into Seviper.",
    correct_answer: false,
    incorrect_answers: ["True"]
  },
  {
    id: 27,
    category: "Animals",
    type: "boolean",
    difficulty: "easy",
    question: "The Killer Whale is considered a type of dolphin.",
    correct_answer: true,
    incorrect_answers: ["False"]
  },
  {
    id: 28,
    category: "Entertainment: Film",
    type: "boolean",
    difficulty: "hard",
    question:
      "The weapon Clint Eastwood uses in 'Dirty Harry' was a .44 Automag.",
    correct_answer: false,
    incorrect_answers: ["True"]
  },
  {
    id: 29,
    category: "Entertainment: Television",
    type: "boolean",
    difficulty: "easy",
    question:
      "In 'Doctor Who', the Doctor gets his TARDIS by stealing it.",
    correct_answer: true,
    incorrect_answers: ["False"]
  },
  {
    id: 30,
    category: "Entertainment: Japanese Anime & Manga",
    type: "boolean",
    difficulty: "medium",
    question:
      "In 'To Love-Ru: Darkness', Yami reveals her real name is Eve.",
    correct_answer: true,
    incorrect_answers: ["False"]
  }
];

export default questions;
