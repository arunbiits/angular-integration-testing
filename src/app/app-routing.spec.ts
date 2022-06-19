import { TodoComponent } from './02-todos/todo.component';
import { UserComponent } from './03-user/user.component';
import {routes} from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';

describe('routes', () => {


    it('should contain a route with /', () => {
        expect(routes).toContain({path: '', redirectTo:'todo', pathMatch: 'full'});
    });

    it('should contain a route with /todo', () => {
        expect(routes).toContain({path: 'todo', component: TodoComponent});
    });

    it('should contain a route with /user', () => {
        expect(routes).toContain({path: 'user', component: UserComponent});
    });

    it('should contain a route with /**', () => {
        expect(routes).toContain({path: '**', component: NotFoundComponent});
    });

});