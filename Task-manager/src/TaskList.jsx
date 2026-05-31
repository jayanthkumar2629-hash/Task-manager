import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, deleteTask,editTask }) {
  return (
    <ul style={{ marginTop: "20px" }}>
      {tasks.map((task) => (
       <TaskItem
  key={task.id}
  task={task}
  toggleTask={toggleTask}
  deleteTask={deleteTask}
  editTask={editTask}
/> 
      ))}
    </ul>
  );
}

export default TaskList;