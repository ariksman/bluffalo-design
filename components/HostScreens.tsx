import React from 'react';

// --- HOST LOBBY ---
export const HostLobby = () => (
  <div className="w-full h-full max-w-[1400px] mx-auto px-8 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-8 z-10">
    <div className="lg:col-span-4 flex flex-col justify-center h-full pb-10">
      <div className="bg-card-cream text-ink-dark rounded-xl border-4 border-black shadow-hard-lg p-8 flex flex-col items-center text-center gap-6 relative transform rotate-[-1deg]">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-4 h-12 bg-error-red rounded-full border-2 border-black shadow-sm z-20"></div>
        <div className="w-full">
          <p className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-1">Join the Party at</p>
          <p className="font-heading text-3xl text-accent-blue underline decoration-4 underline-offset-4">play.bluff.com</p>
        </div>
        <div className="w-full bg-white p-4 rounded-lg border-2 border-black">
          <div className="w-full aspect-square bg-white flex items-center justify-center overflow-hidden rounded relative">
            <div className="absolute inset-0 bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://play.bluff.com')] bg-cover bg-center rendering-pixelated"></div>
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
          </div>
        </div>
        <div className="w-full">
          <p className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-2">Room Code</p>
          <div className="bg-ink-dark text-primary px-6 py-4 rounded-lg border-2 border-black shadow-hard-sm transform hover:scale-105 transition-transform">
            <p className="font-heading text-6xl tracking-widest">XYZA</p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center gap-2 text-white/60">
        <span className="material-symbols-outlined text-lg">info</span>
        <p className="text-sm font-medium">Use your phone as a controller</p>
      </div>
    </div>
    <div className="lg:col-span-8 flex flex-col h-full pb-6">
      <div className="flex justify-between items-end mb-6 border-b-4 border-white/10 pb-4">
        <div>
          <h2 className="font-heading text-5xl text-white">Players</h2>
          <p className="text-primary font-bold tracking-wider text-lg mt-1">WAITING FOR PLAYERS...</p>
        </div>
        <div className="bg-white/10 px-4 py-2 rounded-lg border-2 border-white/20 backdrop-blur-sm">
          <span class="font-heading text-2xl text-white">3 / 8</span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto pr-2 custom-scrollbar flex-1 content-start">
         {[
           { name: "ALICE", emoji: "🤠", host: true, ready: true },
           { name: "BOB", emoji: "🥸", host: false, ready: true },
           { name: "CHARLIE", emoji: "👽", host: false, ready: true },
         ].map((p, i) => (
            <div key={i} className="group bg-card-cream rounded-lg border-2 border-black shadow-hard hover:-translate-y-1 transition-all duration-200 p-3 flex flex-col items-center gap-3 relative overflow-hidden">
               <div className={`absolute top-2 right-2 w-3 h-3 ${p.ready ? 'bg-success-green' : 'bg-gray-400'} rounded-full border border-black`}></div>
               <div className={`w-20 h-20 rounded-full border-2 border-black ${i===0?'bg-accent-blue':i===1?'bg-primary':'bg-error-red'} shadow-sm flex items-center justify-center text-5xl select-none`}>
                  {p.emoji}
               </div>
               <div className="text-center w-full">
                  <p className="font-heading text-xl text-ink-dark truncate">{p.name}</p>
                  {p.host ? (
                     <div className="inline-block bg-ink-dark text-white text-[10px] font-bold px-2 py-0.5 rounded border border-black mt-1">HOST</div>
                  ) : (
                     <p className="text-xs text-gray-500 font-bold mt-1">READY</p>
                  )}
               </div>
            </div>
         ))}
         {[...Array(5)].map((_,i) => (
             <div key={i} className="bg-white/5 border-2 border-dashed border-white/20 rounded-lg p-3 flex flex-col items-center justify-center gap-2 min-h-[160px] opacity-40">
                 <span className="material-symbols-outlined text-white/20 text-4xl">person_add</span>
             </div>
         ))}
      </div>
      <div className="mt-auto pt-6 flex justify-center w-full">
        <button className="group relative inline-flex items-center justify-center px-16 py-5 overflow-hidden font-heading text-3xl font-medium tracking-tighter text-ink-dark bg-primary rounded-lg border-4 border-black shadow-hard-lg hover:translate-y-1 hover:shadow-hard transition-all duration-200 animate-pulse-hard">
           <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-96 group-hover:h-96 opacity-10"></span>
           <span className="relative flex items-center gap-3">
              START GAME
              <span className="material-symbols-outlined" style={{ fontSize: '36px', strokeWidth: '4px' }}>play_arrow</span>
           </span>
        </button>
      </div>
    </div>
  </div>
);

// --- HOST ROUND INTRO ---
export const HostRoundIntro = () => (
    <div className="bg-background-dark font-display text-cream overflow-hidden h-screen w-screen selection:bg-primary selection:text-black">
        <div className="fixed inset-0 z-0 opacity-[0.15] pointer-events-none mix-blend-overlay">
            <svg height="100%" width="100%">
                <filter id="noise">
                    <feTurbulence baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" type="fractalNoise"></feTurbulence>
                </filter>
                <rect filter="url(#noise)" height="100%" width="100%"></rect>
            </svg>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[10%] left-[5%] animate-float" style={{ animationDelay: '0s' }}>
                <div className="w-24 h-24 rounded-full border-4 border-black bg-primary shadow-hard opacity-90"></div>
            </div>
            <div className="absolute bottom-[15%] right-[10%] animate-float" style={{ animationDelay: '2s' }}>
                <div className="w-32 h-32 rounded-lg rotate-12 border-4 border-black bg-accent-blue shadow-hard opacity-90"></div>
            </div>
            <div className="absolute top-[20%] right-[20%] opacity-10 rotate-12">
                <span className="material-symbols-outlined text-[15rem]">smart_toy</span>
            </div>
            <div className="absolute bottom-[10%] left-[15%] opacity-10 -rotate-12">
                <span className="material-symbols-outlined text-[12rem]">extension</span>
            </div>
        </div>
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center p-8">
            <div className="w-full max-w-5xl flex flex-col items-center justify-center h-full">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider text-cream text-shadow-hard-sm mb-6">
                    Round 3
                </h1>
                <div className="relative transform -rotate-2 hover:scale-[1.02] transition-transform duration-300">
                    <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-lg bg-black/40 blur-sm"></div>
                    <div className="bg-primary border-4 border-black shadow-hard px-16 py-12 md:px-24 md:py-16 rounded-lg relative z-10">
                        <h2 className="text-6xl md:text-8xl font-black text-background-dark leading-[0.85] text-center uppercase tracking-tighter">
                            Get Ready<br />to Bluff!
                        </h2>
                    </div>
                </div>
                <div className="absolute bottom-12 right-12 flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary animate-spin">hourglass_top</span>
                        <span className="font-bold uppercase tracking-wider text-sm md:text-lg text-cream/80">Starting in...</span>
                    </div>
                    <span className="font-black text-4xl text-primary text-shadow-hard-sm">03s</span>
                </div>
            </div>
        </div>
    </div>
);

// --- HOST QUESTION ---
export const HostQuestion = () => (
    <div className="flex flex-col h-full w-full">
        <header className="flex-none px-12 py-6 flex items-start justify-between z-10 relative">
            <div className="flex items-center pt-2">
                <div className="bg-accent-blue text-white font-impact text-3xl tracking-wider px-8 py-3 rounded-sm shadow-hard -rotate-1 border-2 border-black transform transition-transform hover:rotate-0">
                    WEIRD HISTORY
                </div>
            </div>
            <div className="flex flex-col items-center relative -mt-2">
                <div className="relative flex items-center justify-center bg-primary rounded-full size-28 shadow-hard border-4 border-black">
                    <span className="font-impact text-5xl text-text-ink mt-1 text-black">45</span>
                    <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-black/30 animate-[spin_12s_linear_infinite]"></div>
                </div>
                <div className="bg-black text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 -mt-3 relative z-10 rounded-full shadow-md">
                    Time Remaining
                </div>
            </div>
            <div className="flex flex-col items-end gap-3 pt-2">
                <div className="bg-white/5 backdrop-blur-md text-text-light px-5 py-3 rounded-xl border-2 border-white/10 flex items-center gap-4 shadow-hard-sm">
                    <span className="text-xs font-bold opacity-70 uppercase tracking-widest text-white">Room Code</span>
                    <span className="text-3xl font-impact tracking-widest text-primary drop-shadow-md">XKCD</span>
                </div>
            </div>
        </header>
        <main className="flex-grow flex items-center justify-center px-12 pb-4 relative z-10 w-full">
            <div className="absolute top-0 right-20 text-white/5 font-impact text-[200px] leading-none select-none pointer-events-none rotate-12">?</div>
            <div className="absolute bottom-20 left-20 text-white/5 font-impact text-[150px] leading-none select-none pointer-events-none -rotate-12">!</div>
            <div className="relative w-full max-w-4xl mx-auto perspective-1000">
                <div className="absolute inset-0 bg-accent-blue rounded-xl transform rotate-3 translate-y-4 translate-x-4 border-2 border-black/50 opacity-40"></div>
                <div className="absolute inset-0 bg-primary rounded-xl transform -rotate-2 translate-y-2 translate-x-2 border-2 border-black shadow-hard"></div>
                <div className="relative bg-card-cream rounded-xl border-4 border-black shadow-hard-xl flex flex-col overflow-hidden">
                    <div className="h-4 bg-black/10 w-full border-b-2 border-black/10"></div>
                    <div className="p-12 md:p-16 flex flex-col items-center text-center justify-center min-h-[380px] gap-10">
                        <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-1 rounded-full font-bold uppercase text-sm tracking-widest mb-2 shadow-hard-sm transform -rotate-1">
                            <span className="text-primary material-symbols-outlined text-base">help</span>
                            Question 1 of 10
                        </div>
                        <h2 className="text-black text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight max-w-4xl drop-shadow-sm">
                            In 18th Century France, what was it specifically <span className="relative inline-block px-2 mx-1 z-10 before:absolute before:inset-0 before:bg-primary before:-skew-y-2 before:-z-10 border-b-4 border-black">illegal</span> to name your pig?
                        </h2>
                        <div className="flex items-center gap-4 opacity-30 w-full justify-center">
                            <div className="h-0.5 bg-black w-12 rounded-full"></div>
                            <span className="material-symbols-outlined font-bold text-2xl text-black">edit_note</span>
                            <div className="h-0.5 bg-black w-12 rounded-full"></div>
                        </div>
                        <p className="text-black/80 text-xl md:text-2xl font-semibold italic font-display">
                            "Write a convincing lie to fool your friends!"
                        </p>
                    </div>
                </div>
            </div>
        </main>
        <footer className="flex-none bg-black/40 backdrop-blur-md border-t border-white/10 py-6 px-12 z-20">
            <div className="flex flex-col gap-6 max-w-7xl mx-auto w-full">
                <div className="flex flex-col gap-4">
                    <h3 className="text-primary font-impact text-3xl tracking-wide uppercase drop-shadow-md text-left">PLAYER SUBMISSIONS</h3>
                    <div className="flex items-center justify-center gap-8 w-full mt-2">
                         {[1,2,3].map(i => (
                             <div key={i} className="w-16 h-16 rounded-full bg-success-green border-4 border-black shadow-hard-sm flex items-center justify-center transform transition-all hover:scale-105">
                                 <span className="material-symbols-outlined text-white text-4xl font-bold">check</span>
                             </div>
                         ))}
                         {[1,2,3].map(i => (
                             <div key={i} className="w-16 h-16 rounded-full bg-transparent border-4 border-white/20"></div>
                         ))}
                    </div>
                </div>
            </div>
        </footer>
    </div>
);

// --- HOST VOTING ---
export const HostVoting = () => (
    <div className="flex flex-col h-full w-full max-w-[1920px] mx-auto p-6 md:p-12 z-10 relative">
        <header className="flex justify-between items-start mb-8">
            <div className="flex flex-col gap-2">
                <h1 className="text-text-light text-3xl md:text-5xl font-black uppercase leading-tight tracking-tight drop-shadow-lg max-w-4xl mt-4">
                    What was the original name of the hamburger?
                </h1>
            </div>
            <div className="flex flex-col items-center justify-center bg-background-dark border-4 border-primary rounded-full w-24 h-24 shadow-hard flex-shrink-0 relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/10 animate-pulse"></div>
                <span className="text-primary text-4xl font-black z-10">24</span>
                <span className="text-primary text-[10px] font-bold uppercase tracking-widest z-10">Secs</span>
            </div>
        </header>
        <main className="flex-grow flex items-center justify-center w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {["Liberty Steak", "Salisbury Sandwich", "Hamburg Steak", "Beef Pattie", "Ground Round", "Flat Meat", "Meat Puck", "Breaded Beef"].map((ans, i) => (
                    <div key={i} className="bg-card-cream text-text-dark rounded-xl p-6 md:p-8 flex flex-col items-center justify-center text-center min-h-[180px] shadow-hard border-2 border-black transform transition hover:-translate-y-1 hover:shadow-hard-lg cursor-default">
                        <span className="text-2xl md:text-3xl font-bold leading-tight">{ans}</span>
                    </div>
                ))}
            </div>
        </main>
        <footer className="mt-8 flex flex-col gap-4">
            <div className="w-full bg-black/20 border-2 border-black/20 rounded-2xl p-6 flex items-center justify-center gap-4 md:gap-8 shadow-inner backdrop-blur-sm">
                {[...Array(5)].map((_, i) => (
                    <div key={`voted-${i}`} className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-success-green border-4 border-black shadow-hard flex items-center justify-center relative overflow-hidden transition-transform hover:-translate-y-1">
                        <div className="absolute top-3 right-3 w-3 h-3 bg-white/40 rounded-full blur-[2px]"></div>
                    </div>
                ))}
                {[...Array(3)].map((_, i) => (
                    <div key={`waiting-${i}`} className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-700/50 border-4 border-gray-600 shadow-inner flex items-center justify-center opacity-60"></div>
                ))}
            </div>
        </footer>
    </div>
);

// --- HOST VOTING COMPLETE ---
export const HostVotingComplete = () => (
    <div className="flex flex-col h-full w-full max-w-[1920px] mx-auto p-6 md:p-12 z-10 relative">
        <header className="flex justify-between items-start mb-8 opacity-50 grayscale transition-all duration-500">
            <div className="flex flex-col gap-2">
                <h1 className="text-text-light text-2xl md:text-4xl font-black uppercase leading-tight tracking-tight drop-shadow-lg max-w-4xl mt-4">
                    What was the original name of the hamburger?
                </h1>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-700 border-4 border-gray-600 rounded-full w-20 h-20 shadow-hard flex-shrink-0 relative overflow-hidden">
                <span className="material-symbols-outlined text-white text-4xl">lock</span>
            </div>
        </header>
        <main className="flex-grow flex flex-col items-center justify-center w-full relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-[600px] h-[600px] border-[20px] border-primary rounded-full animate-[spin_10s_linear_infinite] border-dashed"></div>
            </div>
            <div className="flex flex-col items-center justify-center text-center transform transition hover:scale-105 duration-300 cursor-default z-20">
                <div className="bg-primary px-8 py-2 transform -rotate-2 shadow-hard mb-6 border-4 border-black">
                    <span className="text-black text-xl md:text-2xl font-black uppercase tracking-[0.2em]">Voting Complete</span>
                </div>
                <h2 className="text-white text-7xl md:text-9xl font-black uppercase tracking-tighter shadow-black drop-shadow-[8px_8px_0_rgba(0,0,0,1)] leading-none mb-4">
                    ANSWERS<br />ARE IN!
                </h2>
                <div className="bg-accent-blue px-12 py-4 rounded-full shadow-hard-lg border-4 border-black mt-8 animate-bounce">
                    <span className="text-white text-2xl md:text-4xl font-bold uppercase tracking-wide">Get Ready For The Reveal</span>
                </div>
            </div>
        </main>
        <footer className="mt-8 flex flex-col gap-4">
            <div className="w-full bg-black/20 border-2 border-black/20 rounded-2xl p-6 flex items-center justify-center gap-4 md:gap-6 shadow-inner backdrop-blur-sm">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-success-green border-4 border-black shadow-hard flex items-center justify-center relative overflow-hidden">
                        <span className="material-symbols-outlined text-black font-bold text-2xl">check</span>
                    </div>
                ))}
            </div>
        </footer>
    </div>
);

// --- HOST REVEAL ---
export const HostReveal = ({ type }: { type: 'lie' | 'truth' }) => (
    <div className="flex flex-col h-full w-full">
        <header className="w-full pt-8 pb-4 px-12 z-10 flex flex-col items-center text-center">
            <div className="bg-black/20 backdrop-blur-sm rounded-full px-6 py-2 mb-4 border border-white/10 shadow-hard-sm">
                <p className="text-primary font-bold tracking-widest text-sm uppercase">Question 3 of 10</p>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-lg max-w-5xl leading-tight">
                Which animal has rectangular pupils?
            </h1>
        </header>
        <main className="flex-1 w-full flex flex-col items-center justify-center relative px-8 z-10">
            <div className="relative w-full max-w-[480px]">
                <div className={`absolute -inset-4 ${type === 'lie' ? 'bg-error-red/20' : 'bg-success-green/20'} blur-2xl rounded-full z-[-1] animate-pulse`}></div>
                <div className="bg-card-cream text-gray-900 rounded-xl p-8 h-[500px] flex flex-col items-center justify-between shadow-hard border-[5px] border-gray-900 relative overflow-visible">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex -space-x-4">
                        {type === 'lie' ? (
                            <>
                                <div className="w-16 h-16 rounded-full border-4 border-background-dark bg-green-600 flex items-center justify-center text-white font-bold shadow-md z-30 transition-transform hover:-translate-y-1">
                                    <span className="text-4xl filter drop-shadow-md">🤡</span>
                                </div>
                                <div className="w-16 h-16 rounded-full border-4 border-background-dark bg-pink-500 flex items-center justify-center text-white font-bold shadow-md z-20 transition-transform hover:-translate-y-1">
                                    <span className="text-4xl filter drop-shadow-md">🐷</span>
                                </div>
                                <div className="w-16 h-16 rounded-full border-4 border-background-dark bg-yellow-600 flex items-center justify-center text-white font-bold shadow-md z-10 transition-transform hover:-translate-y-1">
                                    <span className="text-4xl filter drop-shadow-md">🦞</span>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="w-16 h-16 rounded-full border-4 border-background-dark bg-purple-600 flex items-center justify-center text-white font-bold shadow-md z-20 transition-transform hover:-translate-y-1">
                                    <span className="text-4xl filter drop-shadow-md">👽</span>
                                </div>
                                <div className="w-16 h-16 rounded-full border-4 border-background-dark bg-blue-500 flex items-center justify-center text-white font-bold shadow-md z-10 transition-transform hover:-translate-y-1">
                                    <span className="text-4xl filter drop-shadow-md">🤖</span>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="h-8"></div>
                    <div className="w-full flex-1 flex flex-col items-center justify-center text-center gap-2">
                        <p className="font-heading text-7xl text-gray-900 leading-none tracking-tight">{type === 'lie' ? 'A PIG' : 'A GOAT'}</p>
                    </div>
                    {type === 'lie' ? (
                        <div className="w-full pt-6 border-t-2 border-gray-300 border-dashed">
                            <p className="text-xs uppercase font-bold text-gray-500 text-center mb-2 tracking-widest">Answer written by</p>
                            <div className="flex items-center justify-center gap-3 bg-white/50 py-2 px-4 rounded-lg mx-auto w-fit">
                                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white border border-gray-300 shadow-sm">
                                    <span className="text-lg">🦁</span>
                                </div>
                                <p className="text-xl font-heading text-gray-800">Mike</p>
                            </div>
                        </div>
                    ) : (
                        <div className="pb-8">
                            <div className="flex items-center justify-center gap-2 text-success-green/80">
                                <span className="material-symbols-outlined text-3xl">check_circle</span>
                                <span className="font-bold uppercase tracking-wider text-sm">Correct Answer</span>
                            </div>
                        </div>
                    )}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${type === 'lie' ? 'animate-stamp' : 'animate-stamp-truth'} z-50`}>
                        <div className={`border-[8px] ${type === 'lie' ? 'border-error-red text-error-red' : 'border-success-green text-success-green'} px-8 py-2 rounded-lg bg-white/20 backdrop-blur-[2px] shadow-xl`}>
                            <p className="font-heading text-7xl drop-shadow-md">{type === 'lie' ? 'LIE' : 'TRUTH'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer className="w-full p-6 z-10">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-4">
                <div className="flex items-end justify-between">
                    <div className="flex gap-4 items-center">
                        <div className="flex -space-x-2 bg-black/30 p-2 pr-6 rounded-lg border border-white/5 backdrop-blur-md shadow-hard-sm">
                            <div className="flex items-center gap-3 px-3">
                                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xs border border-white/20">
                                    <span className="text-base">🦁</span>
                                </div>
                                <div className="flex flex-col leading-none">
                                    <span className="text-[10px] text-gray-400 font-bold uppercase">Mike</span>
                                    <span className="text-primary font-heading text-lg">1,250</span>
                                </div>
                            </div>
                            <div className="w-px h-8 bg-white/10"></div>
                            <div className="flex items-center gap-3 px-3">
                                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xs border border-white/20">
                                    <span className="text-base">🦄</span>
                                </div>
                                <div className="flex flex-col leading-none">
                                    <span className="text-[10px] text-gray-400 font-bold uppercase">Jess</span>
                                    <span className="text-white font-heading text-lg">890</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <span className="text-white/80 group-hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">
                            {type === 'lie' ? 'Reveal Truth' : 'Next Question'}
                        </span>
                        <div className="bg-primary border-b-4 border-yellow-700 active:border-b-0 active:translate-y-1 text-black w-12 h-12 rounded-lg flex items-center justify-center shadow-lg transition-all">
                            <span className="material-symbols-outlined text-2xl font-bold">arrow_forward</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
);

// --- HOST SCOREBOARD ---
const players = [
    { rank: 1, name: "Sarah Jenkins", score: 14250, scoreChange: 1200, correctAnswers: 12, emoji: "🤪" },
    { rank: 2, name: "Mike Ross", score: 12100, scoreChange: 0, emoji: "🤠" },
    { rank: 3, name: "Jessica P.", score: 9850, scoreChange: -200, emoji: "🥸" },
    { rank: 4, name: "David K.", score: 6400, scoreChange: 0, emoji: "🫠" },
];

export const HostScoreboard = () => (
    <div className="relative z-10 flex h-full w-full flex-col max-w-7xl mx-auto p-4 md:p-8 lg:p-10">
        <header className="flex flex-col items-center justify-center shrink-0 mb-4 md:mb-6">
            <div className="bg-primary px-6 py-1.5 border-2 border-black shadow-hard transform -rotate-2 mb-3">
                <h2 className="text-black text-sm md:text-lg font-black uppercase tracking-[0.2em]">Current Standings</h2>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)] text-center leading-none">
                Scoreboard
            </h1>
        </header>
        <main className="flex-1 w-full flex flex-col items-center overflow-y-auto pb-4 px-4 md:px-6 pt-8">
            <div className="w-full max-w-4xl flex flex-col gap-4 md:gap-5">
                {players.map(player => {
                    if (player.rank > 3) {
                        return (
                            <div key={player.rank} className="group relative flex items-center justify-between bg-white/10 p-2 md:p-3 rounded-xl border border-white/20 backdrop-blur-sm opacity-60 scale-[0.98]">
                                <div className="absolute -left-2 -top-2 bg-gray-700 border border-white/20 rounded-full w-8 h-8 flex items-center justify-center shadow-sm z-20">
                                    <span className="font-bold text-white text-sm">{player.rank}</span>
                                </div>
                                <div className="flex items-center gap-4 pl-4">
                                    <div className="relative shrink-0">
                                        <div className="h-10 w-10 rounded-full border-2 border-gray-400 bg-white/90 flex items-center justify-center">
                                            <span className="text-xl md:text-2xl">{player.emoji}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-white text-lg font-bold uppercase">{player.name}</h3>
                                </div>
                                <div className="flex flex-col items-end pr-2">
                                    <span className="text-xl font-bold text-white/80">{player.score.toLocaleString()}</span>
                                </div>
                            </div>
                        );
                    }

                    return (
                        <div
                            key={player.rank}
                            className={`group relative flex items-center justify-between rounded-xl border-2 border-black shadow-hard transition-all hover:-translate-y-1
                                ${player.rank === 1 ? 'bg-primary p-3 md:p-5 hover:shadow-hard-lg' : 'bg-game-cream p-3 md:p-4'}
                                ${player.rank === 2 ? 'opacity-100' : ''}
                                ${player.rank === 3 ? 'opacity-95' : ''}
                            `}
                        >
                            <div
                                className={`absolute -left-3 -top-3 border-2 border-black rounded-full w-10 h-10 flex items-center justify-center shadow-hard-sm z-20
                                    ${player.rank === 1 ? 'md:-left-4 md:-top-4 md:w-12 md:h-12 bg-white' : ''}
                                    ${player.rank === 2 ? 'bg-gray-200' : ''}
                                    ${player.rank === 3 ? 'bg-[#cd7f32]' : ''}
                                `}
                            >
                                {player.rank === 1 ? (
                                    <span className="material-symbols-outlined text-black font-black text-xl md:text-2xl">emoji_events</span>
                                ) : (
                                    <span className={`font-black text-lg ${player.rank === 3 ? 'text-white' : 'text-black'}`}>{player.rank}</span>
                                )}
                            </div>
                            <div className="flex items-center gap-4 md:gap-6 pl-2">
                                <div className="relative shrink-0">
                                    <div
                                        className={`rounded-full border-4 flex items-center justify-center
                                            ${player.rank === 1 ? 'h-14 w-14 md:h-20 md:w-20 border-black bg-white shadow-sm' : 'h-12 w-12 md:h-16 md:w-16 border-gray-800 bg-white'}
                                        `}
                                    >
                                        <span className={`text-2xl ${player.rank === 1 ? 'md:text-5xl' : 'md:text-4xl'}`}>{player.emoji}</span>
                                    </div>
                                    {player.rank === 1 && (
                                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] md:text-xs font-bold px-2 py-0.5 rounded-full border border-white/20">LEADER</div>
                                    )}
                                </div>
                                <div className="flex flex-col">
                                    <h3
                                        className={`font-black uppercase leading-none
                                            ${player.rank === 1 ? 'text-black text-xl md:text-3xl tracking-tight' : 'text-game-blue text-lg md:text-2xl'}
                                        `}
                                    >
                                        {player.name}
                                    </h3>
                                    {player.rank === 1 ? (
                                        <p className="text-black/70 text-sm md:text-lg font-bold">{player.correctAnswers} Correct Answers</p>
                                    ) : (
                                        <p className="text-gray-500 text-xs md:text-sm font-bold uppercase tracking-wide">Rank #{player.rank}</p>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <span
                                    className={`font-black tracking-tighter
                                        ${player.rank === 1 ? 'text-3xl md:text-5xl text-black' : 'text-2xl md:text-4xl text-game-blue'}
                                    `}
                                >
                                    {player.score.toLocaleString()}
                                </span>
                                {player.scoreChange > 0 && (
                                    <div className={
                                        player.rank === 1
                                            ? 'bg-black text-primary px-2 md:px-3 py-0.5 md:py-1 rounded-full border border-black/10 shadow-[2px_2px_0_0_rgba(255,255,255,0.3)] flex items-center gap-1 animate-pulse'
                                            : 'bg-game-green text-white px-2 md:px-3 py-0.5 md:py-1 rounded-full flex items-center gap-1'
                                    }>
                                        <span className="material-symbols-outlined text-sm md:text-base font-bold">arrow_upward</span>
                                        <span className="font-bold text-xs md:text-sm">+{player.scoreChange.toLocaleString()}</span>
                                    </div>
                                )}
                                {player.scoreChange < 0 && (
                                    <div className="bg-red-100 border border-red-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                                        <span className="material-symbols-outlined text-game-red text-xs md:text-sm font-bold">arrow_downward</span>
                                        <span className="text-game-red font-bold text-xs md:text-sm">{player.scoreChange.toLocaleString()}</span>
                                    </div>
                                )}
                                {player.scoreChange === 0 && player.rank !== 1 && (
                                    <div className="flex items-center gap-1 opacity-60">
                                        <span className="text-gray-500 font-bold text-xs md:text-sm">--</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </main>
        <footer className="mt-4 md:mt-6 shrink-0 flex flex-col items-center gap-4 md:gap-6">
            <div className="flex flex-col items-center gap-3 w-full">
                <button className="bg-primary hover:bg-primary-dark text-black font-black text-lg md:text-2xl py-3 md:py-4 px-12 w-full md:w-auto rounded-xl border-2 border-black shadow-hard hover:shadow-hard-lg transition-all active:translate-y-1 active:shadow-none uppercase tracking-wide flex items-center justify-center gap-2 group">
                    Next Round
                    <span className="material-symbols-outlined font-black group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <p className="text-white/40 text-xs md:text-sm font-medium tracking-wide uppercase">Waiting for players to ready up...</p>
            </div>
        </footer>
    </div>
);

// --- HOST GAME OVER ---
export const HostGameOver = () => (
    <div className="relative flex h-full w-full flex-col overflow-y-auto">
        <div className="fixed top-10 left-10 w-32 h-32 rounded-full border-4 border-primary/20 pointer-events-none"></div>
        <div className="fixed bottom-10 right-10 w-48 h-48 rounded-full border-8 border-primary/20 pointer-events-none"></div>
        <div className="layout-container flex h-full grow flex-col items-center justify-center py-10 px-4 md:px-10">
            <div className="flex flex-col items-center w-full max-w-4xl gap-8 z-10">
                <div className="text-center space-y-2">
                    <h1 className="text-primary text-6xl md:text-8xl font-heading tracking-tight drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
                        WINNER!
                    </h1>
                    <p className="text-card-cream/80 text-xl font-body tracking-widest uppercase font-bold">
                        Congratulations, trivia master
                    </p>
                </div>
                <div className="w-full max-w-md bg-card-cream text-background-dark rounded-xl border-4 border-black shadow-hard p-6 md:p-8 transform transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex flex-col items-center gap-6">
                        <div className="relative">
                            <div className="absolute -top-10 -right-6 bg-primary text-black p-2 rounded-full border-2 border-black shadow-hard-sm z-20">
                                <span className="material-symbols-outlined text-3xl">emoji_events</span>
                            </div>
                            <div className="h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-black bg-[#ffeb3b] shadow-hard-sm overflow-hidden flex items-center justify-center text-8xl relative group">
                                <span className="group-hover:scale-110 transition-transform duration-300">😎</span>
                            </div>
                        </div>
                        <div className="text-center space-y-1">
                            <h2 className="text-4xl font-heading uppercase tracking-tight text-black">Alex The Great</h2>
                            <div className="inline-flex items-center gap-2 bg-black text-primary px-4 py-1 rounded-full font-bold text-lg">
                                <span className="material-symbols-outlined text-sm">star</span>
                                12,500 PTS
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-2xl mt-4">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-1 flex-1 bg-white/20 rounded-full"></div>
                        <h3 className="text-white font-heading text-xl tracking-wider">RUNNERS UP</h3>
                        <div className="h-1 flex-1 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { rank: 2, name: "Sarah J.", score: "10,200", emoji: "🤪", color: "#a29bfe" },
                            { rank: 3, name: "Mike Ross", score: "8,900", emoji: "🤠", color: "#fd79a8" }
                        ].map((p, i) => (
                            <div key={i} className="flex items-center gap-4 bg-card-cream/10 border-2 border-transparent hover:border-primary/50 hover:bg-card-cream/20 transition-all rounded-lg p-3">
                                <div className="font-heading text-2xl text-white/50 w-6 text-center">{p.rank}</div>
                                <div className="h-12 w-12 rounded-full border-2 border-white/20 shrink-0 flex items-center justify-center text-3xl overflow-hidden shadow-sm relative" style={{backgroundColor: p.color}}>
                                    <span>{p.emoji}</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-white font-bold text-lg truncate uppercase">{p.name}</p>
                                    <p className="text-primary text-sm font-medium">{p.score} pts</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 mt-6 w-full max-w-lg justify-center">
                    <button className="group relative flex-1 bg-primary text-black font-heading text-2xl uppercase tracking-wide py-4 px-8 rounded-lg border-2 border-black shadow-hard hover:translate-y-[2px] hover:shadow-hard-sm active:translate-y-[6px] active:shadow-none transition-all">
                        <div className="flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">replay</span>
                            <span>Play Again</span>
                        </div>
                    </button>
                    <button className="group flex-1 bg-transparent text-white font-heading text-2xl uppercase tracking-wide py-4 px-8 rounded-lg border-2 border-white/30 hover:bg-white/10 hover:border-white transition-all">
                        <div className="flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">logout</span>
                            <span>Lobby</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
);