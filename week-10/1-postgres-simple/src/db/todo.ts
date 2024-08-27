
import { client } from "..";

/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
   
//no where clause in insert
    try{
       

        const insertQuery = `INSERT INTO todos( user_id, title, description)  VALUES($1,$2,$3) RETURNING *;`;
        const values = [userId, title, description];

        const res = await client.query(insertQuery, values);

        return res.rows[0]
    }
    catch(err){
        throw err;
    }
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {

try{
  
    const res = await client.query(`UPDATE todos SET done = true WHERE id = $1 RETURNING * ;`,[todoId]);

    if(res.rows.length === 0){
        throw new Error("Todo not found")
    }

    return res.rows[0]
    
}
catch(err){
    throw err;
}
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
try{

    //select no returning
   
    const res =  await client.query(`SELECT * FROM todos WHERE user_id = $1 ;`, [userId])
    return res.rows
}catch(err){
    throw err;
}

}