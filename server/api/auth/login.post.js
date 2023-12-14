import { Users } from "../../utils/models";
import createToken from "../../utils/create-token";

import bcryptjs from "bcryptjs";

export default defineEventHandler(async e => {
  try {
    const { phone, password } = await readBody(e);
      
    const user = await Users.findOne({ phone });
    if(!user) throw createError({
      statusCode: 404,
      statusMessage: "Phone number is not registered"
    });

    const isMatch = await bcryptjs.compare(password, user.password);
    if(!isMatch) throw createError({
      statusCode: 401,
      statusMessage: "Incorrect password"
    });

    const token = createToken(user._doc._id.toString());

    return { token };
  } catch (err) {
    return err;
  }
})
