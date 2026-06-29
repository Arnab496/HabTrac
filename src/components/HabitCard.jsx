import { currentStreak, longestStreak } from "../utils/streak";

function HabitCard({ habit, toggleHabit, deleteHabit }) {

    const today = new Date().toISOString().split("T")[0];

    return (

        <div className="habit-card">

            <div
                className="color-box"
                style={{ background: habit.color }}
            ></div>

            <h2>{habit.name}</h2>

            <p>
                <strong>Category:</strong> {habit.category}
            </p>

            <p>
                <strong>Frequency:</strong> {habit.frequency}
            </p>

            <p>
                <strong>Current Streak:</strong>{" "}
                {currentStreak(habit.history)}
            </p>

            <p>
                <strong>Longest Streak:</strong>{" "}
                {longestStreak(habit.history)}
            </p>

            <div className="btn-group">

                <button
                    className="complete-btn"
                    onClick={() => toggleHabit(habit.id)}
                >
                    {habit.history[today]
                        ? "Completed ✓"
                        : "Mark Complete"}
                </button>
                <button>

                    Use Freeze

                </button>

                <button
                    className="delete-btn"
                    onClick={() => deleteHabit(habit.id)}
                >
                    Delete
                </button>
                

            </div>

        </div>

    );
}

export default HabitCard;