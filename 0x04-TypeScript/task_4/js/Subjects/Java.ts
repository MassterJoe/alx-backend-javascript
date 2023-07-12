namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }
    export class Java {

        getRequirements(): string {
            return "Here is the list of requirements for Java";
        }
        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingC === 0) {
                return "No available teacher";
            } else {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
        }
    }
}