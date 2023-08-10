import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateRu',
})
export class DateRuPipe implements PipeTransform {

  private monthsMap = {
    April: 'Апреля',
    August: 'Августа',
    December: 'Декабря',
    February: 'Февраля',
    January: 'Января',
    July: 'Июля',
    June: 'Июня',
    March: 'Марта',
    May: 'Мая',
    November: 'Ноября',
    October: 'Октября',
    September: 'Сентября',
  };

  transform(formattedDate: string): string {
    const monthName = Object.keys(this.monthsMap).find((month) => formattedDate.match(new RegExp(month)));

    if (monthName) {
      return formattedDate.replace(monthName, this.monthsMap[monthName]);
    }

    return formattedDate;
  }

}
