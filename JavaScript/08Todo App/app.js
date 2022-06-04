const addNewTaskCategoryBtn = document.getElementById("addNewTaskCategoryBtn");
// new Category

let flag = true;

addNewTaskCategoryBtn.addEventListener('click', function () {
    const addNewTaskCategory = document.getElementById("addNewTaskCategory");
    const categoryUl = document.getElementById("categoryUl");
    const categoryName = addNewTaskCategory.value;
    if (categoryName.length <= 20 && categoryName.length >= 5) {
        const categoryLi = document.createElement("li");
        categoryLi.classList = "categoryLi";
        categoryLi.innerText = categoryName;
        categoryUl.appendChild(categoryLi);
        addNewTaskCategory.value = "";
        // addStyleAtFirstLi();
        addLiStyle();
    } else {
        alert(`length must be 5 char to 20 char.`);
        console.log(categoryName.length);
        addNewTaskCategory.value = "";
    }
});
const categoryLi = document.querySelector("#categoryUl");



function addLiStyle(e) {
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
            // e.classList = 'categoryLi activeTaskList';
        }
    }
}

function addToTaskBar(e) {
    addLiStyle();
    const liName = e.target;
    const liValue = liName.innerText;
    const styles = getComputedStyle(liName)
    const bgColor = styles.backgroundColor;
    console.log(`bgColor : ${bgColor}`);

    const allTaskTitle = document.querySelector("#ulTitle");
    allTaskTitle.innerText = liValue;
    allTaskTitleParent = allTaskTitle.parentElement;
    allTaskParent = allTaskTitleParent.parentElement;
    allTaskParent.parentElement.style.border = `5px solid ${bgColor}`;
    // console.log(liValue)
}

// function addStyleAtFirstLi() {
//     if (flag) {
//         console.log("Hello");
//         let li = document.getElementsByClassName('categoryLi');
//         for (let i = 0; i < li.length; i++) {
//             li[i].onclick = function () {
//                 let n = li[0];
//                 n.classList = 'categoryLi activeTaskList';
//             }
//             flag = false;
//         }
//     };
// }
categoryLi.addEventListener('click', addToTaskBar);