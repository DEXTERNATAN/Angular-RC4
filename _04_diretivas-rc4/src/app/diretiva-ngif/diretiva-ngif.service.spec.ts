/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { DiretivaNgifService } from './diretiva-ngif.service';

describe('Service: DiretivaNgif', () => {
  beforeEach(() => {
    addProviders([DiretivaNgifService]);
  });

  it('should ...',
    inject([DiretivaNgifService],
      (service: DiretivaNgifService) => {
        expect(service).toBeTruthy();
      }));
});
