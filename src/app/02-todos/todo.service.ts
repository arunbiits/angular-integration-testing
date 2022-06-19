import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

    constructor(private http: HttpClient) {}

    getTodos() {
        return this.http.get<any[]>('...');
    }

    add(todo:any) {
        return this.http.post('...', todo);
    }

    delete(id: number) {
        return this.http.delete('...');
    }

    async getTodosAsync() {
        return this.http.get<any>('...').toPromise();
    }

}