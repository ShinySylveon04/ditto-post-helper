export const createPostTitle = ({ dittoNature, deposit }) => {
  const genderLetter = deposit.gender === "Male" ? "M" : "F";

  return `[${dittoNature}] ${deposit.species}, ${genderLetter}, ${deposit.level}`;
};

export const createPostText = ({ dittoNature, player, deposit }) => {

  return `- Ditto Requested: ${dittoNature}
 
 ---
 
 - Pokémon Deposited: ${deposit.species}
 - Nickname: ${deposit.nickname}
 - Pokeball: ${deposit.ball}
 - Gender: ${deposit.gender}
 - Level: ${deposit.level}
 
 ---
 
 - Home name: ${player.inGameName}
 - GTS Message: ${player.gtsMessage}
 - Game Language: ${player.language}`;
};
