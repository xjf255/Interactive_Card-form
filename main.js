console.log("how a new old man");

const d = document,
    $form = d.getElementById("form"),
    $submit = d.getElementById("submit"),
    $titular = d.getElementById("titular"),
    $number = d.getElementById("number"),
    $cvc = d.getElementById("cvc"),
    $time = d.getElementById("time"),
    $process = d.querySelector(".process"),
    $success = d.querySelector(".success");
let styleNumber = "",
monthvalue,
yearvalue;
//errors form
const errorNumber = `<p class="error">Wrong Format, numbers only</p>`,
    errorInputs = `<p class="error">Can´t be blank</p>`,
    month = "00",
    year = "00";

function validationName(text = null) {
    if (/^[a-zA-Z\s]+$/.test(text)) {
        $form.name.classList.remove('bdError');
        $titular.textContent = text
        return text
    } else {
        $form.name.classList.add('bdError');
        return false
    }
}

function validationNumber(number,camp,txt) {
    if (/^[0-9\s]+$/.test(number) && number != "") {
        // number = splitNumber(number)
        camp.classList.remove('bdError');
        return true
    } else {
        camp.classList.add('bdError');
        camp.insertAdjacentHTML('afterend', txt);
        return false
    }

}

function splitNumber(number) {
    let num = number.replace(/\s/g, "");
    styleNumber = num.replace(/\d{4}(?=\d)/g, '$& ');

    return styleNumber;
}


function ValidationComplete(part) {
    part.value !== '' ? true : console.log(false);
}
d.addEventListener("keyup", e => {
    if (e.target === $form.number) {
        $form.number.value = splitNumber($form.number.value)
        validationNumber($form.number.value, $form.number, errorNumber) ? true : $number.textContent = "0000 0000 0000 0000";
    }
    if (e.target === $form.numberCvc) {
        validationNumber($form.numberCvc.value, $form.numberCvc, errorInputs) ? true : $cvc.textContent = "000";
    }
    if (e.target === $form.month || e.target === $form.year) {
        validationNumber($form.month.value, $form.month, errorInputs) ? monthvalue = $form.month.value: monthvalue = "00";
        validationNumber($form.year.value, $form.year, errorInputs) ? yearvalue = $form.year.value : yearvalue = '00' ;
    }
})
d.addEventListener("submit", e => {
    // validaciones
    e.preventDefault();
    validationName($form.name.value)
    $number.textContent = styleNumber;
    $cvc.textContent = $form.numberCvc.value;
    $time.textContent = `${monthvalue || month}/${yearvalue || year}`;
    $process.classList.toggle("--none");
    $success.classList.toggle("--none");
})