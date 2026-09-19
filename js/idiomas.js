let currentLanguage = localStorage.getItem("vozsalud-language") || "es";

const translations = {

    es: {

        appSubtitle: "Cuidado vocal",

        calendar: "Calendario",
        habits: "Hábitos",
        information: "Información",

        footerText: "Bienestar y cuidado de tu voz",

        calendarEyebrow: "Seguimiento diario",
        calendarTitle: "Calendario de cuidado vocal",
        calendarDescription: "Mantén una rutina saludable para cuidar tu voz todos los días.",

        todayLabel: "Hoy",
        dailyHabit: "Hábito del día",
        recommendation: "Recomendación",
        markCompleted: "Marcar como realizado",
        completed: "Realizado",

        habitsEyebrow: "Cuidado diario",
        habitsTitle: "Hábitos para cuidar tu voz",
        habitsDescription: "Conoce prácticas sencillas que pueden ayudarte a mantener una buena higiene vocal.",

        seeMore: "Ver más",
        backToHabits: "Volver a hábitos",

        vocalCare: "Cuidado vocal",
        importance: "¿Por qué es importante?",
        tip: "Consejo",

        informationEyebrow: "Educación vocal",
        informationTitle: "Información sobre el cuidado de la voz",
        informationDescription: "Aprende por qué la higiene vocal es importante y qué hábitos puedes incorporar a tu rutina.",

        whyVoiceTitle: "¿Por qué cuidar la voz?",
        whyVoiceText: "La voz es una herramienta fundamental para comunicarnos. Mantener hábitos adecuados puede contribuir a reducir el esfuerzo vocal y favorecer un uso saludable de la voz.",

        vocalHygieneTitle: "Higiene vocal",
        vocalHygieneText: "La higiene vocal reúne diferentes prácticas relacionadas con la hidratación, el descanso, el ambiente y la forma en que utilizamos nuestra voz.",

        dailyCareTitle: "Cuidado diario",
        dailyCareText: "Pequeñas acciones realizadas de manera constante pueden ayudarte a crear una rutina de cuidado vocal.",

        disclaimerTitle: "Información educativa",
        disclaimerText: "VozSalud es una herramienta educativa para fomentar hábitos de cuidado vocal. La información presentada no reemplaza una valoración ni las recomendaciones de un profesional de la salud.",

        months: [
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

        weekdays: [
            "Lun",
            "Mar",
            "Mié",
            "Jue",
            "Vie",
            "Sáb",
            "Dom"
        ]

    },

    en: {

        appSubtitle: "Vocal care",

        calendar: "Calendar",
        habits: "Habits",
        information: "Information",

        footerText: "Voice wellness and care",

        calendarEyebrow: "Daily tracking",
        calendarTitle: "Vocal care calendar",
        calendarDescription: "Maintain a healthy routine to take care of your voice every day.",

        todayLabel: "Today",
        dailyHabit: "Habit of the day",
        recommendation: "Recommendation",
        markCompleted: "Mark as completed",
        completed: "Completed",

        habitsEyebrow: "Daily care",
        habitsTitle: "Habits for vocal care",
        habitsDescription: "Discover simple practices that can help you maintain good vocal hygiene.",

        seeMore: "See more",
        backToHabits: "Back to habits",

        vocalCare: "Vocal care",
        importance: "Why is it important?",
        tip: "Tip",

        informationEyebrow: "Vocal education",
        informationTitle: "Information about vocal care",
        informationDescription: "Learn why vocal hygiene matters and which habits you can incorporate into your routine.",

        whyVoiceTitle: "Why take care of your voice?",
        whyVoiceText: "The voice is an essential tool for communication. Maintaining appropriate habits can help reduce vocal effort and support healthy voice use.",

        vocalHygieneTitle: "Vocal hygiene",
        vocalHygieneText: "Vocal hygiene includes different practices related to hydration, rest, the environment and the way we use our voice.",

        dailyCareTitle: "Daily care",
        dailyCareText: "Small actions performed consistently can help you create a vocal care routine.",

        disclaimerTitle: "Educational information",
        disclaimerText: "VozSalud is an educational tool designed to encourage vocal care habits. The information provided does not replace an assessment or recommendations from a healthcare professional.",

        months: [
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
        ],

        weekdays: [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun"
        ]

    }

};

function translatePage() {

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.getAttribute("data-i18n");

        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }

    });

    document.documentElement.lang = currentLanguage;

    const selector = document.getElementById("languageSelector");

    if (selector) {
        selector.value = currentLanguage;
    }

    if (typeof renderCalendar === "function") {
        renderCalendar();
    }

    if (typeof renderHabitsPage === "function") {
        renderHabitsPage();
    }

    if (typeof updateSelectedHabit === "function") {
        updateSelectedHabit();
    }

    lucide.createIcons();
}

function saveLanguage(language) {

    currentLanguage = language;

    localStorage.setItem(
        "vozsalud-language",
        language
    );

    translatePage();
}

function getMonthName(month) {

    return translations[currentLanguage].months[month];

}

function setupLanguageSelector() {

    const selector = document.getElementById("languageSelector");

    if (!selector) {
        return;
    }

    selector.value = currentLanguage;

    selector.addEventListener("change", event => {

        saveLanguage(event.target.value);

    });

}

document.addEventListener("DOMContentLoaded", () => {

    setupLanguageSelector();
    translatePage();

});