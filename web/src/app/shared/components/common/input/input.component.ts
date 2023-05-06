import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { debounceTime, tap, takeUntil } from 'rxjs';
import { DestroyService } from 'src/app/shared/services/destroy.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  searchControl = new FormControl('');
  @Input() placeholder!: string;
  @Output() searchEvent = new EventEmitter<{ search: string }>();
  constructor(private destroyService: DestroyService) {}
  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(1000),
        tap((searchText) =>
          this.searchEvent.emit({ search: searchText ?? '' })
        ),
        takeUntil(this.destroyService.destory$$)
      )
      .subscribe();
  }
  clear() {
    this.searchControl.setValue('');
    this.searchEvent.emit({ search: '' });
  }
  ngOnDestroy() {
    this.searchControl.setValue('');
    this.destroyService.destroySubscriptions();
  }
}
