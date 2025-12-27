const habits = [
  { name: 'Meditation', done: true },
  { name: 'Gym', done: false },
  { name: 'Study', done: true },
  { name: 'Journal', done: false },
];

const completedHabits = habits.filter((habit) => {
  return habit.done === true;
});

console.log(completedHabits);

// Output: return just habits done
// [
//   { name: 'Meditation', done: true },
//   { name: 'Study', done: true }
// ]
