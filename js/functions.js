function isMeetingWithinWorkday(workStart, workEnd, meetingStart, duration) {
  // Вспомогательная функция: переводим "часы:минуты" в минуты с начала дня
  function timeToMinutes(timeStr) {
    let parts = timeStr.split(':');
    let hours = parseInt(parts[0], 10);
    let minutes = parseInt(parts[1], 10);
    return hours * 60 + minutes;
  }

  let workStartMin = timeToMinutes(workStart);
  let workEndMin = timeToMinutes(workEnd);
  let meetingStartMin = timeToMinutes(meetingStart);
  let meetingEndMin = meetingStartMin + duration;

  return meetingStartMin >= workStartMin && meetingEndMin <= workEndMin;
}

// Примеры использования
console.log(isMeetingWithinWorkday('08:00', '17:30', '14:00', 90)); // true
console.log(isMeetingWithinWorkday('8:0', '10:0', '8:0', 120));     // true
console.log(isMeetingWithinWorkday('08:00', '14:30', '14:00', 90)); // false
console.log(isMeetingWithinWorkday('14:00', '17:30', '08:0', 90));  // false
console.log(isMeetingWithinWorkday('8:00', '17:30', '08:00', 900)); // false

