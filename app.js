// Implémentation de la classe Voiture
var Voiture = /** @class */ (function () {
    // Constructeur pour initialiser les propriétés
    function Voiture(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Implémentation de la méthode start
    Voiture.prototype.start = function () {
        console.log("Car engine started ");
    };
    return Voiture;
}());
// Création d'une instance de la classe Voiture
var maVoiture = new Voiture("Toyota", "Corolla", 2020);
// Appel de la méthode start
maVoiture.start();
function aff(voiture) {
    // Affichage des informations de la voiture dans la console
    console.log("Processing: ".concat(voiture.make, " ").concat(voiture.model, " ").concat(voiture.year));
    console.log('end');
}
aff(maVoiture);
