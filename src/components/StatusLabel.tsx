import { memo, useMemo } from 'react';
import type { StatusType } from "../types";

const STATUS_CONFIG = {
    'to do': {
        color: 'red',
        intensity: 500,
    },
    'doing': {
        color: 'yellow',
        intensity: 500,
    },
    'done': {
        color: 'green',
        intensity: 500,
    },
} as const;

const DEFAULT_CONFIG = {
    color: 'slate',
    intensity: 500,
} as const;

type StatusLabelProps = {
    status: StatusType
};

const StatusLabel = memo(({ status }: StatusLabelProps) => {

    const styles = useMemo(() => {
        const statusKey = status.toLowerCase() as keyof typeof STATUS_CONFIG;
        const config = STATUS_CONFIG[statusKey] || DEFAULT_CONFIG;
        const { color, intensity } = config;

        return {
            container: `inline-flex items-center gap-2 px-3 py-2 rounded-full bg-${color}-${intensity}/20 border border-${color}-${intensity}/40 transition-all duration-300 hover:brightness-150`,
            dot: `w-2 h-2 bg-${color}-${intensity} rounded-full shadow-lg shadow-${color}-${intensity}/30`,
            text: `text-${color}-300 text-sm font-medium uppercase tracking-wide`
        };
    }, [status]);

    return (
        <div className={styles.container}>
            <div className={styles.dot} />
            <span className={styles.text}>
                {status}
            </span>
        </div>
    )
})

export default StatusLabel
