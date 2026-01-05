import React, { useState } from 'react';
import { Screen, SCREEN_LABELS } from './types';
import { 
  HostLobby, HostRoundIntro, HostQuestion, HostVoting, HostVotingComplete, 
  HostReveal, HostScoreboard, HostGameOver 
} from './components/HostScreens';
import { 
  PlayerInput, PlayerVoting, PlayerResults, PlayerFeedback, PlayerLieUpvote, PlayerWaiting 
} from './components/PlayerScreens';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.HOST_LOBBY);

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.HOST_LOBBY: return <HostLobby />;
      case Screen.HOST_ROUND_INTRO: return <HostRoundIntro />;
      case Screen.HOST_QUESTION: return <HostQuestion />;
      case Screen.HOST_VOTING: return <HostVoting />;
      case Screen.HOST_VOTING_COMPLETE: return <HostVotingComplete />;
      case Screen.HOST_REVEAL_LIE: return <HostReveal type="lie" />;
      case Screen.HOST_REVEAL_TRUTH: return <HostReveal type="truth" />;
      case Screen.HOST_SCOREBOARD: return <HostScoreboard />;
      case Screen.HOST_GAME_OVER: return <HostGameOver />;
      case Screen.PLAYER_WAITING: return <PlayerWaiting />;
      case Screen.PLAYER_BLUFF_INPUT: return <PlayerInput />;
      case Screen.PLAYER_VOTING: return <PlayerVoting />;
      case Screen.PLAYER_RESULTS: return <PlayerResults />;
      case Screen.PLAYER_FEEDBACK: return <PlayerFeedback />;
      case Screen.PLAYER_LIE_UPVOTE: return <PlayerLieUpvote />;
      default: return <HostLobby />;
    }
  };

  return (
    <div className="w-full h-screen bg-background-dark overflow-hidden flex flex-col font-display text-text-light selection:bg-primary selection:text-text-dark">
      {/* Grain Overlay used across all screens */}
      <div className="grain-overlay"></div>
      
      {/* Main Content Area */}
      <div className="flex-grow w-full h-full relative overflow-y-auto">
        {renderScreen()}
      </div>

      {/* Dev Navigation Bar - Sticky Footer */}
      <div className="w-full bg-black/80 backdrop-blur-md border-t border-white/10 p-2 z-50 flex items-center gap-4 overflow-x-auto">
        <span className="text-xs font-bold text-primary uppercase whitespace-nowrap px-2">Dev Controls</span>
        {Object.values(Screen).map((screen) => (
          <button
            key={screen}
            onClick={() => setCurrentScreen(screen)}
            className={`px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wide whitespace-nowrap transition-all ${
              currentScreen === screen 
                ? 'bg-primary text-black shadow-hard-sm' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {SCREEN_LABELS[screen].replace(/Host: |Player: /, '')}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;