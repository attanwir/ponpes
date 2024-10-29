export default function register(req, res) {
  if (req.method === "POST") {
    const { name, nik, phone } = req.body;
    if (!name || !nik || !phone) {
      res.status(400).json({ message: "name, nik, and phone are required" });
    }
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};
