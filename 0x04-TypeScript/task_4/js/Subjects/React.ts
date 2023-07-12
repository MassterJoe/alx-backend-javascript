namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }
    export class React {
        getRequirements(): string {
            return "Here is the list of requirements for React";
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

