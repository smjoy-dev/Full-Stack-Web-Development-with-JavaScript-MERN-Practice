let count = 1;


function add() {

    // input element select
    const input = document.getElementById('taskInput');

    // input value get
    const task = input.value;

    // empty check
    if(task === "") {

        alert("Please enter a task");

        return;

    }

    // li create
    const li = document.createElement('li');

    // task number + text add
    li.innerText = count + ". " + task;

    // delete button create
    const button = document.createElement('button');

    button.innerText = "Delete";

    // button style
    button.style.cssText = `
        background:red;
        color:white;
        padding:5px 10px;
        border:none;
        border-radius:5px;
        margin-left:10px;
        margin-top:5px;
        cursor:pointer;
    `;

    // delete click
    button.addEventListener('click', () => {

        // remove task
        li.remove();

        // count decrease
        count--;

    });

    // button add inside li
    li.appendChild(button);

    // li add inside ul
    document.querySelector('.list').appendChild(li);

    // input clear
    input.value = "";

    // next number
    count++;


}

// Enter press event
document.getElementById('taskInput')
.addEventListener('keydown', (e) => {

    // Enter check
    if(e.key === "Enter") {

        // add function call
        add();


    }


});

