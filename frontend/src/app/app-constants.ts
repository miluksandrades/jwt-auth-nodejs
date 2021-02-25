export class AppConstants {

    public static get baseUrl(): string {return 'http://localhost:3333/'}

    public static get baseLogin(): string {return this.baseUrl + 'login'}

    public static get getUsers(): string {return this.baseUrl + 'getusers'}
    public static getUserById(id): string {return this.baseUrl + `getuser/${id}`}
    public static deleteUser(id): string {return this.baseUrl + `deleteuser/${id}`}
    public static updateUser(id): string {return this.baseUrl + `updateuser/${id}`}
}
