let currentCalendarDate = new Date(2026, 8, 1);

const today = new Date();

function getTodayDate() {
    return new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
    );
}

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

function getHabitForDay(day) {
    const index = (day - 1) % habits.length;

    return habits[index];
}

function getStorageKey(date) {
    return `vozsalud-${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

function isCompleted(date) {
    return localStorage.getItem(getStorageKey(date)) === "completed";
}

function setCompleted(date) {
    localStorage.setItem(
        getStorageKey(date),
        "completed"
    );
}

function renderCurrentDate() {
    const currentDateElement =
        document.getElementById("currentDate");

    if (!currentDateElement) {
        return;
    }

    currentDateElement.textContent =
        formatDate(getTodayDate());
}

function renderCalendar() {
    const calendarDays =
        document.getElementById("calendarDays");

    const monthTitle =
        document.getElementById("monthTitle");

    if (!calendarDays || !monthTitle) {
        return;
    }

    calendarDays.innerHTML = "";

    const year = currentCalendarDate.getFullYear();
    const month = currentCalendarDate.getMonth();

    monthTitle.textContent =
        `${getMonthName(month)} ${year}`;

    const firstDay = new Date(year, month, 1);

    let startingDay = firstDay.getDay();

    if (startingDay === 0) {
        startingDay = 6;
    } else {
        startingDay -= 1;
    }

    const daysInMonth =
        new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < startingDay; i++) {
        const emptyDay = document.createElement("div");

        emptyDay.className =
            "calendar-day empty";

        calendarDays.appendChild(emptyDay);
    }

    for (let day = 1; day <= daysInMonth; day++) {

        const date = new Date(year, month, day);

        const dayElement =
            document.createElement("button");

        dayElement.type = "button";

        dayElement.className =
            "calendar-day text-left";

        const isToday =
            date.getTime() === getTodayDate().getTime();

        const completed =
            isCompleted(date);

        if (isToday) {
            dayElement.classList.add("today");
        }

        if (completed) {
            dayElement.classList.add("completed");
        }

        const habit =
            getHabitForDay(day);

        dayElement.innerHTML = `
            <div class="calendar-day-number">
                ${day}
            </div>

            <div class="calendar-habit">
                ${habit.nombre[currentLanguage]}
            </div>

            ${
                completed
                    ? `
                        <div class="calendar-check">
                            <i data-lucide="check" class="w-3 h-3"></i>
                        </div>
                    `
                    : ""
            }
        `;

        dayElement.addEventListener(
            "click",
            () => selectCalendarDay(date, habit)
        );

        calendarDays.appendChild(dayElement);
    }

    lucide.createIcons();

    updateCalendarLabels();
}

function selectCalendarDay(date, habit) {

    const habitName =
        document.getElementById("selectedHabitName");

    const habitDescription =
        document.getElementById("selectedHabitDescription");

    if (!habitName || !habitDescription) {
        return;
    }

    habitName.textContent =
        habit.nombre[currentLanguage];

    habitDescription.textContent =
        habit.resumen[currentLanguage];

    const button =
        document.getElementById("completeHabitButton");

    if (button) {

        button.onclick = () => {

            setCompleted(date);

            renderCalendar();

            selectCalendarDay(date, habit);
        };
    }
}

function updateCalendarLabels() {

    const weekdays =
        document.querySelectorAll(".calendar-weekday");

    weekdays.forEach((element, index) => {
        element.textContent =
            weekDays[currentLanguage][index];
    });

    const translationsMap = [
        ["[data-i18n='calendar']", "calendar"],
        ["[data-i18n='habits']", "habits"],
        ["[data-i18n='information']", "information"]
    ];

    translationsMap.forEach(([selector, key]) => {

        const element =
            document.querySelector(selector);

        if (element) {
            element.textContent =
                translate(key);
        }
    });
}

function initializeCalendar() {

    renderCurrentDate();

    renderCalendar();

    const previousButton =
        document.getElementById("previousMonth");

    const nextButton =
        document.getElementById("nextMonth");

    if (previousButton) {

        previousButton.addEventListener(
            "click",
            () => {

                currentCalendarDate.setMonth(
                    currentCalendarDate.getMonth() - 1
                );

                renderCalendar();
            }
        );
    }

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            () => {

                currentCalendarDate.setMonth(
                    currentCalendarDate.getMonth() + 1
                );

                renderCalendar();
            }
        );
    }

    const initialHabit =
        getHabitForDay(today.getDate());

    selectCalendarDay(
        today,
        initialHabit
    );
}

document.addEventListener(
    "DOMContentLoaded",
    initializeCalendar
);