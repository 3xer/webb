
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
