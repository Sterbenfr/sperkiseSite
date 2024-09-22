const downloadICSFile = (
  title: string,
  description: string,
  location: string,
  startDate: string,
  endDate: string,
) => {
  const icsContent = `
  BEGIN:VCALENDAR
  VERSION:2.0
  PRODID:-//Sperkise Events//NONSGML v1.0//EN
  BEGIN:VEVENT
  UID:${new Date().toISOString()}-1@example.com
  DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
  DTSTART:${startDate.replace(/[-:]/g, '').split('.')[0]}Z
  DTEND:${endDate.replace(/[-:]/g, '').split('.')[0]}Z
  SUMMARY:${title}
  LOCATION:${location}
  DESCRIPTION:${description}
  END:VEVENT
  END:VCALENDAR`

  const blob = new Blob([icsContent], { type: 'text/calendar' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${title}.ics`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
export default downloadICSFile
