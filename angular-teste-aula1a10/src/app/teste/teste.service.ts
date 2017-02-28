import { Injectable } from '@angular/core';

@Injectable()
export class TesteService {

    getTeste(){
        return ['Angular2', 'Java', 'javafx', 'Python'];
    }
}