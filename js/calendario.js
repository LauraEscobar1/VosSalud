const today = new Date();

let currentCalendarDate = new Date(
    2026,
    today.getMonth(),
    1
);

let selectedDate = new Date(
    2026,
    today.getMonth(),
    today.getDate()
);

function formatDate(date) {

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

function getStorageKey(date) {

    return `vozsalud-${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

}

function isCompleted(date) {

    return localStorage.getItem(
        getStorageKey(date)
    ) === "true";

}

function getHabitForDay(day) {

    const index = (day - 1) % habits.length;

    return habits[index];

}

function renderWeekdays() {

    const weekdaysContainer = document.getElementById("weekdays");

    if (!weekdaysContainer) {
        return;
    }

    weekdaysContainer.innerHTML =
        translations[currentLanguage].weekdays
            .map(day => `<span>${day}</span>`)
            .join("");

}

function renderCalendar() {

    const calendarGrid = document.getElementById("calendarGrid");
    const calendarMonth = document.getElementById("calendarMonth");

    if (!calendarGrid || !calendarMonth) {
        return;
    }

    renderWeekdays();

    const year = currentCalendarDate.getFullYear();
    const month = currentCalendarDate.getMonth();

    calendarMonth.textContent =
        `${getMonthName(month)} ${year}`;

    const firstDay = new Date(year, month, 1);

    let startingDay = firstDay.getDay();

    startingDay = startingDay === 0
        ? 6
        : startingDay - 1;

    const daysInMonth =
        new Date(year, month + 1, 0).getDate();

    const previousMonthDays =
        new Date(year, month, 0).getDate();

    calendarGrid.innerHTML = "";

    for (let i = startingDay - 1; i >= 0; i--) {

        const day = previousMonthDays - i;

        const emptyCell = document.createElement("div");

        emptyCell.className = "calendar-day other-month";

        emptyCell.innerHTML = `
            <span>${day}</span>
        `;

        calendarGrid.appendChild(emptyCell);

    }

    for (let day = 1; day <= daysInMonth; day++) {

        const date = new Date(
            year,
            month,
            day
        );

        const habit = getHabitForDay(day);

        const dayElement =
            document.createElement("button");

        dayElement.className = "calendar-day";

        if (
            date.getFullYear() === today.getFullYear() &&
            date.getMonth() === today.getMonth() &&
            date.getDate() === today.getDate()
        ) {
            dayElement.classList.add("today");
        }

        if (
            date.getFullYear() === selectedDate.getFullYear() &&
            date.getMonth() === selectedDate.getMonth() &&
            date.getDate() === selectedDate.getDate()
        ) {
            dayElement.classList.add("selected");
        }

        if (isCompleted(date)) {
            dayElement.classList.add("completed");
        }

        dayElement.innerHTML = `

            <span class="calendar-day-number">
                ${day}
            </span>

            <span
                class="calendar-habit-dot"
                style="background: ${getHabitColor(habit.color)}"
            ></span>

            ${
                isCompleted(date)
                    ? `
                        <span class="calendar-check">
                            <i data-lucide="check"></i>
                        </span>
                    `
                    : ""
            }

        `;

        dayElement.addEventListener(
            "click",
            () => selectCalendarDay(date)
        );

        calendarGrid.appendChild(dayElement);

    }

    const totalCells =
        startingDay + daysInMonth;

    const remainingCells =
        totalCells % 7 === 0
            ? 0
            : 7 - (totalCells % 7);

    for (let day = 1; day <= remainingCells; day++) {

        const emptyCell = document.createElement("div");

        emptyCell.className = "calendar-day other-month";

        emptyCell.innerHTML = `
            <span>${day}</span>
        `;

        calendarGrid.appendChild(emptyCell);

    }

    lucide.createIcons();

}

function getHabitColor(color) {

    const colors = {

        blue: "#8db8d8",
        green: "#a8c8b5",
        pink: "#e7a8bd",
        purple: "#b9a9d6",
        cyan: "#94c8cf",
        orange: "#e6b58b",
        teal: "#91c4bb",
        indigo: "#a6afd1",
        rose: "#ddb0bd",
        mint: "#9bc7b7"

    };

    return colors[color] || "#a8c8b5";

}

function selectCalendarDay(date) {

    selectedDate = date;

    const habit =
        getHabitForDay(date.getDate());

    updateSelectedHabit(
        habit,
        date
    );

    renderCalendar();

}

function updateSelectedHabit(
    habit = null,
    date = selectedDate
) {

    const selectedHabitName =
        document.getElementById("selectedHabitName");

    const selectedHabitDescription =
        document.getElementById("selectedHabitDescription");

    const selectedHabitRecommendation =
        document.getElementById("selectedHabitRecommendation");

    const selectedHabitIcon =
        document.getElementById("selectedHabitIcon");

    const selectedDateLabel =
        document.getElementById("selectedDateLabel");

    const completeButton =
        document.getElementById("completeHabitButton");

    if (
        !selectedHabitName ||
        !selectedHabitDescription ||
        !selectedHabitRecommendation ||
        !selectedHabitIcon ||
        !selectedDateLabel ||
        !completeButton
    ) {
        return;
    }

    if (!habit) {
        habit =
            getHabitForDay(
                date.getDate()
            );
    }

    selectedDateLabel.textContent =
        formatDate(date);

    selectedHabitName.textContent =
        habit.nombre[currentLanguage];

    selectedHabitDescription.textContent =
        habit.resumen[currentLanguage];

    selectedHabitRecommendation.textContent =
        habit.recomendacion[currentLanguage];

    selectedHabitIcon.innerHTML =
        `<i data-lucide="${habit.icono}"></i>`;

    const completed =
        isCompleted(date);

    completeButton.classList.toggle(
        "completed-button",
        completed
    );

    completeButton.innerHTML = completed
        ? `
            <i data-lucide="check-check"></i>
            <span>
                ${translations[currentLanguage].completed}
            </span>
        `
        : `
            <i data-lucide="check"></i>
            <span>
                ${translations[currentLanguage].markCompleted}
            </span>
        `;

    completeButton.onclick = () => {

        const key =
            getStorageKey(date);

        if (isCompleted(date)) {

            localStorage.removeItem(key);

        } else {

            localStorage.setItem(
                key,
                "true"
            );

        }

        updateSelectedHabit(
            habit,
            date
        );

        renderCalendar();

    };

    lucide.createIcons();

}

function changeMonth(amount) {

    const newMonth =
        currentCalendarDate.getMonth() + amount;

    if (newMonth < 0) {

        currentCalendarDate =
            new Date(2026, 11, 1);

    } else if (newMonth > 11) {

        currentCalendarDate =
            new Date(2026, 0, 1);

    } else {

        currentCalendarDate =
            new Date(
                2026,
                newMonth,
                1
            );

    }

    selectedDate =
        new Date(
            2026,
            currentCalendarDate.getMonth(),
            1
        );

    renderCalendar();

    updateSelectedHabit();

}

function updateCurrentDate() {

    const currentDate =
        document.getElementById("currentDate");

    if (!currentDate) {
        return;
    }

    currentDate.textContent =
        formatDate(today);

}

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateCurrentDate();

        renderCalendar();

        updateSelectedHabit();

        const previousButton =
            document.getElementById("previousMonth");

        const nextButton =
            document.getElementById("nextMonth");

        if (previousButton) {

            previousButton.addEventListener(
                "click",
                () => changeMonth(-1)
            );

        }

        if (nextButton) {

            nextButton.addEventListener(
                "click",
                () => changeMonth(1)
            );

        }

    }
);