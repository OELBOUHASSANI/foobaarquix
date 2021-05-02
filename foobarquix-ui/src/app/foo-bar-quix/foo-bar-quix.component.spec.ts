import {FooBarQuixComponent} from "./foo-bar-quix.component";
import {FooBarQuixService} from "../foo-bar-quix.service";
import {of} from "rxjs";

describe('FooBarQuixComponent', () => {

  let component: FooBarQuixComponent;

  /*
   as we are testing the component behavior we are providing here a simple implementation of FooBarQuixService
   this technic is called stubbing.
   */
  const serviceStub: FooBarQuixService = {
    convertNumber: (inputNumber) => {
      if (inputNumber === 5) return of(
        {result: 'BarBar'}
      );
    }
  } as FooBarQuixService;


  it('convertNumber should call with right param convertNumber of FooBarQuixService & add the result in numberConvertedList', () => {
    // GIVEN
    component = new FooBarQuixComponent(serviceStub);
    spyOn(serviceStub, 'convertNumber').and.callThrough();

    // WHEN
    component.convertNumber(5);
    // THEN
    expect(serviceStub.convertNumber).toHaveBeenCalledWith(5);
    expect(component.numberConvertedList).toEqual([{numberToConvert: 5, result: 'BarBar'}]);
  });

});
