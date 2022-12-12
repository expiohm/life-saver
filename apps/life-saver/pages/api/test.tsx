export default function handler(req, res) {
    // wait for 2 sec to simulate a slow API
    setTimeout(() => {
        res.status(200).json({ name: 'John Doe' })
    }, 2000)
  }