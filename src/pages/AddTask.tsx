import { useState, useRef } from "react"
import { Icons } from "../components"
import '../styles/select-options.css'

const AddTask = () => {
    const [title, setTitle] = useState<string>('');
    const bioRef = useRef<HTMLInputElement>(null);
    const selectRef = useRef<HTMLSelectElement>(null);

    return (
        <div className='max-w-[1400px] mx-auto px-6 py-8'>
            <div className='mb-8'>
                <h1 className='text-4xl md:text-5xl font-bold text-gray-300 text-center mb-2'>
                    Aggiungi task
                </h1>
            </div>

            <div className='bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-slate-700/50 ring-1 ring-slate-600/20'>

                <form className='p-8 space-y-6'>
                    <div className='space-y-2'>
                        <label className='flex items-center space-x-3 text-sm font-bold text-slate-200 uppercase tracking-widest'>
                            <Icons icon="stack" />
                            <span className='bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent'>
                                Nome Task
                            </span>
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            placeholder="Inserisci il nome della task..."
                            className='w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-200'
                        />
                    </div>

                    <div className='space-y-2'>
                        <label className='flex items-center space-x-3 text-sm font-bold text-slate-200 uppercase tracking-widest'>
                            <Icons icon="clipboard" />
                            <span className='bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent'>
                                Descrizione
                            </span>
                        </label>
                        <input
                            type="text"
                            ref={bioRef}
                            placeholder="Inserisci una descrizione..."
                            className='w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-200'
                        />
                    </div>

                    <div className='space-y-2'>
                        <label className='flex items-center space-x-3 text-sm font-bold text-slate-200 uppercase tracking-widest'>
                            <Icons icon="calendar" />
                            <span className='bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent'>
                                Status
                            </span>
                        </label>
                        <select
                            ref={selectRef}
                            className='w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-200 appearance-none'
                            style={{
                                colorScheme: 'dark',
                                backgroundColor: '#334155',
                                color: '#e2e8f0'
                            }}
                        >
                            <option value="To do">To do</option>
                            <option value="Doing">Doing</option>
                            <option value="Done">Done</option>
                        </select>
                    </div>

                    <div className='flex justify-end pt-4'>
                        <button
                            type="submit"
                            className='px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 transform focus:outline-none focus:ring-2 focus:ring-blue-400/50'
                        >
                            Aggiungi Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTask
