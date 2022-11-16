declare module "iron-session" {
    interface IronSessionData {
        user?: AppUsers;
    }
}

export interface SelectableOption {
    id: string | number;
    name: string;
}
