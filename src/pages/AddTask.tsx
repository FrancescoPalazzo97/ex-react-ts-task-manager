import { useState, useRef } from "react";
import { Icons } from "../components";
import { guardType, launchError } from "../lib";
import { useGlobalContext } from "../hooks";
import "../styles/select-options.css";

import type { FormDataType, ErrorFormType } from "../types";

const initialValue: ErrorFormType = { title: "", description: "", status: "" };

const symbols = `!@#$%^&*()-_=+[]{}|;:'\\",.<>?/\`~`;

const AddTask = () => {
  const [title, setTitle] = useState<string>("");
  const [error, setError] = useState(initialValue);
  const bioRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  const { addTask } = useGlobalContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(initialValue);
    if (!e.target.value.trim())
      setError({ ...error, title: "Aggiungi un titolo" });
    const titleIsValid = ![...e.target.value].some((char) =>
      symbols.includes(char)
    );
    titleIsValid
      ? setTitle(e.target.value)
      : setError({
        ...error,
        title: `Non è possibile aggiungere caratteri speciali`,
      });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (
        bioRef.current &&
        selectRef.current?.value &&
        guardType.isStatusValid(selectRef.current.value)
      ) {
        const formData: FormDataType = {
          title,
          description: bioRef.current.value,
          status: selectRef.current.value,
        };

        addTask(formData);
      } else {
        throw new Error('Stato non valido! Si prega di inserire uno stato valido');
      }
    } catch (e) {
      e instanceof Error ? launchError(e) : launchError();
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-300 text-center mb-2">
          Aggiungi task
        </h1>
      </div>

      <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-slate-700/50 ring-1 ring-slate-600/20">
        <form className="p-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="flex items-center space-x-3 text-sm font-bold text-slate-200 uppercase tracking-widest">
              <Icons icon="stack" />
              <span className="bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent">
                Nome Task
              </span>
            </label>
            <input
              type="text"
              value={title}
              onChange={handleChange}
              placeholder="Inserisci il nome della task..."
              className={`w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 ${error.title
                ? "focus:ring-red-400/80 focus:border-red-400/80"
                : "focus:ring-blue-400/50 focus:border-blue-400/50"
                } transition-all duration-200`}
            />
            <span
              className={`text-red-500 ${error.title ? "opacity-100" : "opacity-0"
                } duration-500`}
            >
              {error.title}
            </span>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-3 text-sm font-bold text-slate-200 uppercase tracking-widest">
              <Icons icon="clipboard" />
              <span className="bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent">
                Descrizione
              </span>
            </label>
            <input
              type="text"
              ref={bioRef}
              placeholder="Inserisci una descrizione..."
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-200"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-3 text-sm font-bold text-slate-200 uppercase tracking-widest">
              <Icons icon="calendar" />
              <span className="bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent">
                Status
              </span>
            </label>
            <select
              ref={selectRef}
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-200 appearance-none"
              style={{
                colorScheme: "dark",
                backgroundColor: "#334155",
                color: "#e2e8f0",
              }}
              defaultValue={"To do"}
            >
              <option value="To do">To do</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 transform focus:outline-none focus:ring-2 focus:ring-blue-400/50"
            >
              Aggiungi Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
