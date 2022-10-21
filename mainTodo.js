
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
