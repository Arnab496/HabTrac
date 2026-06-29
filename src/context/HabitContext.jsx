import { createContext, useContext, useEffect, useState } from "react";

const HabitContext = createContext();

export const HabitProvider = ({ children }) => {

  const [habits, setHabits] = useState(() => {

    const saved = localStorage.getItem("habits");

    return saved ? JSON.parse(saved) : [];

  });

  useEffect(() => {

    localStorage.setItem("habits", JSON.stringify(habits));

  }, [habits]);

  const addHabit = (habit) => {

    setHabits([...habits, habit]);

  };

  const deleteHabit = (id) => {

    setHabits(habits.filter((habit) => habit.id !== id));

  };

  const toggleHabit = (id) => {

    const today = new Date().toISOString().split("T")[0];

    setHabits(

      habits.map((habit) => {

        if (habit.id !== id) return habit;

        return {

          ...habit,

          history: {

            ...habit.history,

            [today]: !habit.history?.[today]

          }

        };

      })

    );

  };

  return (

    <HabitContext.Provider

      value={{

        habits,

        addHabit,

        deleteHabit,

        toggleHabit

      }}

    >

      {children}

    </HabitContext.Provider>

  );

};

export const useHabit = () => useContext(HabitContext);