let changeText = async textArr => {

    let textEl = textArr.shift();
    textEl.style.opacity = "0";
    console.log("before")
    await new Promise(r => setTimeout(r, 1500));
    console.log("after")
    textEl.style.display = "none";
    await new Promise(r => setTimeout(r, 50));
    textArr.push(textEl);

    let nextTextEl = textArr[0];
    nextTextEl.style.display = "block";
    await new Promise(r => setTimeout(r, 50));
    nextTextEl.style.opacity = "1";
}

