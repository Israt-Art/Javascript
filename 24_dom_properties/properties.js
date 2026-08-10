/** `tagName` → returns the HTML tag name of an element.
* `innerText` → returns only the visible text inside an element.
* `textContent` → returns all text inside an element, including hidden text.
* `innerHTML` → returns the HTML code/content inside an element, including tags.
*/

function showProperties() {

    let title = document.getElementById("title");
    let para = document.getElementById("para");
    let box = document.getElementById("box");
    let result = document.getElementById("result");

    console.log("tagName:", title.tagName);

    console.log("innerText:", para.innerText);

    console.log("textContent:", para.textContent);

    console.log("innerHTML:", box.innerHTML);

    result.innerHTML = `
        <b>tagName:</b> ${title.tagName} <br><br>

        <b>innerText:</b> ${para.innerText} <br><br>

        <b>textContent:</b> ${para.textContent} <br><br>

        <b>innerHTML:</b> ${box.innerHTML}
    `;
}