const addNewTaskCategoryBtn = document.getElementById("addNewTaskCategoryBtn");
// new Category

let flag = false;

addNewTaskCategoryBtn.addEventListener('click', function () {
    const addNewTaskCategory = document.getElementById("addNewTaskCategory");
    const categoryUl = document.getElementById("categoryUl");
    const categoryName = addNewTaskCategory.value;
    const categoryLi = document.createElement("li");
    categoryLi.classList = "categoryLi";
    categoryLi.innerText = categoryName;
    categoryUl.appendChild(categoryLi);
    addNewTaskCategory.value = "";
    if (flag == false) {
        flag = true;
    };
});
const categoryLi = document.querySelector("#categoryUl");





function addToTaskBar(e) {
    let li = document.getElementsByClassName('categoryLi');
    for (let i = 0; i < li.length; i++) {
        li[i].onclick = function () {
            let n = li[0];
            console.log(n);
            while (n) {
                if (n.classList[1] === 'activeTaskList') {
                    console.log(n);
                    n.classList.remove('activeTaskList');
                }
                n = n.nextSibling;
            }
            this.classList = 'categoryLi activeTaskList';
        }
    }
    const liName = e.target;

    const liValue = liName.innerText;
    let bgColor = liName.css;
    console.log(bgColor);

    const allTaskTitle = document.querySelector("#ulTitle");
    allTaskTitle.innerText = liValue;
    // console.log(liValue)
}
categoryLi.addEventListener('click', addToTaskBar);