import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as bcrypt from "bcrypt"; // https://auth0.com/blog/hashing-in-action-understanding-bcrypt/

@Unique(["userName"] as (keyof AppUsers)[])
@Entity("AppUsers")
export class AppUsers {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    userName: string;
    @Column()
    private passwordHashed: string;
    /** Saves a hashed version of string in this instance as the password */
    async storePassword(plainTextPassword: string) {
        const hashedPassword = await bcrypt.hash(
            plainTextPassword,
            parseInt(process.env.SALT_ROUNDS),
        );
        this.passwordHashed = hashedPassword;
    }
    checkPassword(plainTextPassword: string) {
        return bcrypt.compare(plainTextPassword, this.passwordHashed);
    }
}
