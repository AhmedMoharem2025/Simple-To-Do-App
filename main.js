let inp = document.querySelector('.input');
let btn_add = document.querySelector('.btn-add');
let tasks = document.querySelector('.tasks');

inp.addEventListener('keyup', () => {
    btn_add.onclick = () => {
        // console.log(`Your Typed Is: ${inp.value}`);

        let task = document.createElement('div');
        let text = document.createElement('h3').innerText = inp.value;
        let btn_delete = document.createElement('input');
        task.className = 'task-div';
        btn_delete.className = 'btn-remove';
        btn_delete.value = 'Delete';
        task.append(text);
        task.append(btn_delete);
        tasks.appendChild(task).style.color = '#fff',fontWeight = '100', letterSpacing = '0.9px', textTransform = 'capitalize', fontSize = '1.3em';
        // document.writeln(div_style)
        
        // If Input Value Is = No Value Do This:
        if (inp.value === '') {
            btn_add.onclick = () => {
                console.log(`Your Typed Is: Not`);
            }
        }

        btn_delete.onclick = () => {
            task.remove(task)
        }
        inp.value = '';

        // Add Divs To Local Storage
        // localStorage.div = tasks.appendChild(task);

        // if (window.localStorage.getItem('div')) {
        //     tasks.appendChild = window.localStorage.getItem('div');
        // }
    }
})
