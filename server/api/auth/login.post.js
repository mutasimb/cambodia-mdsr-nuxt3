import bcryptjs from "bcryptjs";
import { PrismaClient } from "@prisma/client";

import createToken from "../../utils/create-token";

const prisma = new PrismaClient();

export default defineEventHandler(async e => {
  try {
    const { phone, password } = await readBody(e);
      
    const user = await prisma.user.findUnique({ where: { phone } });
    if(!user) throw createError({
      statusCode: 404,
      statusMessage: "Phone number is not registered"
    });

    const isMatch = await bcryptjs.compare(password, user.password);
    if(!isMatch) throw createError({
      statusCode: 401,
      statusMessage: "Incorrect password"
    });

    const token = createToken(user.id);

    return { token };
  } catch (err) {
    return err;
  }
})
