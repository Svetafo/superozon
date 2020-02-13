document.querySelector('.showAll').addEventListener('click', (e) => {
    document.querySelectorAll('.secondary').forEach((elem) => {
        elem.classList.toggle("invisible");
    })
    // elem.classList.contains("example")
});


document.querySelector('.check');
const el = addEventListener('submit', async (e) => {
    e.preventDefault();
    let arrChecked = [];

    const rad = document.getElementsByClassName('radio');
    console.log(rad);
    for (let i = 0; i < rad.length; i++) {
        if (rad[i].checked) {
            arrChecked.push(rad[i].name)
        }
    }
    console.log(arrChecked);
    const res = await fetch('result', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ arrChecked }),
    });
});
