interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

export const createEmployee = (salary: number | string): Director | Teacher => {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher;
  } else {
    return new Director;
  }
};


export function isDirector (employee: DirectorInterface | TeacherInterface): employee is Director {
    return (employee as Director).workDirectorTasks() !== undefined;
};

export function executeWork (employee: DirectorInterface | TeacherInterface): void {
    if (employee instanceof Director) {
      console.log(employee.workDirectorTasks());
    }
    else if (employee instanceof Teacher){
        console.log(employee.workTeacherTasks());
    }
}
type Subjects = "Math" | "History";
function teachClass(todayClass: Subjects) {
  if (todayClass == "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
}
}
