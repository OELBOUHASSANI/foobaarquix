import {Component, OnInit, OnDestroy} from '@angular/core';
import {FooBarQuixService} from '../foo-bar-quix.service';
import {Subscription} from "rxjs";


@Component({
  selector: 'app-foo-bar-quix',
  templateUrl: './foo-bar-quix.component.html',
  styleUrls: ['./foo-bar-quix.component.css'],

})
export class FooBarQuixComponent implements OnInit, OnDestroy {
  numberConvertedList: NumberConverted[] = [];
  convertNumberSubscription: Subscription;

  constructor(private fooBarQuixService: FooBarQuixService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

    if (this.convertNumberSubscription !== undefined
      && this.convertNumberSubscription !== null) {
      this.convertNumberSubscription.unsubscribe()
    }
  }

  convertNumber(inputNumber: number): void {
    this.convertNumberSubscription = this.fooBarQuixService.convertNumber(inputNumber).subscribe(data => {
      this.numberConvertedList.push({numberToConvert: inputNumber, result: data.result});
    })
  }
}

interface NumberConverted {
  numberToConvert: number;
  result: string;
}


