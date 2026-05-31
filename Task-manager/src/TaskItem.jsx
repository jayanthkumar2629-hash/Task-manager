function TaskItem({ task, toggleTask, deleteTask, editTask }) {
  return (
    <li
      style={{
        marginBottom: "10px",
        cursor: "pointer",
        textDecoration: task.completed ? "line-through" : "none",
      }}
      onClick={() => toggleTask(task.id)}
    >
     <div>
  <strong>{task.text}</strong>
  <br />
  Priority: {task.priority}
  <br />
  Due: {task.dueDate || "No Date"}
</div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          editTask(task.id);
        }}
        style={{ marginLeft: "10px" }}
      >
        Edit
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteTask(task.id);
        }}
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;