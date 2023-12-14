import { Users } from "../../utils/models";
import createToken from "../../utils/create-token";

import bcryptjs from "bcryptjs";

export default defineEventHandler(async e => {
  try {
    const { name, phone, password } = await readBody(e);

    const userExisting = await Users.findOne({ phone });
    if (userExisting) throw createError({
      statusCode: 409,
      statusMessage: "This phone number is already registered. Please try logging in."
    });

    const
      salt = await bcryptjs.genSalt(10),
      hashed = await bcryptjs.hash(password, salt),
      user = new Users({
        name,
        phone,
        password: hashed
      }),
      savedUser = await user.save(),
      token = createToken(savedUser._doc._id.toString());

    return { token };
  } catch (err) {
    return err;
  }
})
