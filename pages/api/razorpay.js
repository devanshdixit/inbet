const Razorpay = require("razorpay");
const shortid = require("shortid");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const body = JSON.parse(req.body);
    console.log(body.amount);
    if (!body.amount) {
        console.log(body.amount)
        return res.status(400).json("amount not defined");
    }
    // Initialize razorpay object
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      key_secret: process.env.NEXT_PUBLIC_RAZORPAY_SECRET,
    });

    // Create an order -> generate the OrderID -> Send it to the Front-end
    const payment_capture = 1;
    console.log(body.amount)
    const amount = body.amount;
    const currency = "INR";
    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      return res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  } else {
    res.status(404).json("wrong method");
  }
}
