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
            es: "Mantén una adecuada hidratación durante el día.",
            en: "Maintain adequate hydration throughout the day."
        },
        importancia: {
            es: "Una adecuada hidratación puede contribuir al bienestar de las estructuras involucradas en la producción de la voz.",
            en: "Adequate hydration can contribute to the well-being of the structures involved in voice production."
        },
        recomendacion: {
            es: "Procura beber agua regularmente durante el día.",
            en: "Try to drink water regularly throughout the day."
        },
        consejo: {
            es: "Lleva contigo una botella de agua para recordar mantener una hidratación adecuada.",
            en: "Carry a bottle of water with you as a reminder to stay adequately hydrated."
        }
    },

    {
        id: "descanso-vocal",
        nombre: {
            es: "Descanso vocal",
            en: "Vocal rest"
        },
        icono: "moon",
        color: "sage",
        resumen: {
            es: "Dale momentos de descanso a tu voz durante el día.",
            en: "Give your voice moments of rest throughout the day."
        },
        importancia: {
            es: "Los momentos de descanso pueden ayudar a evitar el uso excesivo de la voz.",
            en: "Periods of rest can help avoid excessive voice use."
        },
        recomendacion: {
            es: "Incluye pausas durante actividades que requieran un uso prolongado de la voz.",
            en: "Include breaks during activities that require prolonged voice use."
        },
        consejo: {
            es: "Organiza pequeños momentos de silencio cuando hayas utilizado mucho la voz.",
            en: "Include short periods of silence after extensive voice use."
        }
    },

    {
        id: "evitar-gritar",
        nombre: {
            es: "Evitar gritar",
            en: "Avoid shouting"
        },
        icono: "volume-x",
        color: "pink",
        resumen: {
            es: "Evita elevar excesivamente la voz.",
            en: "Avoid raising your voice excessively."
        },
        importancia: {
            es: "Reducir el esfuerzo vocal puede favorecer un uso más saludable de la voz.",
            en: "Reducing vocal effort can support healthier voice use."
        },
        recomendacion: {
            es: "Utiliza un volumen cómodo al comunicarte.",
            en: "Use a comfortable volume when communicating."
        },
        consejo: {
            es: "Si necesitas llamar a alguien, acércate en lugar de gritar.",
            en: "If you need to call someone, move closer instead of shouting."
        }
    },

    {
        id: "evitar-carraspear",
        nombre: {
            es: "Evitar carraspear",
            en: "Avoid throat clearing"
        },
        icono: "volume-2",
        color: "turquoise",
        resumen: {
            es: "Evita carraspear constantemente.",
            en: "Avoid frequent throat clearing."
        },
        importancia: {
            es: "Carraspear repetidamente puede generar esfuerzo en las estructuras relacionadas con la producción de la voz.",
            en: "Repeated throat clearing can create effort in structures involved in voice production."
        },
        recomendacion: {
            es: "Cuando tengas la necesidad de carraspear, intenta beber agua.",
            en: "When you feel the need to clear your throat, try drinking water."
        },
        consejo: {
            es: "Observa cuándo aparece este hábito y busca alternativas suaves.",
            en: "Notice when this habit occurs and look for gentle alternatives."
        }
    },

    {
        id: "ambiente",
        nombre: {
            es: "Cuidado del ambiente",
            en: "Environmental care"
        },
        icono: "wind",
        color: "sage",
        resumen: {
            es: "Evita ambientes con humo, polvo o sustancias irritantes.",
            en: "Avoid environments with smoke, dust, or irritants."
        },
        importancia: {
            es: "El ambiente puede influir en el bienestar de las vías respiratorias y de la voz.",
            en: "The environment can influence the well-being of the respiratory system and voice."
        },
        recomendacion: {
            es: "Procura mantenerte en espacios ventilados y libres de irritantes.",
            en: "Try to stay in well-ventilated spaces free from irritants."
        },
        consejo: {
            es: "Ventila los espacios cerrados y evita el humo cuando sea posible.",
            en: "Ventilate enclosed spaces and avoid smoke whenever possible."
        }
    },

    {
        id: "calentamiento",
        nombre: {
            es: "Calentamiento vocal",
            en: "Vocal warm-up"
        },
        icono: "activity",
        color: "blue",
        resumen: {
            es: "Realiza ejercicios de calentamiento vocal recomendados por un profesional.",
            en: "Perform vocal warm-up exercises recommended by a professional."
        },
        importancia: {
            es: "El calentamiento vocal puede formar parte de una preparación adecuada para actividades de uso intensivo de la voz.",
            en: "Vocal warm-up can be part of appropriate preparation for activities involving intensive voice use."
        },
        recomendacion: {
            es: "Realiza únicamente ejercicios adecuados para ti y recomendados profesionalmente.",
            en: "Only perform exercises that are appropriate for you and professionally recommended."
        },
        consejo: {
            es: "Si utilizas mucho la voz, consulta a un profesional de Fonoaudiología.",
            en: "If you use your voice extensively, consult a Speech-Language Pathologist."
        }
    },

    {
        id: "postura",
        nombre: {
            es: "Postura",
            en: "Posture"
        },
        icono: "accessibility",
        color: "pink",
        resumen: {
            es: "Mantén una postura corporal adecuada al hablar.",
            en: "Maintain good body posture while speaking."
        },
        importancia: {
            es: "Una postura equilibrada puede favorecer una comunicación cómoda y eficiente.",
            en: "Balanced posture can support comfortable and efficient communication."
        },
        recomendacion: {
            es: "Mantén el cuerpo relajado y evita posiciones que generen tensión innecesaria.",
            en: "Keep your body relaxed and avoid positions that create unnecessary tension."
        },
        consejo: {
            es: "Revisa tu postura cuando permanezcas sentado durante períodos prolongados.",
            en: "Check your posture when sitting for prolonged periods."
        }
    },

    {
        id: "volumen",
        nombre: {
            es: "Volumen adecuado",
            en: "Appropriate volume"
        },
        icono: "volume-1",
        color: "turquoise",
        resumen: {
            es: "Utiliza un volumen cómodo y evita forzar la voz.",
            en: "Use a comfortable volume and avoid straining your voice."
        },
        importancia: {
            es: "Un volumen adecuado puede ayudar a disminuir el esfuerzo vocal innecesario.",
            en: "An appropriate volume can help reduce unnecessary vocal effort."
        },
        recomendacion: {
            es: "Habla con un volumen que permita comunicarte sin forzar la voz.",
            en: "Speak at a volume that allows communication without straining your voice."
        },
        consejo: {
            es: "En ambientes ruidosos, busca acercarte a la persona en lugar de elevar demasiado la voz.",
            en: "In noisy environments, move closer to the person instead of raising your voice excessively."
        }
    },

    {
        id: "descanso",
        nombre: {
            es: "Descanso",
            en: "Rest"
        },
        icono: "bed",
        color: "sage",
        resumen: {
            es: "Mantén buenos hábitos de descanso.",
            en: "Maintain healthy rest habits."
        },
        importancia: {
            es: "El descanso general forma parte del bienestar y puede contribuir al cuidado integral de la voz.",
            en: "Overall rest is part of well-being and can contribute to comprehensive voice care."
        },
        recomendacion: {
            es: "Procura mantener horarios de descanso regulares.",
            en: "Try to maintain regular rest schedules."
        },
        consejo: {
            es: "Organiza tu rutina para reservar tiempo suficiente para descansar.",
            en: "Organize your routine to allow enough time for rest."
        }
    },

    {
        id: "pausas",
        nombre: {
            es: "Pausas durante el habla",
            en: "Speaking breaks"
        },
        icono: "pause-circle",
        color: "blue",
        resumen: {
            es: "Realiza pausas durante períodos prolongados de uso de la voz.",
            en: "Take breaks during prolonged periods of voice use."
        },
        importancia: {
            es: "Las pausas permiten alternar los períodos de actividad vocal con momentos de descanso.",
            en: "Breaks allow periods of vocal activity to alternate with moments of rest."
        },
        recomendacion: {
            es: "Incluye pequeñas pausas cuando hables durante períodos prolongados.",
            en: "Include short breaks when speaking for extended periods."
        },
        consejo: {
            es: "Planifica pausas especialmente durante clases, exposiciones o jornadas de trabajo con alta demanda vocal.",
            en: "Plan breaks especially during classes, presentations, or workdays with high vocal demand."
        }
    }
];