function Strength(password) {
	let i = 0
	if (password.length >= 4) {
		i++
	}
	if (password.length >= 8) {
		i++
	}
	if (password.length >= 10) {
		i++
	}
	if (/[A - Z]/.test(password)) {
		i++
	}
	if (/[1 - 9]/.test(password)) {
		i++
	}
	if (/[A-Za-z0-3]/.test(password)) {
		i++
	}
	return i
}

const container = document.querySelector(".container")
document.addEventListener("keyup", e => {
	const password = document.querySelector("#myPassword").value

	let strength = Strength(password)
	if (strength <= 2) {
		container.classList.add("weak")
		container.classList.remove("medium")
		container.classList.remove("strong")
	} else if (strength >= 2 && strength <= 4) {
		container.classList.remove("weak")
		container.classList.add("medium")
		container.classList.remove("strong")
	} else {
		container.classList.remove("weak")
		container.classList.remove("medium")
		container.classList.add("strong")
	}
})

const pwd = document.querySelector("#myPassword")
const show = document.querySelector(".show")
show.onclick = function () {
	if (pwd.type === "password") {
		pwd.setAttribute("type", "text")
		show.classList.add("hide")
	} else {
		pwd.setAttribute("type", "password")
		show.classList.remove("hide")
	}
}
