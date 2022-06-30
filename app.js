console.log('Notes Application');

// able to add notes
// able to delete notes by clicking on ' Delete Note' button without loading the page.
// use the search box to filter the results based on the 'search' criteria (search functionality)
// pure plain JS project with framework (jQuery,etc)
// will be using bootstrap for front-end, local storage for the storing the notes.
// event listener to call the functions on the click of 'Add' and 'Delete' button
// JSON to stringify and parse the results back to an object.
// when the uses notes , add to the local storage



// let addButton = document.getElementById('addBtn');
// // Add an event listener when someone clicks on 'Add Note' Button.

// addButton.addEventListener("click", function (params) {
//  let addText = document.getElementById('addTxt');

//  let notes = localStorage.getItem("notes");

//  if(notes==null){
//    notesObj = []; // blank array to capture notes
//  }
//  else{
//    notesObj = JSON.parse(notes); // I am going to store my notes in an Array.
//  }

//  notesObj.push(addText.value); //Array method to add the notes in 'notesObj'
// //  update the local storage

// localStorage.setItem("notes", JSON.stringify(notesObj));
// // The above notesObj is an 'array' now but Stringify will convert this into a string.
// // We have to convert into string as we need to set as 'strings' in the local storage.
// addText.value = "";
// console.log(notesObj);

// })


let addButton = document.getElementById('addBtn');

addButton.addEventListener("click", function (params) {
    let addText = document.getElementById('addTxt');


    let notes = localStorage.getItem("notes");


    if (notes == null) {
        notesObj = [];
    }

    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addText.value);

    localStorage.setItem("notes", JSON.stringify(notesObj));

    addText.value = "";
    console.log(notesObj);

    showNotes();
})
// eventlistener ends here

function showNotes() {
    let notes = localStorage.getItem("notes");


    if (notes == null) {
        notesObj = [];
    }

    else {
        notesObj = JSON.parse(notes);
    }

    let html = '';

    notesObj.forEach(function (element, index) {

        html += `
    <div class="card my-2 mx-2 noteCard" style="width: 18rem;">

                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text">${element}</p>
                        <a href="#" class="btn btn-primary" id="${index}" onclick = "deleteNote (this.id)" >Delete Note</a>
                    </div>
                    
                </div>

    `;

    });

    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }

    else {
        notesElm.innerHTML = 'Nothing to show';
    }


}

function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = []; // blank array to capture notes
    }
    else {
        notesObj = JSON.parse(notes); // I am going to store my notes in an Array.
    }
    notesObj.splice(index, 1);

    // This will not work. BECAUSE?
    // the local storage is NOT updated.
    // We have read the local storage, made a local variable, and removed an element from it
    // Solution: NotesObj should go in the local storage.
    // i.e. we would need to update local storage again.

    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}


// Now, we would implement "Search" functionality
// Add an event listener on 'search'

let search = document.getElementById('SearchTxt');
search.addEventListener("input", function () {
    // console.log("Input event is firing");

    let inputVal = search.value;

    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardText = element.getElementsByTagName("p")[0].innerText;

        if (cardText.toLowerCase().includes(inputVal)) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
    })
})






// function showNotes(){
//     let notes = localStorage.getItem("notes");

//     if(notes==null){
//       notesObj = []; // blank array to capture notes
//     }
//     else{
//       notesObj = JSON.parse(notes); // I am going to store my notes in an Array.
//     }

//     let html = '';

//    notesObj.forEach(function(element, index){
//     //  Why below? To display all the notes inside the div "notes"
//     // ${element} -- whatever in the array will come here.
//     // index - to display note1, note 2, etc...

//       html += `
//       <div class="card my-2 mx-2 noteCard" style="width: 18rem;">

//       <div class="card-body">
//         <h5 class="card-title">Note${index+1}</h5>
//         <p class="card-text">${element}</p>
//         <button class="btn btn-primary">Delete Note</button>
//       </div>
//     </div>

//       `;
//    });

//    let notesElm = document.getElementById('notes');

//    if(notesObj.length!=0){
//     notesElm.innerHTML = html;
//    }


//   }
