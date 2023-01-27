const data = [];

export default function handler(req, res) {
  if (req.method == "GET") {
    res.status(200).json(data);
  } else if (req.method === "POST") {
    const add = data.push(req.body);
    console.log(add);
  }
}
