
const teamName = document.getElementById("team");
const sportType = document.getElementById("sport");
const Year = document.getElementById("year"); 
const headCoachName = document.getElementById("head-coach");
const playersDropdownList = document.getElementById("players");
const playerCards = document.getElementById("player-cards");  

const eplFavoriteFootballTeam =  {
    team: "Manchester United",
    sport: "Football",
    teamYear: "2023-2024",
    isFaCupWinner: true,
    headCoach : {
        coachName:"Eric Tenhag",
        matches:10,
        Nationality:"Netheland",
    },
    players : [
        {
            name : "Matthijs De Ligt",
            position : "defender",
            isCaptain : false,
            number : 4,
            nickname : null,
        },
        {
            name : "Andre Onana",
            position : "goalkeeper",
            isCaptain : false,
            number : 24,
            nickname : null,
        },
        {
            name : "Casemiro",
            position : "midfielder",
            isCaptain : false,
            number : 18,
            nickname : "The Tank, Case",
        },
        {
            name : "Marcus Rashford",
            position : "forward",
            isCaptain : false,
            number : 10,
            nickname : "Rashy",
        },
        {
            name : "Antony",
            position : "forward",
            isCaptain : false,
            number : 21,
            nickname : "Ant",
        },
        {
            name : "Altay Bayindir",
            position : "goalkeeper",
            isCaptain : false,
            number : 1,
            nickname : null,
        },
        {
            name : "Noussair Mazraoui",
            position : "defender",
            isCaptain : false,
            number : 3,
            nickname : null,
        },
        {
            name : "Harry Maguire",
            position : "defender",
            isCaptain : false,
            number : 5,
            nickname : "Slabhead",
        },
        {
            name : "Victor Linderlof",
            position : "defender",
            isCaptain : false,
            number : 2,
            nickname : null,
        },
        {
            name : "Lisandro Martinez",
            position : "defender",
            isCaptain : false,
            number : 6,
            nickname : "The Butcher of Amsterdam",
        },
        {
            name : "Leny Yoro", 
            position : "defender",
            isCaptain : false,
            number : 15,
            nickname : null,
        },
        {
            name : "Diago Dalot",
            position : "defender",
            isCaptain : false,
            number : 20,
            nickname : null,    
        },
        {
            name : "Luke Show",
            position : "defender",
            isCaptain : false,
            number : 23,
            nickname : null,
        },
        { 
            name : "Harry Amass",
            position : "defender",
            isCaptain : false,
            number : 41,
            nickname : null,

        },
        {
            name : "Bruno Fernandes",
            position : "midfielder",
            isCaptain : true,
            number : 8,
            nickname : "The Magician, Bruno",
        },
        {
            name : "Tobby Collyer",
            position : "midfielder",
            isCaptain : false,
            number : 43,
            nickname : null,
        },
        {
            name : "Joshua Zirkzee",
            position : "forward",
            isCaptain : false,
            number : 9,
            nickname : null,
        },
        {
            name : "Alejandro Garnacho",
            position : "forward",
            isCaptain : false,
            number : 17,
            nickname : "Garna",
        },
        {
            name : "Christian Eriksen",
            position : "midfielder",
            isCaptain : false,
            number : 14,
            nickname : null,
        },
        {
            name : "Manuel Ugarte",
            position : "midfielder",
            isCaptain : false,
            number : 25,
            nickname : null
        },
        {
            name : "Kobbie Maino",
            position : "midfielder",
            isCaptain : false,
            number : 37,
            nickname : "Koby",
        },
        {
            name : "Ayden Heaven",
            position : "midfielder",
            isCaptain : false,
            number : 26,
            nickname : null,
        },
        {
            name : "Jonny Evans",
            position : "defender",
            isCaptain : false,
            number : 35,
            nickname : null,
        },
        {
            name : "Patrick Dorgu",
            position : "defender",
            isCaptain : false,
            number : 13,
            nickname : null,
        },
        {
            name : "Rasmus Hojlund",
            position : "forward",
            isCaptain : false,
            number : 9,
            nickname : null,
        },
        {
            name : "Amad Diallo",
            position : "forward",
            isCaptain : false,
            number : 16,
            nickname : null,
        },
        {
            name : "Tyrell Malacia",
            position : "defender",
            isCaptain : false,
            number : 12,
            nickname : null,
        },
        {
            name : "Jadon Sancho",
            position : "forward",
            isCaptain : false,
            number : 23,
            nickname : null,
        },

        ],
};
Object.freeze(eplFavoriteFootballTeam);

    const {coachName} = eplFavoriteFootballTeam.headCoach;
    const {team, sport, teamYear, players} = eplFavoriteFootballTeam;

    teamName.textContent = team;
    sportType.textContent = sport;
    Year.textContent = teamYear;
    headCoachName.textContent = coachName;

 const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({ name, position, number, isCaptain, nickname }) => {
        return `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      ` }
    )
    .join("");
};


playersDropdownList.addEventListener("change", (e) => {
    playerCards.innerHTML = "";
  
    switch (e.target.value) {
      case "nickname":
        setPlayerCards(players.filter((player) => player.nickname !== null));
        break;
      case "forward":
        setPlayerCards(players.filter((player) => player.position === "forward"));
        break;
      case "midfielder":
        setPlayerCards(
          players.filter((player) => player.position === "midfielder")
        );
        break;
      case "defender":
        setPlayerCards(
          players.filter((player) => player.position === "defender")
        );
        break;
      case "goalkeeper":
        setPlayerCards(
          players.filter((player) => player.position === "goalkeeper")
        );
        break;
  
  default:
  setPlayerCards();
    }
});   