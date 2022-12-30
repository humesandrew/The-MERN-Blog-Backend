const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

//create a createToken so we can use it with our requests //
// we'll create (sign) a token with a payload (date we take in, below is _id only)//
// , a secret (used for signature), and any options (like expires in 3 days)//
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "2d" });
};

//login user //
const loginUser = async (req, res) => {
  //grab email and pass from req.body //
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // after we've saved them to the db, we create a token for them//
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup user //

const signupUser = async (req, res) => {
  //grab email and pass from req.body //
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    // after we've saved them to the db, we create a token for them//
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser };
