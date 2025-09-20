import { memo } from "react";
import type { TaskType } from "../types"
import { useDate } from "../hooks";
import StatusLabel from "./StatusLabel";

type TaskRowProps = {
    task: TaskType
}

const TaskRow = memo(({ task }: TaskRowProps) => {

    const { title, status, createdAt } = task;

    return (
        <tr className='hover:bg-slate-700/40 transition-all duration-300 group border-b border-slate-700/30 last:border-b-0'>
            <td className='px-8 py-6'>
                <div className='flex items-center space-x-4'>
                    <div className='w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-blue-500/30 group-hover:scale-110'></div>
                    <span className='text-slate-100 font-semibold text-base tracking-wide group-hover:text-white transition-colors duration-300'>{title}</span>
                </div>
            </td>
            <td className='px-8 py-6'>
                <StatusLabel status={status} />
            </td>
            <td className='px-8 py-6'>
                <div className='flex items-center text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300'>
                    <div className='flex items-center space-x-3 bg-slate-700/50 px-3 py-2 rounded-lg border border-slate-600/30'>
                        <svg className='w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                        </svg>
                        <span className='font-medium'>{useDate(createdAt, 'dddd DD MMMM YYYY')}</span>
                    </div>
                </div>
            </td>
        </tr>
    )
})

export default TaskRow
