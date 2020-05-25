var i = 1;
var j = 0;


function addNote() {
    //var element=document.getElementById("NotePage"); kept for reference purposes only

    i = i + 1;
    var obj = document.createElement('div');
    obj.setAttribute("id", i);
    obj.setAttribute("class", "col-xs-12 col-sm-6 col-md-4 col-lg-3 note");


    obj.innerHTML =
        `
    
        <div class="card">
            <div class="card-body">
                <h5 class="card-title" contenteditable="true">Enter title here</h5>
                <p class="card-text" contenteditable="true">Enter content here</p>
                <button onclick="deleteNote(this.parentElement.parentElement.parentElement)" type="button" class="btn btn-primary">Delete</button>
                <button onclick="colorChanger(this.parentElement.parentElement)" type="button" class="btn btn-primary">Color</button>
            </div>
        </div>
    
    `;

    document.body.children[1].children[0].appendChild(obj);

}

function deleteNote(oppa) {
    oppa.remove();
}


var m = 1;

function colorChanger(oppa) {


    switch (m) {
        case 1:
            oppa.style.backgroundColor = "#fc7676";
            ++m;
            break;
        case 2:
            oppa.style.backgroundColor = "#93fc76";
            ++m
            break;
        case 3:
            oppa.style.backgroundColor = "#f9a4f4";
            ++m;
            break;
        case 4:
            oppa.style.backgroundColor = "#8afcfc";
            ++m;
            break;
        case 5:
            oppa.style.backgroundColor = "#c397fc";
            ++m;
            break;
        case 6:
            oppa.style.backgroundColor = "#fcc867";
            ++m;
            break;
        case 7:
            oppa.style.backgroundColor = "#8d9ffc";
            ++m;
            break;
        case 8:
            oppa.style.backgroundColor = "white";
            ++m;
            break;
    }

    if (m == 9) m = 1;
}

var q = 1;

function darkMode() {
    if (q % 2 == 1) {
        document.body.style.background = "#3c3f42";
        document.getElementById("darkmode").innerHTML = "LightMode";
    } else {
        document.body.style.background = "#dadbdb";
        document.getElementById("darkmode").innerHTML = "DarkMode";
    }
    q++;
}