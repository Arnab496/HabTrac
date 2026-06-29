import "./HeatMap.css";

function HeatMap({ habits }) {

  const days = [];

  const today = new Date();

  for (let i = 41; i >= 0; i--) {
    const d = new Date();
    d.setDate(today.getDate() - i);

    const key = d.toISOString().split("T")[0];

    let completed = 0;

    habits.forEach((habit) => {
      if (habit.history[key]) completed++;
    });

    days.push({
      date: key,
      completed,
    });
  }

  return (
    <div>

      <h2>Consistency Grid</h2>

      <div className="heatmap">

        {days.map((day, index) => (

          <div
            key={index}
            className={`cell level-${Math.min(day.completed,4)}`}
            title={`${day.date} : ${day.completed} completed`}
          ></div>

        ))}

      </div>

    </div>
  );

}

export default HeatMap;