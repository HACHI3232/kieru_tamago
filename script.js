document.getElementById("completeTask").addEventListener("click", function() {
  var task = document.getElementById("task");
  var egg = document.getElementById("egg");
  task.classList.add("moveToEgg");
  egg.classList.add("bounce");

  setTimeout(function() {
      egg.classList.remove("bounce"); // 卵のアニメーションをリセット
  }, 300); // 卵のアニメーション時間に合わせる
});

document.getElementById("resetTask").addEventListener("click", function() {
  var task = document.getElementById("task");
  task.classList.remove("moveToEgg");
});
