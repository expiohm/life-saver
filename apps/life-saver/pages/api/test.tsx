export default function handler(req, res) {
    // wait for 10 sec to simulate a slow API
    setTimeout(() => {
        res.status(200).json({ name: 'John Doe' })
    }, 10000)
  }