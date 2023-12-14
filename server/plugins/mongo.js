import { connect } from "mongoose";

export default async _nitroApp => {
  const
    { hostDB, nameDB, userDB, passDB } = useRuntimeConfig(),
    mongoURI = `mongodb+srv://${ userDB }:${ passDB }@${ hostDB }/${ nameDB }?retryWrites=true&w=majority`;

  try {
    await connect(mongoURI);
    console.log("Successfully connected to MongoDB");
  } catch (e) {
    console.error(e);
  }
}
