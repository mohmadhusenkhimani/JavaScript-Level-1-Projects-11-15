let tasks  = [];
while(true){
    let choice = prompt(
        "To-Do List Menu:\n" +
        "1. Add Task\n" + 
        "2. Show All Tasks\n" +
        "3. Delete Task\n" + 
        "4. Exit\n\n" +
        "Enter your choice (1-4): "
    );
    choice = parseInt(choice);
    if(choice === 1){
        let task = prompt("Enter your task: ");
        tasks.push(task);
        console.log("Task Added Successfully!");
    }
    else if(choice === 2){
        console.log("\n Your Task:");
        if(tasks.length === 0){
            console.log("No tasks available");
        }
        else{
            for(let i=0; i< tasks.length; i++){
                console.log((i+1) + ". " + tasks[i]);
            }
        }
        console.log("-----------------------------------");
    }
    else if(choice === 3){
        let d = prompt("Enter task number to Delete: ");
        d = parseInt(d);

        if(d >= 1 && d <= tasks.length){
            tasks.splice(d - 1,1); 
            console.log("Task Deleted Succeddfully!");
        }
        else{
            console.log("Invalid Task Number");
        }
    }
    else if(choice == 4){
        console.log("Exiting To-Do App... Thank You!");
        break;
    }
    else{
        console.log("Invalid choice! Please select 1 to 4.");
    }
}