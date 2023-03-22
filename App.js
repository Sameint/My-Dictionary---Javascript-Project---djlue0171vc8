const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const btn1 = document.getElementById("search-btn");
const btn2 = document.getElementById("history-btn");

btn1.addEventListener("click", () => {
  var inpWord = document.getElementById("inp-word").value;
  fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var oldData = localStorage.getItem("history");
      if (oldData) {
        oldData = JSON.parse(oldData);
        oldData.push(data);
      } else {
        oldData = [];
        oldData.push(data);
      }
      localStorage.setItem("history", JSON.stringify(oldData));
      result.innerHTML = `
             <div class="word">
                    <h3>${inpWord}</h3>
            </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/${data[0].phonetic}/</p>
                </div>
                <p class="word-meaning">
                   ${data[0].meanings[0].definitions[0].definition}
                </p>
               
                <p class="word-example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p> 
                <br>  <button class="delete" onclick="dele()" style="color:red;margin-left:80%">Delete</button> `;
    })
    .catch(() => {
      result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>
            <button class="delete" onclick="dele()" style="color:red; margin-left:80%">Delete</button>`;
    });
});

function dele() {
  if (result.innerHTML != "") {
    result.innerHTML = "";
    localStorage.removeItem("word");
  }
}
btn2.addEventListener("click", () => {
  var inpWord = document.getElementById("inp-word").value;
  var allDiv = "";
  var old = localStorage.getItem("history");
  old = JSON.parse(old);
  old.forEach((data) => {
    allDiv =
      allDiv +
      `
             <div class="word">
                    <h3>${inpWord}</h3>
            </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/${data[0].phonetic}/</p>
                </div>
                <p class="word-meaning">
                   ${data[0].meanings[0].definitions[0].definition}
                </p>
               
                <p class="word-example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p> 
                <br>  <button class="delete" onclick="dele()" style="color:red;margin-left:80%">Delete</button> `;
  });
  result.innerHTML = allDiv;
});
