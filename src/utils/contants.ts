interface Steps{
    LOGIN:number,
    SIGN_UP:number,
    REGISTER:number
};
export const formStep : Readonly<Steps> = {
    LOGIN : 0,
    SIGN_UP : 1,
    //company not registered YEt
    REGISTER : 2
};

interface Role{
    PUBLIC:string,
    ADMIN:string
};
export const userRole : Readonly<Role> = {
    PUBLIC : 'public',
    ADMIN : 'admin'
};

interface UpdateUserField {
    name : string,
    label :string
}

export const UpdateUserFields: Readonly<UpdateUserField []> = [
    {
        name: 'firstName',
        label : 'first name'
    },
    {
        name : 'lastName',
        label : 'last name'
    },
    {
        name : 'email',
        label : 'email'
    },
    {
        name : 'password',
        label :'password'
    }
]
