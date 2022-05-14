const dialogue = document.getElementById('textDialogue')

const rainbow_colors = ["#F00","#F20","#F40","#F60","#F80","#FA0","#FC0","#FE0","#EF0","#CF0","#AF0","#8F0","#6F0","#4F0","#2F0"]

function calcRainbow(input) {
	const r = "D"
	const g = (input % 16).toString(16)
	const b = "0"
	return "#" + r + g + b
}

function writeDialogueText(string) {
	return new Promise(resolve => {
		let writtenLetters = 0;
		dialogue.innerHTML = ""
		const interval = setInterval(function() {
			if (string[writtenLetters] == " ") {
				writtenLetters ++;
				dialogue.innerHTML += " "
			}
			dialogue.innerHTML += `<span style="text-shadow:4px 0px ${calcRainbow(writtenLetters)}">${string[writtenLetters]}</span`
			writtenLetters ++;
			if (writtenLetters == string.length) {
				clearInterval(interval);
				setTimeout(resolve, 1000)
			}
		}, 100);
	});
}

async function startDialogueProcess() {
	await writeDialogueText("Hello there")
	await writeDialogueText("Cool animation")
	await writeDialogueText("Look at him go")
	await writeDialogueText("Aight thanks")
}

startDialogueProcess();