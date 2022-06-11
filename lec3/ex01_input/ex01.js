const onClick = () => {
  const inputElement = document.getElementsByClassName("ex01Item-input")[0]
  alert(inputElement.textContent)
  inputElement.textContent = ""
}

const buttonElement = document.getElementsByClassName("ex01Item-button")[0]
buttonElement.addEventListener('click', onClick)
console.log("hge")
alert('fuga')
