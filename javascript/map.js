const habits = [
  { name: 'Meditation', done: true },
  { name: 'Gym', done: false },
  { name: 'Study', done: true },
];

const result = habits.map((habit) => {
  //   if (habit.done) return 'ok';
  //   else return 'not';
  if (habit.done) return habit.name + 'ok';
  else return habit.name + 'not ok';
});

console.log(result);
