export class User {
    public user: string;
    public email: string;
    public password: string;
    public profile_photo?: string;

    constructor(user: string, email: string, password: string, profile_photo?: string) {
        this.user = user;
        this.email = email;
        this.password = password;
        this.profile_photo = profile_photo;
    }
}
