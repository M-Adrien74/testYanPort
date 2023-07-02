enum Orientation {
    N = 'N',
    E = 'E',
    S = 'S',
    W = 'W',
}

class Aspirateur {
    private x: number;
    private y: number;
    private orientation: Orientation;

    constructor(x: number, y: number, orientation: Orientation) {
        this.x = x;
        this.y = y;
        this.orientation = orientation;
    }

    avancer():void {
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
    }

    rotationDroite():void {
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
    }

    rotationGauche():void{
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
    }
//Fonction qui permets de donner la sens de mouvement de l'appareil.
    instructions(instructions: string) {
        for (let i = 0; i < instructions.length; i++) {
            const instruction = instructions[i];
            switch (instruction) {
                case 'A':
                    this.avancer();
                    break;
                case 'D':
                    this.rotationDroite();
                    break;
                case 'G':
                    this.rotationGauche();
                    break;
            }
        }
    }

    getPosition(): string {
        return `x=${this.x} y=${this.y} orientation=${this.orientation}`;
    }
}

// Utilisation de la classe Aspirateur avec les points de depart en x et y puis de l'instruction de deplacement.
//Ces deux variables ne sont pas utilisé mais servent uniquement a definir la taille de la grille.
//const dimensionX = 10;
//const dimensionY = 10;
const initialX = 5;
const initialY = 5;
const initialOrientation = Orientation.N;
const instructions = 'DADADADAA';

//Instance de la classe Aspirateur en lui passant en parametre
// les positions x et y ainsi que le sens de l'orientation
const aspirateur = new Aspirateur(initialX, initialY, initialOrientation);

aspirateur.instructions(instructions);
console.log(`Position finale: ${aspirateur.getPosition()}`);