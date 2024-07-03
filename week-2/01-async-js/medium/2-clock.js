// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

setInterval(() => {
  console.clear();
  let seconds = new Date().getSeconds();
  let minutes = new Date().getMinutes();
  let hours = new Date().getHours();

  const Hours = hours.toString().padStart(2, "0");
  const Minutes = minutes.toString().padStart(2, "0");
  const Seconds = seconds.toString().padStart(2, "0");

  console.log(`${Hours}: ${Minutes}: ${Seconds}`);
}, 1000);
