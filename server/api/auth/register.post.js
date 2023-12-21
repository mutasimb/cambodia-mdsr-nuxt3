import bcryptjs from "bcryptjs";
import { PrismaClient } from "@prisma/client";

import createToken from "../../utils/create-token";

const prisma = new PrismaClient();

export default defineEventHandler(async e => {
  try {
    const { name, phone, password } = await readBody(e);

    const userExisting = await prisma.user.findUnique({
      where: { phone }
    });
    if (userExisting) throw createError({
      statusCode: 409,
      statusMessage: "This phone number is already registered. Please try logging in."
    });

    const
      salt = await bcryptjs.genSalt(10),
      hashed = await bcryptjs.hash(password, salt),
      createdUser = await prisma.user.create({
        data: {
          name,
          phone,
          password: hashed
        }
      });

    const token = createToken(createdUser.id);

    return { token };
  } catch (err) {
    return err;
  }
})
