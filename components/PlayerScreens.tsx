import React from 'react';

// --- PLAYER WAITING ---
// Not explicitly in screenshots but needed for logic. Using a generic waiting style.
export const PlayerWaiting = () => (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-white">
        <div className="bg-surface/10 p-6 rounded-full border-2 border-white/20 mb-6 animate-pulse">
             <span className="material-symbols-outlined text-6xl">hourglass_empty</span>
        </div>
        <h2 className="text-3xl font-heading mb-2">Sit Tight!</h2>
        <p className="opacity-70">Waiting for the host to start the game...</p>
    </div>
);

// --- PLAYER INPUT ---
export const PlayerInput = () => (
    <div className="relative z-10 flex min-h-screen flex-col items-center justify-start pt-6 pb-10 px-4 w-full max-w-[420px] mx-auto">
        <div className="w-full flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2 pt-8">
                <div className="relative group cursor-help">
                    <div className="w-20 h-20 bg-accent-blue rounded-full border-4 border-white flex items-center justify-center shadow-hard overflow-hidden relative z-10">
                        <span className="text-4xl filter drop-shadow-md">🥸</span>
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-text-dark px-3 py-0.5 rounded-full border-2 border-black text-xs font-black uppercase whitespace-nowrap shadow-hard-sm z-20">
                        You
                    </div>
                </div>
            </div>
            <div className="w-full bg-surface text-text-dark p-6 rounded-xl border-2 border-black shadow-hard-lg flex flex-col gap-4 relative mt-2">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-primary/80 border border-black/20 rotate-1 shadow-sm"></div>
                <div className="flex flex-col gap-2 text-center">
                    <h2 className="text-sm font-bold text-text-dark/60 tracking-widest uppercase border-b-2 border-text-dark/10 pb-2 mb-1">Trivia Question</h2>
                    <p className="font-heading text-2xl leading-tight">
                        What was the original name of the search engine Google?
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-1 w-full">
                <label className="flex justify-between items-end px-1" htmlFor="bluff-input">
                    <span className="font-heading text-lg text-text-light tracking-wide shadow-black drop-shadow-sm">Your Bluff</span>
                    <span className="text-xs font-bold text-text-light/70 bg-black/20 px-2 py-0.5 rounded">MAX 50 CHARS</span>
                </label>
                <div className="relative group">
                    <textarea autoFocus className="w-full bg-white text-text-dark text-lg font-bold p-4 rounded-xl border-2 border-white focus:border-primary focus:ring-0 shadow-hard min-h-[140px] resize-none placeholder:text-text-dark/30 placeholder:font-normal transition-all" id="bluff-input" placeholder="Type a lie that sounds true..."></textarea>
                    <div className="absolute bottom-3 right-3 text-xs font-bold text-text-dark/40 pointer-events-none">
                        0/50
                    </div>
                </div>
            </div>
            <div className="w-full bg-text-dark border-2 border-text-light/20 p-4 rounded-lg shadow-hard-sm flex flex-row items-center justify-between gap-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/10 to-transparent pointer-events-none"></div>
                <div className="flex flex-col z-10">
                    <div className="flex items-center gap-1.5 text-primary mb-0.5">
                        <span className="material-symbols-outlined text-lg">smart_toy</span>
                        <span className="font-bold text-xs uppercase tracking-wider">Auto-Bluff</span>
                    </div>
                    <p className="text-xs text-text-light/80 font-medium leading-tight">Can't think of anything?</p>
                </div>
                <button className="relative z-10 bg-surface hover:bg-white text-text-dark text-xs font-black uppercase px-4 py-2.5 rounded border-2 border-black shadow-[2px_2px_0px_0px_#000] active:translate-y-0.5 active:shadow-none transition-all flex items-center gap-2">
                    <span>Generate Lie</span>
                    <span className="material-symbols-outlined text-sm">bolt</span>
                </button>
            </div>
            <div className="mt-auto pt-4 w-full sticky bottom-4 z-50">
                <button className="w-full group relative bg-primary hover:bg-primary-hover text-text-dark border-2 border-black rounded-xl p-4 shadow-hard-lg active:translate-y-1 active:shadow-hard-sm transition-all overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12"></div>
                    <div className="relative flex items-center justify-center gap-3">
                        <span className="font-heading text-2xl tracking-wide">LOCK IN BLUFF</span>
                        <span className="material-symbols-outlined text-3xl">check_circle</span>
                    </div>
                </button>
            </div>
        </div>
    </div>
);

// --- PLAYER VOTING ---
export const PlayerVoting = () => (
    <div className="relative w-full max-w-[480px] h-full md:h-auto bg-transparent flex flex-col overflow-hidden mx-auto">
        <main className="flex-1 overflow-y-auto p-4 flex flex-col gap-6 relative">
            <div className="bg-primary p-5 rounded-xl border-4 border-black shadow-hard transform rotate-1">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-black uppercase tracking-widest bg-black text-white px-2 py-0.5 rounded">Round 3/5</span>
                    <span className="material-symbols-outlined text-2xl opacity-50">help</span>
                </div>
                <h2 className="text-2xl font-black uppercase leading-tight text-black drop-shadow-sm">
                    What is the national animal of Scotland?
                </h2>
                <p className="mt-2 text-sm font-bold opacity-80 border-t-2 border-black/20 pt-2 italic text-black">
                    Pick the real answer. Don't get fooled!
                </p>
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-text-light uppercase font-bold text-sm tracking-widest opacity-80 ml-1">Cast your vote</p>
                <form className="flex flex-col gap-3" id="votingForm">
                    <label className="cursor-pointer group relative">
                        <input className="peer sr-only" name="vote" type="radio" value="lion" />
                        <div className="bg-surface text-black p-4 rounded-xl border-4 border-black shadow-hard flex items-center justify-between group-hover:bg-white transition-all active:translate-y-[2px] active:shadow-none">
                            <span className="text-lg font-bold">A Lion</span>
                            <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center peer-checked:bg-accent-blue peer-checked:border-accent-blue transition-colors">
                                <div className="w-3 h-3 bg-accent-blue rounded-full opacity-0 peer-checked:opacity-100"></div>
                            </div>
                        </div>
                    </label>
                    <label className="cursor-pointer group relative">
                        <input defaultChecked className="peer sr-only" name="vote" type="radio" value="unicorn" />
                        <div className="bg-surface text-black p-4 rounded-xl border-4 border-black shadow-hard flex items-center justify-between group-hover:bg-white transition-all active:translate-y-[2px] active:shadow-none">
                            <span className="text-lg font-bold">A Unicorn</span>
                            <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center transition-colors">
                                <span className="material-symbols-outlined text-accent-blue text-lg hidden peer-checked:block font-bold">check_circle</span>
                            </div>
                        </div>
                    </label>
                    {["A Sheep", "A Wild Haggis"].map((opt) => (
                        <label key={opt} className="cursor-pointer group relative">
                            <input className="peer sr-only" name="vote" type="radio" value={opt} />
                            <div className="bg-surface text-black p-4 rounded-xl border-4 border-black shadow-hard flex items-center justify-between group-hover:bg-white transition-all active:translate-y-[2px] active:shadow-none">
                                <span className="text-lg font-bold">{opt}</span>
                                <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center"></div>
                            </div>
                        </label>
                    ))}
                </form>
            </div>
        </main>
        <footer className="p-4 z-20">
            <button className="w-full bg-primary hover:bg-primary-hover text-black text-xl font-black uppercase py-4 rounded-xl border-4 border-black shadow-hard active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-3 group">
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">lock</span>
                Lock In Vote
            </button>
        </footer>
    </div>
);

// --- PLAYER RESULTS (LOOK AT TV) ---
export const PlayerResults = () => (
    <div className="w-full max-w-md flex flex-col h-full grow relative justify-center mx-auto p-4">
        <main className="flex-1 flex flex-col items-center justify-center gap-8 mb-12">
            <div className="bg-card-cream dark:bg-[#34495e] border-2 border-black p-8 rounded-xl w-full shadow-hard flex flex-col items-center gap-6 relative overflow-hidden group">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-2xl -z-0"></div>
                <div className="relative z-10 animate-bounce-slow">
                    <div className="size-32 bg-primary rounded-full border-4 border-black shadow-hard flex items-center justify-center">
                        <span className="material-symbols-outlined text-7xl text-black">visibility</span>
                    </div>
                </div>
                <div className="text-center relative z-10 flex flex-col gap-3">
                    <h1 className="text-5xl font-impact text-primary uppercase tracking-wide drop-shadow-[2px_2px_0_rgba(0,0,0,1)] text-stroke-black">
                        EYES UP!
                    </h1>
                    <div className="h-1 w-24 bg-primary mx-auto border-2 border-black shadow-hard-sm"></div>
                    <p className="text-white text-lg font-medium leading-relaxed max-w-[280px] mx-auto mt-2">
                        Look at the TV screen to see the results. Who fooled who?
                    </p>
                </div>
                <div className="flex gap-2 mt-4">
                    <div className="w-3 h-3 bg-primary rounded-full border border-black animate-pulse"></div>
                    <div className="w-3 h-3 bg-primary rounded-full border border-black animate-pulse delay-75"></div>
                    <div className="w-3 h-3 bg-primary rounded-full border border-black animate-pulse delay-150"></div>
                </div>
            </div>
            <div className="bg-accent-blue/20 border-2 border-accent-blue/50 p-4 rounded-lg w-full max-w-sm backdrop-blur-sm">
                <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-accent-blue mt-0.5">info</span>
                    <p className="text-sm text-blue-100 italic">
                        Tip: While you wait, practice your poker face. Don't let them know you bluffed!
                    </p>
                </div>
            </div>
        </main>
    </div>
);

// --- PLAYER FEEDBACK ---
export const PlayerFeedback = () => (
    <div className="relative w-full max-w-[480px] h-full md:h-auto bg-transparent flex flex-col overflow-hidden mx-auto">
        <main className="flex-1 overflow-y-auto p-6 flex flex-col justify-center gap-8 relative">
            <div className="bg-primary p-6 rounded-xl border-4 border-black shadow-hard transform rotate-1 relative">
                <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-black uppercase tracking-widest bg-black text-white px-2 py-0.5 rounded">Question 3/5</span>
                    <span className="material-symbols-outlined text-2xl opacity-50 text-black">history</span>
                </div>
                <h2 className="text-2xl font-black uppercase leading-tight text-black drop-shadow-sm">
                    What is the national animal of Scotland?
                </h2>
                <div className="mt-4 pt-3 border-t-2 border-black/10 flex items-center gap-2 text-sm font-bold opacity-70 text-black">
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                    <span>You answered correct!</span>
                </div>
            </div>
            <div className="flex flex-col gap-5 mt-2">
                <div className="text-center space-y-1">
                    <p className="text-text-light uppercase font-black text-xl tracking-wide drop-shadow-md">
                        Was this a good question?
                    </p>
                    <p className="text-text-light opacity-60 text-xs font-bold uppercase tracking-widest">
                        Help us improve the deck
                    </p>
                </div>
                <div className="flex gap-4 w-full">
                    <button className="flex-1 aspect-square bg-surface hover:bg-white p-4 rounded-xl border-4 border-black shadow-hard active:translate-y-1 active:shadow-none transition-all flex flex-col items-center justify-center gap-3 group">
                        <span className="material-symbols-outlined text-5xl text-black group-hover:text-error-red group-hover:scale-110 transition-all duration-200">thumb_down</span>
                        <span className="font-black uppercase text-lg text-black group-hover:text-error-red transition-colors">Bad</span>
                    </button>
                    <button className="flex-1 aspect-square bg-surface hover:bg-white p-4 rounded-xl border-4 border-black shadow-hard active:translate-y-1 active:shadow-none transition-all flex flex-col items-center justify-center gap-3 group">
                        <span className="material-symbols-outlined text-5xl text-black group-hover:text-success-green group-hover:scale-110 transition-all duration-200">thumb_up</span>
                        <span className="font-black uppercase text-lg text-black group-hover:text-success-green transition-colors">Good</span>
                    </button>
                </div>
            </div>
        </main>
        <footer className="p-4 z-20 flex justify-center pb-8">
            <button className="text-text-light/40 hover:text-text-light font-bold uppercase text-xs tracking-widest transition-colors flex items-center gap-1">
                Skip Feedback
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
        </footer>
    </div>
);

// --- PLAYER LIE UPVOTE ---
export const PlayerLieUpvote = () => (
    <div className="relative w-full max-w-[480px] h-full md:h-auto bg-transparent flex flex-col overflow-hidden mx-auto">
        <main className="flex-1 overflow-y-auto p-4 flex flex-col gap-6 relative justify-center">
            <div className="flex flex-col gap-3">
                <p className="text-text-light uppercase font-bold text-sm tracking-widest opacity-80 ml-1">Favourite lies</p>
                <form className="flex flex-col gap-3" id="upvoteForm">
                    {["A Lion", "A Sheep", "A Wild Haggis", "The Loch Ness Monster"].map((lie, i) => (
                        <label key={i} className="cursor-pointer group relative">
                            <input className="peer sr-only" name="likes" type="checkbox" value={lie} />
                            <div className="bg-surface text-black p-4 rounded-xl border-4 border-black shadow-hard flex items-center justify-between group-hover:bg-white transition-all active:translate-y-[2px] active:shadow-none">
                                <span className="text-lg font-bold pr-4 leading-tight">{lie}</span>
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-black/20 peer-checked:text-black/70 transition-colors">
                                    <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform material-symbols-filled">thumb_up</span>
                                </div>
                            </div>
                        </label>
                    ))}
                </form>
            </div>
        </main>
    </div>
);