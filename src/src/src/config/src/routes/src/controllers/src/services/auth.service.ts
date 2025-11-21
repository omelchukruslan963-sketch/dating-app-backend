import bcrypt from "bcrypt";
import User from "../models/user.model";

export async function createUser(data: any) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await User.create({
        email: data.email,
        password: hashedPassword
    });

    return user;
}
