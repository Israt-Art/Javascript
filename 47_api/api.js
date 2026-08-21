const url = "https://catfact.ninja/fact";

const factPara = document.querySelector("#factPara");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    console.log("getting data.....");

    const response = await fetch(url);
    const data = await response.json();

    factPara.innerHTML = data[2].text;
};

btn.addEventListener("click", getFacts);