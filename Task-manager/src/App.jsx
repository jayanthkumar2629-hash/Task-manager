import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function App() {
  const [task, setTask] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");
const [darkMode, setDarkMode] = useState(() => {
  return JSON.parse(localStorage.getItem("darkMode")) || false;
});// Load tasks from localStorage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks to localStorage
  useEffect(() => {
  localStorage.setItem("darkMode", JSON.stringify(darkMode));
}, [darkMode]);

  // Add Task
  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
      priority: priority,
      dueDate: dueDate,
    };

    setTasks([...tasks, newTask]);
    setTask("");
    setPriority("Medium");
    setDueDate("");
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Complete
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Edit Task
  const editTask = (id) => {
    const newText = prompt("Edit task:");

    if (!newText || newText.trim() === "") return;

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, text: newText }
          : task
      )
    );
  };

  // Search + Filter
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.text
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all"
        ? true
        : filter === "completed"
        ? task.completed
        : !task.completed;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className={darkMode ? "app dark" : "app"}>
  <div className={darkMode ? "card dark-card" : "card"}>
        <h1>Task Manager App</h1>
        <button
  onClick={() => setDarkMode(!darkMode)}
  style={{ marginBottom: "20px" }}
>
  {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
</button>
        <TaskForm
          task={task}
          setTask={setTask}
          addTask={addTask}
          priority={priority}
          setPriority={setPriority}
          dueDate={dueDate}
          setDueDate={setDueDate}
        />

        {/* Search */}
        <div style={{ marginTop: "20px" }}>
          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Statistics */}
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <h3>Task Statistics</h3>
          <p>Total Tasks: {tasks.length}</p>
          <p>
            Completed Tasks:{" "}
            {tasks.filter((task) => task.completed).length}
          </p>
          <p>
            Pending Tasks:{" "}
            {tasks.filter((task) => !task.completed).length}
          </p>
        </div>

        {/* Filters */}
        <div style={{ marginBottom: "20px" }}>
          <button onClick={() => setFilter("all")}>
            All
          </button>

          <button onClick={() => setFilter("completed")}>
            Completed
          </button>

          <button onClick={() => setFilter("pending")}>
            Pending
          </button>
        </div>

        <TaskList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </div>
    </div>
  );
}

export default App;