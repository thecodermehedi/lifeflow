const router = require("../../utils/router");

const {paymentIntent, addPayment, getFundingAmmount} = require("../../api/funding/controllers");

router.post("/api/v1/payment-intent", paymentIntent);
router.post("/api/v1/payments", addPayment);
router.get("/api/v1/funding-ammount", getFundingAmmount);

module.exports = router;
