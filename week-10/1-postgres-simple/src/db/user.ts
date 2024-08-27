
import { client } from "..";


/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
   
    try{
       
        const insertQuery = `INSERT INTO users(username, name, password) VALUES ($1, $2, $3)  RETURNING *;`;
        const values = [username, name, password]
        await client.query(insertQuery, values);

        const res = await client.query('SELECT * FROM USERS;');
        return res.rows[0]

    }catch(err){
        console.log(err);
        throw err
    }
    
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {

    
    try{
      
        const returnQuery = 'SELECT * FROM users WHERE id = $1';
        const value = [userId];

        const result = await client.query(returnQuery, value);

        if(result.rows.length > 0){
            // console.log(result.rows.)
            return result.rows[0]
        }
        else{
            return null;
        }

    }
    catch(err){
        throw err;
    }

    
}
