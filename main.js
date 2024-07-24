class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(studentNumber) {
        if (typeof studentNumber === 'number') {
            this._numberOfStudents = studentNumber;
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number');
        }
    }

    quickFacts() {
        return `${this.name} educates ${this.numberOfStudents} students, typically between the ages of ${this.level}.`;
    }

    static pickSubstituteTeacher(substituteTeachers) {
        let rand = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[rand];
    }
}

class Primary extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class Middle extends School {
    constructor(name, numberOfStudents) {
        super(name, 'middle', numberOfStudents);
    }
}

class High extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        return this._sportsTeams.join(', ');
    }
}

// Create instances
let lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
let alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

// Display school details
const schoolDetails = document.getElementById('schoolDetails');
schoolDetails.innerHTML = `
    <p>${lorraineHansbury.quickFacts()}</p>
    <p>Pickup Policy: ${lorraineHansbury.pickupPolicy}</p>
    <p>${alSmith.quickFacts()}</p>
    <p>Sports Teams: ${alSmith.sportsTeams}</p>
`;

// Pick substitute teacher
document.getElementById('pickSubstitute').addEventListener('click', () => {
    const substitute = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
    document.getElementById('substituteTeacher').innerText = `Substitute Teacher: ${substitute}`;
});