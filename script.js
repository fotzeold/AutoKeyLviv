const burgerBtn = document.querySelector(".burger");
const headerNav = document.querySelector(".header__menu");
const body = document.querySelector("body");

let startX = 0;
let endX = 0;

burgerBtn.addEventListener("click", toggleBurgersClasses);

headerNav.addEventListener("touchstart", (event) => {
	startX = event.touches[0].clientX; // Зберігаємо початкову позицію свайпу
});

headerNav.addEventListener("touchmove", (event) => {
	endX = event.touches[0].clientX; // Оновлюємо кінцеву позицію пальця
});

headerNav.addEventListener("touchend", () => {
	// Перевірка: різниця повинна вказувати на свайп справа наліво
	if (startX - endX > 50) { // 50px — мінімальна відстань для свайпу
		closeMenu();
	}
});

function toggleBurgersClasses() {
	burgerBtn.classList.toggle("active");
	headerNav.classList.toggle("active");
	body.classList.toggle("active-modal");
}

function closeMenu() {
	burgerBtn.classList.remove("active");
	headerNav.classList.remove("active");
	body.classList.remove("active-modal");
}

AOS.init();