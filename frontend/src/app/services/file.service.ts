import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  files = [
    {
      id: 1,
      filename: 'ai_cm1_02.jpg'
    },
    {
      id: 2,
      filename: 'ai_cm1_03.jpg'
    },
    {
      id: 3,
      filename: 'ai_cm1_04.jpg'
    },
    {
      id: 4,
      filename: 'ai_cm1_05.jpg'
    },
    {
      id: 5,
      filename: 'ai_cm1_06.jpg'
    },
    {
      id: 6,
      filename: 'ai_cm1_07.jpg'
    },
    {
      id: 7,
      filename: 'ai_cm1_08.jpg'
    },
    {
      id: 8,
      filename: 'ai_cm1_09.jpg'
    },
    {
      id: 9,
      filename: 'ai_cm1_10.jpg'
    },
    {
      id: 10,
      filename: 'ai_cm1_11.jpg'
    },
    {
      id: 11,
      filename: 'ai_cm1_12.jpg'
    },
    {
      id: 12,
      filename: 'ai_cm1_13.jpg'
    }
  ];

  constructor() {
  }

  getFile(id: Number) {
    return this.files.find(x => x.id === id);
  }
}
