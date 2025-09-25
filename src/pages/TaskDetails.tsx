import { useParams } from "react-router-dom";
import { useGlobalContext, useDate } from "../hooks";
import { StatusLabel, Icons } from "../components";

const TaskDetails = () => {
    const { id } = useParams();

    if (!id) return (
        <div className="max-w-[1400px] mx-auto px-6 py-8">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-red-400">Task non trovato!</h1>
            </div>
        </div>
    );

    const { tasks } = useGlobalContext();
    const task = tasks.find(t => t.id === Number(id));

    if (!task) return (
        <div className="max-w-[1400px] mx-auto px-6 py-8">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-red-400">Task non trovato</h1>
            </div>
        </div>
    );

    return (
        <div className="max-w-[800px] mx-auto px-6 py-8">
            {/* Title page */}
            <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-300 text-center mb-2">
                    Dettagli Task
                </h1>
            </div>

            {/* Card task */}
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-slate-700/50 ring-1 ring-slate-600/20">

                {/* Title Task */}
                <div className="pt-8">

                    <div className="flex justify-center items-center space-x-3 text-sm font-bold text-slate-200 uppercase tracking-widest">
                        <Icons icon="stack" />
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent">
                            {task.title}
                        </h2>
                    </div>

                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2">

                    {/* Info */}
                    <div className="p-8 space-y-8">

                        {/* Description */}
                        <div className="bg-slate-700/30 border border-slate-600/30 rounded-lg p-4 space-y-4">
                            <div className="flex justify-center items-center space-x-3 text-sm font-bold text-slate-200 uppercase tracking-widest">
                                <Icons icon="description" />
                                <span className="bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent">
                                    Descrizione
                                </span>
                            </div>
                            <p className="text-slate-200 text-lg leading-relaxed text-center">
                                {task.description || "Nessuna descrizione disponibile"}
                            </p>
                        </div>

                        {/* createdAt */}
                        <div className="bg-slate-700/50 px-3 py-2 rounded-lg border border-slate-600/30 space-y-4">
                            <div className="flex justify-center items-center space-x-3 text-sm font-bold text-slate-200 uppercase tracking-widest">
                                <Icons icon="calendar" />
                                <span className="bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent">
                                    Data Creazione
                                </span>
                            </div>
                            <span className="text-slate-200 font-medium block text-center">
                                {useDate(task.createdAt, 'DD MMMM YYYY')}
                            </span>
                        </div>

                        {/* Status */}
                        <div className="bg-slate-700/50 px-3 py-2 rounded-lg border border-slate-600/30 space-y-4">
                            <div className="flex justify-center items-center space-x-3 text-sm font-bold text-slate-200 uppercase tracking-widest">
                                <Icons icon="clipboard" />
                                <span className="bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent">
                                    Status
                                </span>
                            </div>
                            <div className="text-center">
                                <StatusLabel status={task.status} />
                            </div>
                        </div>

                    </div>
                    {/* /Info */}

                    {/* Buttons */}
                    <div className="p-8 space-y-8">
                        {/* Modify */}
                        <div>

                        </div>
                        {/* Delete */}
                        <div>

                        </div>
                    </div>
                    {/* /Buttons */}

                </div>

            </div>
        </div>
    )
}

export default TaskDetails
