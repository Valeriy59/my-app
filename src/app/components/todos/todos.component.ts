import { Component, OnDestroy, OnInit } from '@angular/core'
import { Todo, TodosService } from '../../services/todos.service'
import { HttpErrorResponse } from '@angular/common/http'
import { Observable, Subscription } from 'rxjs'

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos$!: Observable<Todo[]>
  error = ''

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todos$ = this.todosService.todos$
    this.getTodos()
  }

  // getTodos() {
  //   this.subscription.add(
  //     this.todosService.getTodos().subscribe({
  //       next: res => {
  //         this.todos = res
  //       },
  //       error: (err: HttpErrorResponse) => {
  //         this.error = err.message
  //       },
  //     })
  //   )
  // }

  getTodos() {
    this.todosService.getTodos()
    // this.todosService.getTodos().subscribe({
    //   next: res => {
    //     this.todos = res
    //   },
    //   error: (err: HttpErrorResponse) => {
    //     this.error = err.message
    //   },
    // })
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular' + randomNumber
    this.todosService.createTodo(title)

    // this.subscription.add(
    //   this.todosService.createTodo(title).subscribe(res => {
    //     const newTodo = res.data.item
    //     this.todos.unshift(newTodo)
    //   })
    // )
  }

  deleteTodo() {
    const todoId = '00f4d1c3-8875-4ed0-b7a1-5ff2eea4a186'
    this.todosService.deleteTodo(todoId)
    // this.subscription.add(
    //   this.todosService.deleteTodo(todoId).subscribe({
    //     next: () => {
    //       this.todos = this.todos.filter(tl => tl.id !== todoId)
    //     },
    //     error: (err: HttpErrorResponse) => {
    //       this.error = err.message
    //     },
    //   })
    // )
  }
}
