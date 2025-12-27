const habits = [
  { name: 'Meditation', done: true },
  { name: 'Gym', done: false },
  { name: 'Study', done: true },
];

// ternary operator
const result = habits.map((habit) =>
  habit.done ? `${habit.name} ok` : `${habit.name} not ok`
);

// destructuring
// const result = habits.map(({ name, done }) =>
//   done ? `${name} ok` : `${name} not ok`
// );

console.log(result);
