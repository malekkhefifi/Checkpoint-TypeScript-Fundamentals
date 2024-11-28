// Définition de l'interface Véhicule
interface Véhicule {
    make: string;
    model: string;
    year: number;
    start(): void;
  }
  
  // Implémentation de la classe Voiture
  class Voiture implements Véhicule {
    make: string;
    model: string;
    year: number;
  
    // Constructeur pour initialiser les propriétés
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    // Implémentation de la méthode start
    start(): void {
      console.log(`Car engine started `);
    }
  }
  
  // Création d'une instance de la classe Voiture
  const maVoiture = new Voiture("Toyota", "Corolla", 2020);
  
  // Appel de la méthode start

  maVoiture.start();
  
  function aff(voiture: Voiture): void {
    // Affichage des informations de la voiture dans la console
    console.log(`Processing: ${voiture.make} ${voiture.model} ${voiture.year}`);
    
   console.log ('end')
  }
  
  aff(maVoiture)