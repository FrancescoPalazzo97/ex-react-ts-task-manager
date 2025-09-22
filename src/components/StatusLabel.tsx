import { memo, useMemo } from 'react';
import type { StatusType } from "../types";

const STATUS_CONFIG = {
    'to do': {
        container: 'bg-red-500/20 border-red-500/40',
        dot: 'bg-red-500 shadow-red-500/30',
        text: 'text-red-300'
    },
    'doing': {
        container: 'bg-yellow-500/20 border-yellow-500/40',
        dot: 'bg-yellow-500 shadow-yellow-500/30',
        text: 'text-yellow-300'
    },
    'done': {
        container: 'bg-green-500/20 border-green-500/40',
        dot: 'bg-green-500 shadow-green-500/30',
        text: 'text-green-300'
    },
} as const;

const DEFAULT_CONFIG = {
    container: 'bg-slate-500/20 border-slate-500/40',
    dot: 'bg-slate-500 shadow-slate-500/30',
    text: 'text-slate-300'
} as const;

type StatusLabelProps = {
    status: StatusType
};

const StatusLabel = memo(({ status }: StatusLabelProps) => {

    const styles = useMemo(() => {
        const statusKey = status.toLowerCase() as keyof typeof STATUS_CONFIG;
        return STATUS_CONFIG[statusKey] || DEFAULT_CONFIG;
    }, [status]);

    return (
        <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-300 hover:brightness-150 ${styles.container}`}>
            <div className={`w-2 h-2 rounded-full shadow-lg ${styles.dot}`} />
            <span className={`text-sm font-medium uppercase tracking-wide ${styles.text}`}>
                {status}
            </span>
        </div>
    )
})

export default StatusLabel
