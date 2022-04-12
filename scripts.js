var dropdown = document.getElementsByClassName("dropdownbutton");

//add a onclick function to each button marked "dropdownbutton" that collapses the previous div    
for (let i = 0; i < dropdown.length; i++) {
    //rather than setting up each style in the div itself, do it automatically here (more scalable)
    let x = dropdown[i].nextElementSibling;
    x.style.visibility = "collapse";
    x.style.maxHeight = "0px";

    dropdown[i].addEventListener("click", function() {
        var x = dropdown[i].nextElementSibling;
        var buttonTitle = dropdown[i].innerHTML;

        if (x.style.visibility === "collapse") {
            x.style.visibility = "";
            x.style.maxHeight = "initial";
            dropdown[i].innerHTML = "Hide " + buttonTitle;
        } else {
            x.style.visibility = "collapse";
            x.style.maxHeight = "0px";
            dropdown[i].innerHTML = buttonTitle.slice(5);
        }
    });
}