import { useState } from "react";
import { useHabit } from "../context/HabitContext";

function AddHabit() {
  const { addHabit } = useHabit();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Health");
  const [frequency, setFrequency] = useState("Daily");
  const [color, setColor] = useState("#2563eb");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter a habit name");
      return;
    }

    const newHabit = {
      id: Date.now(),
      name,
      category,
      frequency,
      color,
      history: {},
    };

    addHabit(newHabit);

    setName("");
    setCategory("Health");
    setFrequency("Daily");
    setColor("#2563eb");

    alert("Habit Added Successfully!");
  };

  return (
    <div className="container">
      <h1>Add Habit</h1>

      <form className="habit-form" onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Habit Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Health</option>
          <option>Fitness</option>
          <option>Study</option>
          <option>Reading</option>
          <option>Work</option>
        </select>

        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        >
          <option>Daily</option>
          <option>Weekly</option>
        </select>

        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <button type="submit">
          Add Habit
        </button>

      </form>
    </div>
  );
}

export default AddHabit;