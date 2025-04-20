import { useState } from 'react';

const useTimers = () => {
  const [timers, setTimers] = useState([]);

  const addTimer = (title, project) => {
    const newTimer = {
      id: Date.now(),
      title,
      project,
      elapsed: 0,
      isActive: false,
      intervalId: null,
    };
    setTimers([...timers, newTimer]);
  };

  const editTimer = (id, updatedTitle, updatedProject) => {
    setTimers(timers.map(timer => 
      timer.id === id ? { ...timer, title: updatedTitle, project: updatedProject } : timer
    ));
  };

  const startTimer = (id) => {
    const timer = timers.find(timer => timer.id === id);
    if (timer && !timer.isActive) {
      const intervalId = setInterval(() => {
        setTimers(timers => 
          timers.map(t => 
            t.id === id ? { ...t, elapsed: t.elapsed + 1 } : t
          )
        );
      }, 1000);
      setTimers(timers.map(t => 
        t.id === id ? { ...t, isActive: true, intervalId } : t
      ));
    }
  };

  const stopTimer = (id) => {
    const timer = timers.find(timer => timer.id === id);
    if (timer && timer.isActive) {
      clearInterval(timer.intervalId);
      setTimers(timers.map(t => 
        t.id === id ? { ...t, isActive: false, intervalId: null } : t
      ));
    }
  };

  const deleteTimer = (id) => {
    const timer = timers.find(timer => timer.id === id);
    if (timer && timer.isActive) {
      clearInterval(timer.intervalId);
    }
    setTimers(timers.filter(timer => timer.id !== id));
  };

  return {
    timers,
    addTimer,
    editTimer,
    startTimer,
    stopTimer,
    deleteTimer,
  };
};

export default useTimers;