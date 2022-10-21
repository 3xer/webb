<<<<<<< HEAD

const input = document.querySelector("input");
const addBtn = document.querySelector(".addButton");
const list = document.querySelector("ul");
const amt = document.querySelector("p");
const msg = document.querySelector(".msg");
const del = document.querySelector(".trash");
const todoArray = [];
var arrayId = 0;
var completed = 0;

addBtn.addEventListener(
    "click", 
    function(){
        let text = input.value;
    
        if(text.length == 0){
            //empty input
            msg.innerHTML = "Input must not be empty";
            msg.setAttribute("id", "blink")
            return;
        }
        else{
            msg.innerHTML = "";
            msg.setAttribute("id", "")
        }
    
        // creating elements for the array like li to divide the inputs and buttons with class = delButton to be able to delete tasks.
        todoArray.push(text);

        //check and delete buttons and the span that contains the task
        const item = document.createElement("li");
        const itemLable = document.createElement("span");
        const delButton = document.createElement("img");
        //const checkButton = document.createElement("button");

        //putting the text/task in the span element (itemLable == 'span')
        itemLable.innerHTML = text;

        list.appendChild(item);
        item.appendChild(itemLable);
        item.appendChild(delButton);
        //item.appendChild(checkButton);

        //adding class and id for the buttons to be able to both call them induvidually and the check and delete button together
        delButton.setAttribute("id", "delButton");
        delButton.setAttribute("src", "wastebasket.png");
        delButton.setAttribute("class", "checkNdel"); 
        //checkButton.setAttribute("id", "checkButton");
        //checkButton.setAttribute("class", "checkNdel" )
    
        //marks the task as competed and gives the task the class "completed" to change the style
        itemLable.addEventListener(
             "click",
            function() {
                if(itemLable.getAttribute("class") == "completed"){
                    itemLable.setAttribute("class", "");
                    completed--;
                    amt.innerHTML = completed + " completed";
                }
                else{
                    itemLable.setAttribute("class", "completed");
                    completed++;
                    amt.innerHTML = completed + " completed";
                }
            }
        )
    
    //deletes a task (the task nexto the button)
    delButton.addEventListener(
        "click",
        function(){
            item.parentNode.removeChild(item)
            /*itemLable.setAttribute("class", "")*/
            if(itemLable.getAttribute("class") == "completed"){
                completed--;
            }
            if(completed < 0){
                completed = 0;
            }
            amt.innerHTML = completed + " completed";
        }
    )
}
)
=======

const input = document.querySelector("input");
const addBtn = document.querySelector("button");
const list = document.querySelector("li");
//const amt = document.querySelector("p");
var completed = 0;
//const msg = document.querySelector(".msg");
const todoArray = [];
document.querySelector("p").innerHTML = completed + " completed";

addBtn.addEventListener("click", 
    
function(){
    let text = input.value;
    if(text.length == 0){
        //felmeddelande
        document.querySelector("small").innerHTML = "du måste skriva något";
        return;
        }
    else{
        document.querySelector("small").innerHTML = "";
    }
    todoArray.push(text);
    const item = document.createElement("li");
    list.appendChild(item)
    
    

    const itemLable = document.createElement("span");
    itemLable.innerHTML = text;

    item.appendChild(itemLable);

    itemLable.addEventListener(
        "click",
        
            function() {
            
            if(item.getAttribute("class") == "completed"){
            item.setAttribute("class", "")
            completed--;
            document.querySelector("p").innerHTML = completed + " completed";
            }
            else{
                item.setAttribute("class", "completed")
                completed++;
                document.querySelector("p").innerHTML = completed + " completed";
                
                /*for (var i = 0; i == lenlist; i){
                    lenlist++;
                    console.log("hellloooooo");
                    console.log(todoArray.length);
                    console.log(lenlist=todoArray.length);
                }*/
            }
        }
    )
}
)
>>>>>>> 5df3c1ec011b1417da39be842bda7f701d9319e9
