var Orientation;
(function (Orientation) {
    Orientation["N"] = "N";
    Orientation["E"] = "E";
    Orientation["S"] = "S";
    Orientation["W"] = "W";
})(Orientation || (Orientation = {}));
var Aspirateur = /** @class */ (function () {
    function Aspirateur(x, y, orientation) {
        this.x = x;
        this.y = y;
        this.orientation = orientation;
    }
    Aspirateur.prototype.Avancer = function () {
        switch (this.orientation) {
            case Orientation.N:
                this.y++;
                break;
            case Orientation.E:
                this.x++;
                break;
            case Orientation.S:
                this.y--;
                break;
            case Orientation.W:
                this.x--;
                break;
        }
    };
    Aspirateur.prototype.rotationDroite = function () {
        switch (this.orientation) {
            case Orientation.N:
                this.orientation = Orientation.E;
                break;
            case Orientation.E:
                this.orientation = Orientation.S;
                break;
            case Orientation.S:
                this.orientation = Orientation.W;
                break;
            case Orientation.W:
                this.orientation = Orientation.N;
                break;
        }
    };
    Aspirateur.prototype.rotationGauche = function () {
        switch (this.orientation) {
            case Orientation.N:
                this.orientation = Orientation.W;
                break;
            case Orientation.E:
                this.orientation = Orientation.N;
                break;
            case Orientation.S:
                this.orientation = Orientation.E;
                break;
            case Orientation.W:
                this.orientation = Orientation.S;
                break;
        }
    };
    //Fonction qui permets de donner la sens de mouvement de l'appareil.
    Aspirateur.prototype.instructions = function (instructions) {
        for (var i = 0; i < instructions.length; i++) {
            var instruction = instructions[i];
            switch (instruction) {
                case 'A':
                    this.Avancer();
                    break;
                case 'D':
                    this.rotationDroite();
                    break;
                case 'G':
                    this.rotationGauche();
                    break;
            }
        }
    };
    Aspirateur.prototype.getPosition = function () {
        return "x=".concat(this.x, " y=").concat(this.y, " orientation=").concat(this.orientation);
    };
    return Aspirateur;
}());
// Utilisation de la classe Aspirateur avec les points de depart en x et y puis de l'instruction de deplacement.
//Ces deux variables ne sont pas utilisé mais servent uniquement a definir la taille de la grille.
//const dimensionX = 10;
//const dimensionY = 10;
var initialX = 5;
var initialY = 5;
var initialOrientation = Orientation.N;
var instructions = 'DADADADAA';
//Instance de la classe Aspirateur en lui passant en parametre
// les positions x et y ainsi que le sens de l'orientation
var aspirateur = new Aspirateur(initialX, initialY, initialOrientation);
aspirateur.instructions(instructions);
var finalPosition = aspirateur.getPosition();
console.log("Position finale: ".concat(finalPosition));
