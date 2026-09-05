function confirmRegistration(e) {

  const name = e.values[1];
  const email = e.values[3];
  
  const subject = "Welcome to QFF2026 - A Decade on the Cloud!";

  const body = `Hello ${name},\n\nYour registration for the 2026 Qiskit Fall Fest at Yarmouk University was successfull. You will receive reminders on this email before each session. We look forward to seeing you in person!\n\nThank you,\n\nYarmouk University Qiskit Fall Fest Team`;

  MailApp.sendEmail(email, subject, body);
}