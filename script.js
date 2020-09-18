let addBtn = document.getElementById("add-btn")
let taskInputNode = document.getElementById("js-taskInput")
const taskList = document.getElementById("js-taskList")


// Add a new task to the list + close button
function addTaskToTheList() {
  const taskInput = taskInputNode.value
  if (taskInput !== "") {
    let li = document.createElement("li")
    let textNode = document.createTextNode(taskInput)
    li.appendChild(textNode)
    taskList.appendChild(li)
    taskInputNode.value = ""

    let span = document.createElement("span")
    let txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    li.appendChild(span)

    let close = document.getElementsByClassName("close")
    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        let parent = this.parentElement
        parent.remove()
      }
    }
  }

}

// Event Listener for click and enter
addBtn.addEventListener("click", addTaskToTheList)
taskInputNode.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    addTaskToTheList()
  }
})



// Check task  
let list = document.querySelector('ul')
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked')
  }
});