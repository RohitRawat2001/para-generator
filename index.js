const input = document.getElementById("numberOfWords");
const container = document.querySelector(".container")

const generateWords = (n) => {
    let text = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < n; i++) {
        const random = (Math.random() * 25).toFixed(0);
        text += letters[random];
    }

    return text;
}



let numberOfWords;
const generatePara = () => {
    numberOfWords = Number(input.value);

    const para = document.createElement("p");

    let data = "";

    for (let i = 0; i < numberOfWords; i++) {
        const randomNumber = (Math.random() * 10).toFixed(0);
        data += generateWords(randomNumber);
        data += " "
    }

    para.innerText = data

    para.setAttribute("class", "paras");

    container.append(para);

}