import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Task } from './interfaces/Task'
import { Model } from 'mongoose'
import { CreateTaskDto } from './dto/create-task.dto';


@Injectable()
export class TasksService {

    constructor(@InjectModel('task') private taskModel: Model<Task>){}

    async getTasks(){
        return await this.taskModel.find()
    }

    async getTask(id: string){
        return await this.taskModel.findById(id)
    }

    async createTask(task: CreateTaskDto) {
        const newTask =  new this.taskModel(task)
        return await newTask.save()
        //console.log(newTask)
    }
    /* tasks: Task[] = [
        {
            id: 1,
            title: 'testing',
            description: 'testing description',
            done: true
        },
        {
            id: 2,
            title: 'gdfgdfghfgh',
            description: 'testing description',
            done: true
        },
        {
            id: 3,
            title: 'asdasdasd',
            description: 'testing description',
            done: true
        }
    ]

    getTasks(): Task[]{
        return this.tasks
    }

    getTask(id: number): Task{
        return this.tasks.find(task => task.id === id)
    } */
}
