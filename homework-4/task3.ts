enum UserRole {
    User = 'USER',
    Guest = 'GUEST',
    Admin = 'ADMIN'
}

function messageGeneratorByRole(role: UserRole): string {
    if (role === 'USER') {
        return "Welcome, User! You have limited access."
    } else if (role === 'GUEST') {
        return "Welcome, Guest! Sign up to see more."
    } else if (role === 'ADMIN') {
        return "Welcome, Admin! You have full access."
    } else {
        return "Role is unknown."
    }
}

const inputedRole = "ADMIN"
const role = inputedRole as UserRole

console.log(messageGeneratorByRole(role));
