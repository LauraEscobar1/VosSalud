const habits = [
    {
        id: "hidratacion",
        nombre: {
            es: "Hidratación",
            en: "Hydration"
        },
        icono: "droplets",
        color: "blue",
        resumen: {
            es: "Mantén una adecuada hidratación para favorecer el cuidado de tu voz.",
            en: "Maintain adequate hydration to support healthy vocal function."
        },
        importancia: {
            es: "La hidratación ayuda a mantener las mucosas de las vías respiratorias en buenas condiciones y puede favorecer una producción vocal más cómoda.",
            en: "Hydration helps keep the mucous membranes of the respiratory tract in good condition and may support more comfortable voice production."
        },
        recomendacion: {
            es: "Bebe agua de manera frecuente durante el día, especialmente cuando hables durante períodos prolongados.",
            en: "Drink water regularly throughout the day, especially when speaking for extended periods."
        },
        consejo: {
            es: "Ten una botella de agua cerca para recordar hidratarte durante tus actividades.",
            en: "Keep a bottle of water nearby to remind yourself to stay hydrated during your activities."
        }
    },

    {
        id: "descanso-vocal",
        nombre: {
            es: "Descanso vocal",
            en: "Vocal Rest"
        },
        icono: "volume-x",
        color: "green",
        resumen: {
            es: "Permite que tu voz tenga momentos de descanso durante el día.",
            en: "Allow your voice to have periods of rest throughout the day."
        },
        importancia: {
            es: "Los períodos de descanso vocal pueden ayudar a disminuir el esfuerzo producido por un uso prolongado de la voz.",
            en: "Periods of vocal rest can help reduce the effort associated with prolonged voice use."
        },
        recomendacion: {
            es: "Alterna períodos de habla con momentos de silencio cuando tu actividad lo permita.",
            en: "Alternate periods of speaking with moments of silence when your activity allows it."
        },
        consejo: {
            es: "Evita continuar hablando cuando sientas fatiga vocal.",
            en: "Avoid continuing to speak when you feel vocal fatigue."
        }
    },

    {
        id: "evitar-gritar",
        nombre: {
            es: "Evitar gritar",
            en: "Avoid Shouting"
        },
        icono: "megaphone-off",
        color: "pink",
        resumen: {
            es: "Evita gritar o elevar excesivamente la voz para comunicarte.",
            en: "Avoid shouting or excessively raising your voice when communicating."
        },
        importancia: {
            es: "Hablar con una intensidad excesiva puede aumentar el esfuerzo sobre el sistema vocal.",
            en: "Speaking at excessive intensity can increase the effort placed on the vocal system."
        },
        recomendacion: {
            es: "Acércate a la persona con la que deseas hablar en lugar de aumentar demasiado el volumen.",
            en: "Move closer to the person you want to speak with instead of greatly increasing your volume."
        },
        consejo: {
            es: "Si hay mucho ruido ambiental, busca un lugar más tranquilo para conversar.",
            en: "If there is a lot of background noise, find a quieter place to talk."
        }
    },

    {
        id: "evitar-carraspear",
        nombre: {
            es: "Evitar carraspear",
            en: "Avoid Throat Clearing"
        },
        icono: "circle-slash",
        color: "purple",
        resumen: {
            es: "Evita carraspear repetidamente durante el día.",
            en: "Avoid repeatedly clearing your throat throughout the day."
        },
        importancia: {
            es: "El carraspeo frecuente puede generar un contacto repetido entre las estructuras vocales.",
            en: "Frequent throat clearing can cause repeated contact between the vocal structures."
        },
        recomendacion: {
            es: "Cuando tengas ganas de carraspear, intenta tomar agua o realizar una deglución suave.",
            en: "When you feel the urge to clear your throat, try drinking water or swallowing gently."
        },
        consejo: {
            es: "Presta atención a cuándo aparece el carraspeo para identificar situaciones que lo desencadenan.",
            en: "Pay attention to when throat clearing occurs to identify situations that trigger it."
        }
    },

    {
        id: "ambiente",
        nombre: {
            es: "Cuidado del ambiente",
            en: "Environmental Care"
        },
        icono: "wind",
        color: "cyan",
        resumen: {
            es: "Cuida las condiciones ambientales en las que utilizas tu voz.",
            en: "Pay attention to the environmental conditions in which you use your voice."
        },
        importancia: {
            es: "El humo, el polvo, los ambientes muy secos y otros irritantes pueden afectar el confort de las vías respiratorias.",
            en: "Smoke, dust, very dry environments and other irritants may affect respiratory comfort."
        },
        recomendacion: {
            es: "Evita permanecer durante períodos prolongados en ambientes con humo o irritantes.",
            en: "Avoid spending long periods in environments with smoke or irritants."
        },
        consejo: {
            es: "Procura mantener espacios ventilados y agradables para respirar.",
            en: "Try to keep spaces well ventilated and comfortable for breathing."
        }
    },

    {
        id: "calentamiento",
        nombre: {
            es: "Calentamiento vocal",
            en: "Vocal Warm-up"
        },
        icono: "activity",
        color: "orange",
        resumen: {
            es: "Realiza ejercicios suaves antes de actividades que requieran un uso prolongado de la voz.",
            en: "Perform gentle exercises before activities that require prolonged voice use."
        },
        importancia: {
            es: "Una preparación vocal adecuada puede ayudar a comenzar una actividad vocal de manera progresiva.",
            en: "Appropriate vocal preparation can help begin vocal activities gradually."
        },
        recomendacion: {
            es: "Utiliza ejercicios suaves y cómodos antes de cantar, hablar en público o realizar actividades vocales intensas.",
            en: "Use gentle and comfortable exercises before singing, public speaking or intensive vocal activities."
        },
        consejo: {
            es: "El calentamiento no debe producir dolor ni molestias.",
            en: "Warm-up exercises should not cause pain or discomfort."
        }
    },

    {
        id: "postura",
        nombre: {
            es: "Postura",
            en: "Posture"
        },
        icono: "person-standing",
        color: "teal",
        resumen: {
            es: "Mantén una postura cómoda y equilibrada al hablar.",
            en: "Maintain a comfortable and balanced posture while speaking."
        },
        importancia: {
            es: "Una postura equilibrada puede facilitar una respiración y producción vocal más cómodas.",
            en: "Balanced posture can support more comfortable breathing and voice production."
        },
        recomendacion: {
            es: "Mantén la cabeza, cuello y espalda en una posición cómoda y evita tensiones innecesarias.",
            en: "Keep your head, neck and back in a comfortable position and avoid unnecessary tension."
        },
        consejo: {
            es: "Si trabajas sentado, ajusta tu silla y pantalla para mantener una posición cómoda.",
            en: "If you work sitting down, adjust your chair and screen to maintain a comfortable position."
        }
    },

    {
        id: "volumen",
        nombre: {
            es: "Volumen adecuado",
            en: "Appropriate Volume"
        },
        icono: "volume-2",
        color: "indigo",
        resumen: {
            es: "Utiliza un volumen de voz adecuado para cada situación.",
            en: "Use an appropriate speaking volume for each situation."
        },
        importancia: {
            es: "Mantener un volumen adecuado ayuda a evitar un esfuerzo vocal innecesario.",
            en: "Maintaining an appropriate volume helps avoid unnecessary vocal effort."
        },
        recomendacion: {
            es: "Habla con una intensidad que permita que los demás te escuchen sin necesidad de forzar la voz.",
            en: "Speak at an intensity that allows others to hear you without forcing your voice."
        },
        consejo: {
            es: "En lugares ruidosos, intenta reducir el ruido ambiental en lugar de competir con él.",
            en: "In noisy places, try to reduce background noise instead of competing with it."
        }
    },

    {
        id: "descanso",
        nombre: {
            es: "Descanso general",
            en: "General Rest"
        },
        icono: "moon",
        color: "rose",
        resumen: {
            es: "Mantén una rutina adecuada de descanso y sueño.",
            en: "Maintain an adequate rest and sleep routine."
        },
        importancia: {
            es: "El descanso general contribuye al bienestar y puede influir en cómo afrontamos las actividades que requieren uso vocal.",
            en: "General rest contributes to well-being and may influence how we handle activities that require voice use."
        },
        recomendacion: {
            es: "Procura mantener horarios de descanso regulares y suficientes.",
            en: "Try to maintain regular and sufficient rest periods."
        },
        consejo: {
            es: "Organiza tus actividades para evitar acumular cansancio durante varios días.",
            en: "Organize your activities to avoid accumulating fatigue over several days."
        }
    },

    {
        id: "pausas",
        nombre: {
            es: "Pausas al hablar",
            en: "Speaking Breaks"
        },
        icono: "pause-circle",
        color: "mint",
        resumen: {
            es: "Realiza pausas durante períodos prolongados de conversación.",
            en: "Take breaks during extended periods of speaking."
        },
        importancia: {
            es: "Las pausas permiten interrumpir períodos prolongados de uso vocal y reducir el esfuerzo acumulado.",
            en: "Breaks interrupt prolonged periods of voice use and can reduce accumulated effort."
        },
        recomendacion: {
            es: "Si debes hablar durante mucho tiempo, incorpora pequeños momentos de silencio.",
            en: "If you need to speak for a long time, include short moments of silence."
        },
        consejo: {
            es: "Aprovecha los cambios de actividad para descansar unos minutos la voz.",
            en: "Use changes between activities as opportunities to rest your voice for a few minutes."
        }
    }
];

function getHabitById(id) {
    return habits.find(habit => habit.id === id);
}

function getHabitText(habit, field) {
    return habit[field][currentLanguage];
}

function renderHabitsPage() {

    const habitsList = document.getElementById("habitsList");
    const habitDetail = document.getElementById("habitDetail");

    if (!habitsList || !habitDetail) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const habitId = params.get("habit");

    if (habitId) {
        renderHabitDetail(habitId);
        return;
    }

    renderHabitCards();
}

function renderHabitCards() {

    const habitsList = document.getElementById("habitsList");
    const habitDetail = document.getElementById("habitDetail");

    habitsList.style.display = "grid";
    habitDetail.style.display = "none";

    habitsList.innerHTML = habits.map(habit => {

        return `
            <article class="habit-card ${habit.color}">

                <div class="habit-card-icon">
                    <i data-lucide="${habit.icono}"></i>
                </div>

                <div class="habit-card-content">

                    <h3>
                        ${habit.nombre[currentLanguage]}
                    </h3>

                    <p>
                        ${habit.resumen[currentLanguage]}
                    </p>

                    <a
                        href="habitos.html?habit=${habit.id}"
                        class="habit-more-button ${habit.color}"
                    >
                        <span data-i18n="seeMore">
                            ${translations[currentLanguage].seeMore}
                        </span>

                        <i data-lucide="arrow-right"></i>
                    </a>

                </div>

            </article>
        `;

    }).join("");

    lucide.createIcons();
}

function renderHabitDetail(habitId) {

    const habit = getHabitById(habitId);

    const habitsList = document.getElementById("habitsList");
    const habitDetail = document.getElementById("habitDetail");

    if (!habit) {
        renderHabitCards();
        return;
    }

    habitsList.style.display = "none";
    habitDetail.style.display = "block";

    habitDetail.innerHTML = `

        <div class="detail-back-container">

            <a href="habitos.html" class="back-button">

                <i data-lucide="arrow-left"></i>

                <span>
                    ${translations[currentLanguage].backToHabits}
                </span>

            </a>

        </div>

        <article class="habit-detail-card ${habit.color}">

            <div class="habit-detail-hero">

                <div class="habit-detail-icon">
                    <i data-lucide="${habit.icono}"></i>
                </div>

                <div>

                    <span class="detail-label">
                        ${translations[currentLanguage].vocalCare}
                    </span>

                    <h2>
                        ${habit.nombre[currentLanguage]}
                    </h2>

                    <p>
                        ${habit.resumen[currentLanguage]}
                    </p>

                </div>

            </div>

            <div class="habit-detail-body">

                <section class="detail-section">

                    <div class="detail-section-icon">
                        <i data-lucide="heart-pulse"></i>
                    </div>

                    <div>

                        <h3>
                            ${translations[currentLanguage].importance}
                        </h3>

                        <p>
                            ${habit.importancia[currentLanguage]}
                        </p>

                    </div>

                </section>

                <section class="detail-section">

                    <div class="detail-section-icon">
                        <i data-lucide="lightbulb"></i>
                    </div>

                    <div>

                        <h3>
                            ${translations[currentLanguage].recommendation}
                        </h3>

                        <p>
                            ${habit.recomendacion[currentLanguage]}
                        </p>

                    </div>

                </section>

                <section class="detail-tip">

                    <div class="detail-tip-icon">
                        <i data-lucide="sparkles"></i>
                    </div>

                    <div>

                        <h3>
                            ${translations[currentLanguage].tip}
                        </h3>

                        <p>
                            ${habit.consejo[currentLanguage]}
                        </p>

                    </div>

                </section>

            </div>

        </article>
    `;

    lucide.createIcons();
}

document.addEventListener("DOMContentLoaded", renderHabitsPage);