let numarMediuCopii = 10;

const NUMAR_MEDIU_COPII1 = 10;

const test = {
    test1(Nume, Prenume) {
        this.Nume = "Ana";
        this.Prenume = "Ioana";
    }
}

test.test1("Ana", "Ioana");

console.log(test.Nume);
console.log(test.Prenume);

