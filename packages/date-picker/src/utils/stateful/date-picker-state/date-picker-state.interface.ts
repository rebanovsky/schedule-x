import { DatePickerView } from '../../../enums/date-picker-view.enum'
import { Signal } from '@preact/signals'

export default interface DatePickerState {
  isOpen: Signal<boolean>
  selectedDate: Signal<string>
  inputDisplayedValue: Signal<string>
  datePickerDate: Signal<string>
  datePickerView: Signal<DatePickerView>

  open(): void
  close(): void
  toggle(): void

  setView(view: DatePickerView): void
}