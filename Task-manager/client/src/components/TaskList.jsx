function TaskList({ tasks, onDelete, onComplete }) {
  return (
    <div>
      <h2>My Tasks</h2>

      {tasks.length === 0 ? (
        <p>No Tasks Found</p>
      ) : (
        tasks.map((task) => (
          <div key={task._id} className="task-card">
            <h3>{task.title}</h3>

            <p>{task.description}</p>

            <p>
              Status:
              <span
                className={
                  task.status === "completed"
                    ? "completed"
                    : "pending"
                }
              >
                {" "}
                {task.status || "pending"}
              </span>
            </p>

            {task.status !== "completed" && (
              <button
                onClick={() => onComplete(task._id)}
              >
                Complete
              </button>
            )}

            <button
              style={{ marginLeft: "10px" }}
              onClick={() => onDelete(task._id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;