function isMeetingWithinWorkday(workStart, workEnd, meetingStart, duration) {
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

console.log(isMeetingWithinWorkday('08:00', '17:30', '14:00', 90));
console.log(isMeetingWithinWorkday('8:0', '10:0', '8:0', 120));
console.log(isMeetingWithinWorkday('08:00', '14:30', '14:00', 90));
console.log(isMeetingWithinWorkday('14:00', '17:30', '08:0', 90));
console.log(isMeetingWithinWorkday('8:00', '17:30', '08:00', 900));

