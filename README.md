# Tic-Tac-Toe
### Abstract:
This project is a simple browser game that allows two players to play the classic game "tic-tac-toe". Each player places an emoji token on their chosen spot, here shown in the number keys format on a keyboard. There are inputs to personalize player1 and player2 so that scores and banner communications provide given nicknames.

### Installation Instructions:
* Clone down the repo using GitHub. GitHub provides a link which can be used in the terminal after typing github clone <cloned link from GitHub>. 
* Enter the respective directory in the terminal. Then type open index.html to open the website in an Internet browser.​

### Preview of Game:

### Context:
I am on week six of the Turing coding bootcamp program. This is the first game I have made. I thought it was a very interesting experience to start from nothing. There were no provided files or repo to fork and clone to my machine. Guidelines were more general and we were not given code iterations to follow. The total time allowance for the project was about 7 days.

### Contributors:
I am the sole contributor:
[El Brewster](https://github.com/ElBrewster)

### Learning Goals:
Solidify and demonstrate your understanding of:
* DRY JavaScript
* event delegation to handle similar event listeners
* Understand the difference between the data model and how the data is displayed on the DOM
* Iterate through/filter DOM elements using for loops
* Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside “answer” to a logical challenge

# Technology Used:
The HTML, CSS and JavaScript for this application was written in VS Code and pushed into GitHub.

### Wins + Challenges:
I was really excited to make a small piece of architecture and see it through to the final stages. My initial idea to solve the problem "How do I make tic-tac-toe playable using a player class, game class and main.js file?" was to create a game array and then to have each player take numbers from the game array and store them in their own array. My hope was that by removing these numbers(positions) a player could no longer select that position. This stayed true for my data model from beginning to end because of the way I designed my architecture at the begining. This was really satisfying! I call it a win.

I realized late in the project I was struggling to test my functions as I was coding, preventing me from implementing dry JavaScript. With the help of folks in my cohort I was able to gain a better understanding of using dev tools to check for functionality. Once I got this down things went a lot more smoothly and coding got a lot more fun.

I made a personal goal in my tic-tac-toe game to think about accessibility in games in general. The MDN website's page on the <button> tag (section "Proximity") discusses margins around buttons for folks who have hand tremors and I chose to include this thinking in my game by including margins on the player board. I also made some functionality for tabbing through buttons to select with "enter" instead of cursor. While I don't think I was fully able to implement these accessibility features, I am happy that I started this conversation with myself and implemented partial accessibility features in the time allotted. This felt to me like a success.
