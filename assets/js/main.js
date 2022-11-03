window.addEventListener('load',()=>{

    
    const form_n =document.querySelector('#new-form');
    const input_n = document.querySelector('#new-input');
    const list = document.querySelector('#tasks');

    form_n.addEventListener('submit',(e)=>{
        e.preventDefault();

        const task = input_n.value;
        if(!task){
            alert('Please Write Your Task');
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add('task');

        const content_el = document.createElement("div");
        content_el.classList.add('content');

        task_el.appendChild(content_el);

        const input_el = document.createElement("input");
        input_el.classList.add("text");
        input_el.type = "text";
        input_el.value= task;
        input_el.setAttribute("readonly","readonly");

        content_el.appendChild(input_el)


        const btn_el = document.createElement("div");
        btn_el.classList.add("btn");

        const edit_el =document.createElement("button");
        edit_el.classList.add("edit");
        edit_el.innerHTML = "Edit";

        const delete_el = document.createElement("button");
        delete_el.classList.add("delete");
        delete_el.innerHTML = "Delete"

        btn_el.appendChild(edit_el);
        btn_el.appendChild(delete_el);

        task_el.appendChild(btn_el);


        list.appendChild(task_el);

        input_n.value ="";

        edit_el.addEventListener('click', ()=>{
            if(edit_el.innerText.toLowerCase() =="edit"){
                input_el.removeAttribute("readonly");
                input_el.focus();
                edit_el.innerText = "Save";
            } else{
                input_el.setAttribute("readonly","readonly");
                edit_el.innerText = "Edit";
            }
        });


        delete_el.addEventListener('click', ()=>{
            list.removeChild(task_el)
        });
    })
})