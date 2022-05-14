const dialogue = document.getElementById('textDialogue')

function writeDialogueText(string) {
	let writtenLetters = 0;
	dialogue.innerHTML = ""
	const interval = setInterval(function() {
		if (string[writtenLetters] == " ") {
			writtenLetters ++;
			dialogue.innerHTML += " "
		}
		dialogue.innerHTML += `<span>${string[writtenLetters]}</span`
		writtenLetters ++;
		if (writtenLetters == string.length) {
			clearInterval(interval);
		}
	}, 100);
}

writeDialogueText("Hello there")