import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  private id: string | null = '0';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get('id');
    });

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter((article) => {
      return article.id == id;
    })[0];

    if (result) {
      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.photoCover = result.photo;
    } else {
      this.contentTitle = 'Not found';
      this.contentDescription = '';
      this.photoCover =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAM1BMVEXm5uaztbTX19eusK/h4uLp6enHyMfb29u5urrf39/S0tK2uLfLzMu9vr7Oz87ExcXw8PBl6vxyAAADJklEQVR4nO2ZgW7jIAxACcGAAcP+/2vPOF13bchJPSXkdPLTtGqELE/ggHGNURRFURRFURRFURRFURRFURRFUZT/DRhys1TxA8qtSm5ZlwHr4u5zgjZ0Yqt23wy6sVLnvqHCY6lwm1Q6lkp3OUE5lipzg4pXIbdh2rFUe3aasmohxW+OnZb87ETXhxf4g1XgmNVfPVbpYye2ujjq3cGUrZlao3xgHK9dtcL4qSXIY104eB+vDSs7VHLPoAE31LKzpfLbMIR8v1SUYQJwiE6WJBjE3WSpjDJ1lnh8MlnDfwHuxmqu1JrEgh6v3UrdEez7WzhXqudN8PJKht7yvv/MlbKwy6rcqNtMqdjb/Gub721vsT5Vyu8HSobqfYecKdXDfBfVEvvpRqkwSBskKQh3S71Pn0i9NulIDcJHsie4MaZkpnbnLNzPqa5T8rS3oeKB2uWCk/c+M9r7dmevyVmClSzhu/iyLv9ClrDNFr9tWz6VJLnalxjmZ55iZXrmacTp/syTD1fh5awJIe4PWtMPDnya+b3HDaeZ4blvzSVIRdaEMj6PXivlBucnIUeieHjx4rpe+ZtawuXFKvq86kIXKzE1rx+R6/VOjPuIKUrKH/lwFsKoIIUGz53LxG81wFbp/fllfupSjyYsco6P9vei8HaDIePrqWtDKgZtNTbxPy/9dUo2OINVcoR+iTdjWxEq9RbfHCTu1bvwRp1SL6ZZljq3+MlSSyk5Ne8IEwHVtKBtQerRbqnc5H2IfKnPUGnIHaJpAby12bZiIu9AppwuReAIQgMM/ORogB9crO9lF5cBpCkVlDIMj1kD9vEi5fkuW/r01XP3wFTYCFnKdxVC6lIxpdQf42KX4ia2kO/UUuVPKA+p8pSyeI1Us+0rZJ4NzFjKV+2hK1KGLJANtPU2nPtF5BjKNvWRwgh8VzhXKlhXjSuA1RRK1TlfOWAKyXnKsRlHeuvZMFnpDdgIeb5bDSEBJrDRV5NOTmFAqpny2SF0sX8XBI+L8gPwvUg8/3osI9td5uJkAVs7dypO4fav+RVFURRFURRFURRFURRFURRFURRlLr8AStceh0nIC5EAAAAASUVORK5CYII=';
    }
  }
}
