/*
getElementById() → শুধু নাম
querySelector() → CSS rule (#id .class tag)
*/

// HTML element select kora hoy
const form = document.querySelector('#taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.querySelector('#taskList');


/*addEventListener: HTML element er event/action catch korar jonno use hoy*/
form.addEventListener('submit',(e) => {

    /*preventDefault: Form submit er por page reload bondho kore*/
    e.preventDefault();


    /*.value: Input field er text/value newar jonno use hoy*/
    const task = taskInput.value;


    /*createElement: JavaScript diye new HTML element create kore*/
    const li = document.createElement('li');


    /*innerText: Existing text replace kore new text set kore*/
    li.innerText = task;


    /*ul er moddhe li add kore*/
    taskList.appendChild(li);


    /*create button element dynamically*/
    const deleteBtn = document.createElement('button');


    /*Button er text set kora hoy*/
    deleteBtn.innerText = 'Delete';


    /*click event: Button click korle function execute hoy*/
    deleteBtn.addEventListener('click', () => {

        /*removeChild: Parent element theke child element remove kore*/
        taskList.removeChild(li);

    });

    /*appendChild: Parent er vitore child element add kore*/
    li.appendChild(deleteBtn);

    /*Input field clear kore*/
    taskInput.value = '';

    // form.reset(); // Form reset kore input field clear kore

});