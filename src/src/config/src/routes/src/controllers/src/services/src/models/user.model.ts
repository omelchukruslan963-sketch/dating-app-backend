import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";

class User extends Model {}

User.init(
    {
        email: { type: DataTypes.STRING, unique: true },
        password: DataTypes.STRING
    },
    {
        sequelize,
        modelName: "User"
    }
);

export default User;
