export enum Screen {
  // Host Screens
  HOST_LOBBY = 'HOST_LOBBY',
  HOST_ROUND_INTRO = 'HOST_ROUND_INTRO',
  HOST_QUESTION = 'HOST_QUESTION',
  HOST_VOTING = 'HOST_VOTING',
  HOST_VOTING_COMPLETE = 'HOST_VOTING_COMPLETE',
  HOST_REVEAL_LIE = 'HOST_REVEAL_LIE',
  HOST_REVEAL_TRUTH = 'HOST_REVEAL_TRUTH',
  HOST_SCOREBOARD = 'HOST_SCOREBOARD',
  HOST_GAME_OVER = 'HOST_GAME_OVER',
  
  // Player Screens
  PLAYER_WAITING = 'PLAYER_WAITING',
  PLAYER_BLUFF_INPUT = 'PLAYER_BLUFF_INPUT',
  PLAYER_VOTING = 'PLAYER_VOTING',
  PLAYER_RESULTS = 'PLAYER_RESULTS',
  PLAYER_FEEDBACK = 'PLAYER_FEEDBACK',
  PLAYER_LIE_UPVOTE = 'PLAYER_LIE_UPVOTE',
}

export const SCREEN_LABELS: Record<Screen, string> = {
  [Screen.HOST_LOBBY]: "Host: Lobby",
  [Screen.HOST_ROUND_INTRO]: "Host: Round Intro",
  [Screen.HOST_QUESTION]: "Host: Question",
  [Screen.HOST_VOTING]: "Host: Voting",
  [Screen.HOST_VOTING_COMPLETE]: "Host: Vote Done",
  [Screen.HOST_REVEAL_LIE]: "Host: Reveal Lie",
  [Screen.HOST_REVEAL_TRUTH]: "Host: Reveal Truth",
  [Screen.HOST_SCOREBOARD]: "Host: Scoreboard",
  [Screen.HOST_GAME_OVER]: "Host: Game Over",
  [Screen.PLAYER_WAITING]: "Player: Waiting",
  [Screen.PLAYER_BLUFF_INPUT]: "Player: Input",
  [Screen.PLAYER_VOTING]: "Player: Voting",
  [Screen.PLAYER_RESULTS]: "Player: Look at TV",
  [Screen.PLAYER_FEEDBACK]: "Player: Feedback",
  [Screen.PLAYER_LIE_UPVOTE]: "Player: Upvote Lies",
};