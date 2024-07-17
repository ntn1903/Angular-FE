
export class AppConsts {

    static resetFlag: boolean = false;

    static PAGE_SIZE_DEFAULT: number = 5;

    static currentUserProfile: { username: string; password: string };
    static get session(): { language: string } {
        return JSON.parse(localStorage.getItem("token") ?? "");
    }
}
