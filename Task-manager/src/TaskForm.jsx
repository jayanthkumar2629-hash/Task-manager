function TaskForm({ task, setTask, addTask,priority,setPriority,dueDate,setDueDate }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <select
  value={priority}
  onChange={(e) => setPriority(e.target.value)}
>
  <option value="High">High</option>
  <option value="Medium">Medium</option>
  <option value="Low">Low</option>
</select>

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />

      <button onClick={addTask} style={{ padding: "8px" }}>
        Add Task
      </button>
    </div>
  );
}

export default TaskForm;