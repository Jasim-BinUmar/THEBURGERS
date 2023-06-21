import dbConnect from "../../../util/mongo.js";
import Order from "../../../models/Order.js";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
      console.log("Order successful");
      console.log(orders);
    } catch (err) {
      res.status(500).json(err);
      console.log("didn't get");
    }
  }
  if (method === "POST") {
    try {
      const order = await Order.create(req.body);
      res.status(201).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

export default handler;
