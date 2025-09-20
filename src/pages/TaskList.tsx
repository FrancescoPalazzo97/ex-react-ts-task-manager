import { useGlobalContext } from "../hooks"
import { TaskRow, Icons } from "../components";

const TaskList = () => {

    const { tasks } = useGlobalContext();

    return (
        <div className='max-w-[1400px] mx-auto px-6 py-8'>
            <div className='mb-8'>
                <h1 className='text-4xl md:text-5xl font-bold text-gray-300 text-center mb-2'>
                    Lista Tasks
                </h1>
            </div>

            <div className='bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-slate-700/50 ring-1 ring-slate-600/20'>
                <table className='w-full table-auto'>
                    <thead className='bg-gradient-to-r from-slate-800/80 to-slate-700/80 border-b border-slate-600/30'>
                        <tr>
                            <th className='px-8 py-6 text-left text-xs font-bold text-slate-200 uppercase tracking-widest'>
                                <div className='flex items-center space-x-3'>
                                    <Icons icon="stack" />
                                    <span className='bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent'>Nome Task</span>
                                </div>
                            </th>
                            <th className='px-8 py-6 text-left text-xs font-bold text-slate-200 uppercase tracking-widest'>
                                <div className='flex items-center space-x-3'>
                                    <Icons icon="clipboard" />
                                    <span className='bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent'>Status</span>
                                </div>
                            </th>
                            <th className='px-8 py-6 text-left text-xs font-bold text-slate-200 uppercase tracking-widest'>
                                <div className='flex items-center space-x-3'>
                                    <Icons icon="calendar" />
                                    <span className='bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent'>Data Creazione</span>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-slate-700/50 bg-slate-800/30'>
                        {tasks.length > 0 ? (
                            tasks.map(t => (
                                <TaskRow key={t.id} task={t} />
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3} className='px-6 py-12 text-center text-gray-500'>
                                    <div className='flex flex-col items-center'>
                                        <Icons icon="plusCircle" />
                                        <p className='text-lg font-medium'>Nessuna task presente</p>
                                        <p className='text-sm mt-1'>Inizia aggiungendo la tua prima attività</p>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TaskList
