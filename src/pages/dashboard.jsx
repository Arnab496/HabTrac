import HabitCard from "../components/HabitCard";
import ProgressBar from "../components/ProgressBar";
import { useHabit } from "../context/HabitContext";
import "./Dashboard.css";
import Pomodoro from "../components/Pomodoro";
function Dashboard() {

    const {

        habits,

        toggleHabit,

        deleteHabit

    } = useHabit();

    const today = new Date().toISOString().split("T")[0];

    const completed = habits.filter(
        (habit) => habit.history[today]
    ).length;

    return (

        <div className="container">

            <h1>Habit Dashboard</h1>

            <ProgressBar

                completed={completed}

                total={habits.length}

            />

            <div className="dashboard-grid">

                {

                    habits.length === 0 ?

                        <h2>No Habits Added</h2>

                        :

                        habits.map((habit) => (

                            <HabitCard

                                key={habit.id}

                                habit={habit}

                                toggleHabit={toggleHabit}

                                deleteHabit={deleteHabit}

                            />

                        ))

                }

            </div>

        </div>

    );

}

export default Dashboard;