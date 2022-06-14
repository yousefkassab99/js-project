const handOptions = {
    "rock": "./images/r.png",
    "paper": "./images/p.png",
    "scissors": "./images/s.png"
  }
  
  let SCORE = 0;
  
  const pickUser = (hand) => {
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
  
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";
  
    // set user Image
    document.getElementById("userPickImage").src = handOptions[hand];
  
    pickComputer(hand);
  };
  
  const pickComputer= (hand) => {
      let hands = ["rock", "paper", "scissors"];
      let PC = hands[Math.floor(Math.random() * hands.length)];
      
      // set computer image 
      document.getElementById("computerPickImage").src = handOptions[PC]
      
      result(hand, PC);
  };
  
  const result = (user, PC) => {
    if (user == "paper" && PC == "scissors") {
      setDecision("BAD lUCK YOU LOSE!");
    }
    if (user == "paper" && PC == "rock") {
      setDecision("CONGRATULATIONS  YOU WIN!");
      setScore(SCORE + 1);
    }
    if (user == "paper" && PC == "paper") {
      setDecision("No one is a winner!");
    }
    if (user == "rock" && PC == "scissors") {
      setDecision("CONGRATULATIONS  YOU WIN!");
      setScore(SCORE + 1);
    }
    if (user == "rock" && PC == "paper") {
      setDecision("BAD lUCK YOU LOSE!");
    }
    if (user == "rock" && PC == "rock") {
      setDecision("No one is a winner!");
    }
    if (user == "scissors" && PC == "scissors") {
      setDecision("No one is a winner!");
    }
    if (user == "scissors" && PC == "rock") {
      setDecision("BAD lUCK YOU LOSE!");
    }
    if (user == "scissors" && PC == "paper") {
      setDecision("CONGRATULATIONS YOU WIN!");
      setScore(SCORE + 1);
    }
  };
  
  const restart = () => {
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
  
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
  }
  
  const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
  }
  
  const setScore = (newScore) => {
    SCORE = newScore;
    document.querySelector(".score h1").innerText = newScore;
  }
  
