let x=[];
function menu(x){
    let c;
    console.log("Choose an option:\n1. Add task\n2. View tasks\n3. Delete task\n4. Exit");
    c=parseint(c("Enter your choice(1=4):"));
switch(c){
    case 1:
        let t=prompt("1. Add task");
        t.push(t);
        break;

    case 2:
        if (tasks.length === 0) {
            console.log("No tasks available.");
        } else {
            console.log("Tasks:");
            tasks.forEach((task, index) => {
                console.log(`${index}: ${task}`);
            });
        }
        break;

    case 3:
        let taskIndex = parseInt(prompt("Enter task index to delete:"));
                if (taskIndex >= 0 && taskIndex < tasks.length) {
                    tasks.splice(taskIndex, 1); // Remove task from array
                    console.log("Task deleted.");
                } else {
                    console.log("Invalid index.");
                }
                break;


                console.log("Exiting...");
                break;

            default:
                console.log("Invalid option! Please choose a valid option (1-4).");
                break;
        }
    } while (choice !== 4); // Loop until user chooses to exit
}

// Call the menu function to start the process
menu();