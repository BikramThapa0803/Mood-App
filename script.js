const moods = document.querySelectorAll(".moodbtn");
let selectedMood = "";

moods.forEach(moodbtn => {
    moodbtn.addEventListener("click", () => {
        moods.forEach(moodbtn => moodbtn.classList.remove('selected'))
        moodbtn.classList.add('selected')
        selectedMood = moodbtn.textContent
    });
});



const entries = []

document.getElementById("addentry").addEventListener("click", function () {

    const note = document.getElementById("note").value;

    // if (!selectedMood) {
    //     alert("Please write a note!")
    //     return;
    // }



    if (note.trim() === "") {
        alert("Please write a note!")
        return;
    }

    const entry = { mood: selectedMood, note }
    entries.push(entry)

    const listitem = document.createElement("li")
    listitem.textContent = `${entry.mood} ${entry.note}`
    // listitem.style.listStyleType = "none"
    listitem.classList.add("entry-item");
    document.getElementById("entrylist").appendChild(listitem)

    document.getElementById("note").value = "";
})




let clearbutton = document.getElementById("clearall")


clearbutton.addEventListener("click", function () {
    let list = document.getElementById("entrylist");
    list.innerHTML = ""
})

let happybutton = document.getElementById("happy")

happybutton.addEventListener("click", function () {
    const onlyhappy = document.getElementById("entrylist");
    const itemlist = onlyhappy.querySelectorAll("li")

    itemlist.forEach(item => {
        let li = item.textContent

        if (li.startsWith("😊")) {
            item.style.display = "block"
        } else {
            item.style.display = "none"
        }
    });
})
