import { useHabit } from "../context/HabitContext";
import HeatMap from "../components/HeatMap";
import { currentStreak } from "../utils/streak";
import "./Insights.css";

function Insights() {

  const { habits } = useHabit();

  const totalHabits = habits.length;

  const today = new Date().toISOString().split("T")[0];

  const completedToday = habits.filter(
    (h) => h.history[today]
  ).length;

  const completion =
    totalHabits === 0
      ? 0
      : Math.round((completedToday / totalHabits) * 100);

  let bestHabit = "";

  let best = 0;

  habits.forEach((habit) => {

    const streak = currentStreak(habit.history);

    if (streak > best) {

      best = streak;

      bestHabit = habit.name;

    }

  });

  return (

    <div className="container">

      <h1>Insights Dashboard</h1>

      <div className="stats">

        <div className="card">

          <h2>{totalHabits}</h2>

          <p>Total Habits</p>

        </div>

        <div className="card">

          <h2>{completedToday}</h2>

          <p>Completed Today</p>

        </div>

        <div className="card">

          <h2>{completion}%</h2>

          <p>Completion</p>

        </div>

        <div className="card">

          <h2>{best}</h2>

          <p>Longest Current Streak</p>

        </div>

      </div>

      <div className="best-card">

        <h2>🏆 Best Habit</h2>

        <h3>{bestHabit || "No Habit Yet"}</h3>

      </div>

      <HeatMap habits={habits} />

    </div>

  );

}

export default Insights;