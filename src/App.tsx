import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import { AddTask, TaskList } from "./pages"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={TaskList} />
          <Route path="/add-task" Component={AddTask} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
