import { Component } from '@angular/core'

export interface Address {
  city: string
  street: string
  house: number
}

export interface WeekGrade {
  id: number
  gradeItem: number
}

export interface Lesson {
  id: number
  title: string
  weekGrades: WeekGrade[]
}

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  name = 'Ivan'
  surname = 'Petrov'
  address: Address = {
    city: 'Minsk',
    street: 'Lenina',
    house: 49,
  }

  grades: string[] = ['math: 5', 'phys: 4']

  getGrade(grade: string) {
    this.grades.push(grade)
  }

  lessons: Lesson[] = [
    {
      id: 0,
      title: 'Math',
      weekGrades: [
        { id: 0, gradeItem: 5 },
        { id: 1, gradeItem: 3 },
        { id: 2, gradeItem: 4 },
      ],
    },
    {
      id: 0,
      title: 'Physic',
      weekGrades: [
        { id: 0, gradeItem: 3 },
        { id: 1, gradeItem: 2 },
        { id: 2, gradeItem: 1 },
      ],
    },
  ]
}
