import Config from '../config.interface'
import { DatePickerConfigExternal } from '../date-picker/config.interface'
import { ViewName } from '@schedule-x/calendar/src/types/view-name'
import { View } from '@schedule-x/calendar/src/types/view'
import CalendarEventExternal from './calendar-event.interface'
import {
  DayBoundariesExternal,
  DayBoundariesInternal,
} from '@schedule-x/calendar/src/types/config/day-boundaries'
import DragAndDropPlugin from '../drag-and-drop/drag-and-drop-plugin.interface'
import PluginBase from '../plugin.interface'

export type WeekOptions = {
  gridHeight: number
}

// Extend with field "label" when implementing calendar picker
export type CalendarType = {
  color: string
}

export type Plugins = {
  dragAndDrop?: DragAndDropPlugin
}

export default interface CalendarConfigInternal extends Config {
  defaultView: ViewName
  views: View[]
  dayBoundaries: DayBoundariesInternal
  weekOptions: WeekOptions
  calendars?: Record<string, CalendarType>
  plugins: Plugins

  // Getters
  isHybridDay: boolean
  timePointsPerDay: number
}

interface CalendarDatePickerConfigExternal
  extends Omit<DatePickerConfigExternal, 'listeners' | 'placement'> {}

interface ReducedCalendarConfigInternal
  extends Omit<
    CalendarConfigInternal,
    'dayBoundaries' | 'isHybridDay' | 'plugins'
  > {}

export interface CalendarConfigExternal
  extends Partial<ReducedCalendarConfigInternal> {
  datePicker?: CalendarDatePickerConfigExternal
  events?: CalendarEventExternal[]
  dayBoundaries?: DayBoundariesExternal
  plugins?: PluginBase[]
}