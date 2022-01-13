const mainInput = document.querySelector('.main__item');
const btn = document.querySelector('.sad');
const newBlock = document.querySelector('.new-block');

mainInput.addEventListener('keyup', function(event){
	if(event.keyCode === 13) {
		createNewNote()
	}
})

function createNewNote() {
	// create new div
	const newDiv = document.createElement('div');
	newDiv.classList.add('new-item');
	newBlock.insertBefore(newDiv, newBlock.firstElementChild);

	// create checkbox in div
	const newChkInput = document.createElement('input');
	newChkInput.type = "checkbox";
	newChkInput.classList.add('chk-item');
	newDiv.appendChild(newChkInput);
	newChkInput.addEventListener('click', function(){
		newChkInput.hidden = true
		newTextInput.classList.add('strike');
		newTextInput.disabled = true

	})

	// create text input in div
	const newTextInput = document.createElement('input');
	newTextInput.type = "text";
	newTextInput.value = mainInput.value;
	newTextInput.classList.add('input-item');
	newTextInput.readOnly = true
	newTextInput.addEventListener('focusin', function() {
		newTextInput.readOnly = false;
		newTextInput.addEventListener('focusout', function(){
			newTextInput.readOnly = true;
		})
	})
	newDiv.appendChild(newTextInput)

	// create delete btn in div
	const delBtn = document.createElement('input');
	delBtn.type="button";
	delBtn.classList.add('button')
	delBtn.value = 'x';
	newDiv.appendChild(delBtn);
	delBtn.addEventListener('click', function() {
		newBlock.removeChild(newDiv);
	})

	mainInput.value = ""
}

function getInputName(){
	return mainInput.value
}

