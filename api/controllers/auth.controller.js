
export const register = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword=bcrypt.hash(password,10)
}
export const login = (req, res) => {
    
}
export const logout = (req, res) => {
    
}