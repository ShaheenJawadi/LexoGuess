# LexoGuess

LexoGuess is a clone of the popular word game  [Wordle](https://www.nytimes.com/games/wordle/index.html). This project is implemented using Next.js, and Redux.

## Features

- Wordle Gameplay: Enjoy the classic Wordle experience of guessing a hidden word within a limited number of attempts.
- Keyboard layout: Users can switch between QWERTY and AZERTY keyboard layouts.

## How it Works

1. The application first uses the "[random-word-api.herokuapp.com](https://random-word-api.herokuapp.com/home)" to fetch 100 random words.
2. One word is then randomly selected and stored in the state.
3. When a user enters a word, the application uses "[api.dictionaryapi.dev](https://dictionaryapi.dev/)" to check if it is a valid word.

## Getting Started

Follow these steps to run LexoGuess locally on your machine:

 1. Clone the repository:
 
```Bash
git clone https://github.com/ShaheenJawadi/LexoGuess.git
```
2. Install dependencies:
```Bash
cd LexoGuess
npm install
``` 
or
```Bash
cd LexoGuess
yarn
```
3. Start the development server:

```Bash
npm run dev
```
or
```Bash
yarn dev
```
 
4. Open your browser and navigate to http://localhost:3000 to play LexoGuess!

## Customization

LexoGuess allows you to customize your experience in the following ways:

- Keyboard Layout: Switch between QWERTY and AZERTY keyboard layouts using the provided toggle button.

## Word Generation

LexoGuess fetches 100 random words from "[random-word-api.herokuapp.com](https://random-word-api.herokuapp.com/home)"during initialization. It then randomly selects one word to be the target word


## Word Validation

To ensure entered words are valid, LexoGuess uses the "[api.dictionaryapi.dev](https://dictionaryapi.dev/)" API to check the validity of each guessed word.



## Contributing

We welcome contributions to enhance LexoGuess and make it an even more enjoyable game. Feel free to open issues, submit pull requests, or provide suggestions to help us improve!

## License

This project is licensed under the  [`MIT License`](https://github.com/ShaheenJawadi/LexoGuess/blob/main/LICENSE).


## Acknowledgments

- LexoGuess was developed by [Shaheen Jawadi](https://github.com/shaheenjawadi) as a fun and educational project.

- Special thanks to the creators of [`Wordle`](https://www.nytimes.com/games/wordle/index.html) and the contributors to the used APIs.

Feel free to contribute and enjoy playing LexoGuess!
