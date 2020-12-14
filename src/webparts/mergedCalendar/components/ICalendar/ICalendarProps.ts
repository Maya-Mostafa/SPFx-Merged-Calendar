import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface ICalendarProps{
    showWeekends: boolean;
    eventSources: {}[];
    calSettings: {}[];
    openPanel: any;
    handleDateClick: (args:any) => void;
    context: WebPartContext;
}