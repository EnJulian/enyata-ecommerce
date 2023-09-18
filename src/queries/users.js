const addUser=`
    INSERT INTO users(
        username,
        email,
        password
    )
    VALUES($1,$2,$3) RETURNING id,username, email, created_at
`
const findUserByEmail = `
 SELECT id,username, email, password FROM users WHERE email = $1
`;
const fetchUserById=`
SELECT id, email FROM users WHERE id = s$1`

module.exports={
    addUser,
    findUserByEmail,
    fetchUserById
}