import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'duratipon' })
export class DurationPipe implements PipeTransform {
  transform(value: number) {
    return duration[value];

  }

}

enum duration {
  'Half Hour' = 1,
  '1 Hour' = 2,
  "Half Day" = 3,
  "Full Day" = 4,
}
