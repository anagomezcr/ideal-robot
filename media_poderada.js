const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

// me divide las note y los credit y luego los multiplica
const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});
// suma los resultados obtenidos anteriormente 
const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);
//me trae solo los valores de los credits 
const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});
//suma solo los credits
const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);
const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
