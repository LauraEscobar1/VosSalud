let currentLanguage = localStorage.getItem("vozsalud-language") || "es";

const translations = {
    es: {
        menu: "Menú",
        calendar: "Calendario",
        habits: "Hábitos",
        information: "Información",
        vocalWellbeing: "Bienestar vocal",
        calendarTitle: "Calendario de hábitos",
        calendarDescription:
            "Organiza y acompaña tus hábitos para el cuidado y bienestar de la voz.",
        today: "Hoy",
        vocalCareCalendar: "Calendario de cuidado vocal",
        habitOfTheDay: "Hábito del día",
        markCompleted: "Marcar como realizado",
        completed: "Hábito completado",
        currentDay: "Día actual",
        pending: "Pendiente",
        vocalCare: "Cuidado y bienestar vocal"
    },

    en: {
        menu: "Menu",
        calendar: "Calendar",
        habits: "Habits",
        information: "Information",
        vocalWellbeing: "Vocal wellbeing",
        calendarTitle: "Habit calendar",
        calendarDescription:
            "Organize and follow your habits for voice care and wellbeing.",
        today: "Today",
        vocalCareCalendar: "Voice care calendar",
        habitOfTheDay: "Habit of the day",
        markCompleted: "Mark as completed",
        completed: "Completed habit",
        currentDay: "Current day",
        pending: "Pending",
        vocalCare: "Voice care and wellbeing"
    }
};

const monthNames = {
    es: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ],

    en: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
};

const weekDays = {
    es: [
        "Lun",
        "Mar",
        "Mié",
        "Jue",
        "Vie",
        "Sáb",
        "Dom"
    ],

    en: [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun"
    ]
};

function translate(key) {
    return translations[currentLanguage][key] || key;
}

function getMonthName(monthIndex) {
    return monthNames[currentLanguage][monthIndex];
}

function saveLanguage(language) {
    currentLanguage = language;

    localStorage.setItem(
        "vozsalud-language",
        language
    );
}