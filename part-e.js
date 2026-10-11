const movie = {
id: 41,
title: "Orbit",
genre: "Sci-Fi",
rating: 8.4
};
const {id,title,genre,rating}=movie;
console.log(`id: ${id} title: ${title} genre: ${genre} rating: ${rating}`);
const recommendedMovies = ["Orbit", "Ocean", "Skyline"];
const [firstMovie, secondMovie] = recommendedMovies;
console.log(firstMovie, secondMovie);
const user = {
  id: 7,
  name: "Dana Levi",
  email: "dana@example.com",
  isActive: true
};
const formatUser = ({n, email} )  =>
{
  return `${n} - ${email}`;
}
console.log(formatUser(user));
const getUserStatu =(na, isActive)=>
{
    return `name: ${na} activity ${isActive}`;
}
const player = {
  id: 1,
  nickname: "Noni",
  score: 1200,
  level: 8
};

const comments = [
  { id: 1, user: "Noa", text: "Great game!", likes: 12 },
  { id: 2, user: "Dan", text: "Well played", likes: 7 }
];

const newComment = {
  id: 3,
  user: "Maya",
  text: "Amazing score!",
  likes: 0
};
const updatedPlayer ={
    ...player,
    score: 1350
};
console.log( updatedPlayer);
const commentsAfterAdd=[
    ...comments,
    newComment
];
console.log( player);
console.log( newComment);
console.log( comments);
console.log(commentsAfterAdd);
const sameReference = player;////מאותו המקום בזיכרון כל שינוי ישנה את המקור 
const copiedPlayer = { ...player };///העתקה של האובייקט לא משנה אותו
const tasks = [
  { id: 1, title: "Write tests", completed: false, priority: "high" },
  { id: 2, title: "Update profile", completed: true, priority: "low" },
  { id: 3, title: "Fix login", completed: false, priority: "high" }
];
const removeTaskById =(tasks,id )=>
{
    const filtered = tasks.filter( task=>id!==task.id );
}
const tasksAfterDelete= removeTaskById(tasks, 2);
console.log(tasksAfterDelete );
console.log(tasks );
