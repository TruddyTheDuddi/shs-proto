/**
 * Create a class for a list of textareas that have a dynamic height
 * and expose a method to refresh all of them
 * @param {HTMLTextAreaElement} txtAreas
 */
class FancyTextareas {
    constructor(txtAreas){
        this.txtAreas = txtAreas;
        this.setup();
    }

    setup(){
        this.txtAreas.forEach(t => {
            t.setAttribute("autocomplete", "off");
            t.style.height = t.scrollHeight + "px";
            t.style.boxSizing = "border-box";
            t.style.overflowY = "hidden";
            t.addEventListener("input", () => { FancyTextareas.refresh(t); }, false);
        });
    }

    static refresh(txtArea){
        txtArea.style.height = "auto";
        txtArea.style.height = (txtArea.scrollHeight) + "px";
    }

    refreshAll(){
        this.txtAreas.forEach(t => {
            FancyTextareas.refresh(t);
        });
    }
}

// Create a new instance of FancyTextareas and setup all textareas
let textAreas = new FancyTextareas(Array.from(document.getElementsByTagName("textarea")));
document.fonts.ready.then(function () {
    textAreas.refreshAll();
});


// Create focus effect on areadbox
let areaBox = document.getElementById("resp");
let responses = document.getElementsByClassName("prev");

areaBox.addEventListener("focus", function(){
    Array.from(responses).forEach(r => {
        r.classList.add("blur");
    });
});

areaBox.addEventListener("blur", function(){
    Array.from(responses).forEach(r => {
        r.classList.remove("blur");
    });
});