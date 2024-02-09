import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
export async function createTodo(
  userId: number,
  title: string,
  description: string
) {
  try {
    const newTodo = await prisma.todo.create({
      data: {
        userId,
        title,
        description,
      },
    });
    console.log(newTodo);
  } catch (error) {
    console.log(error);
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
// export async function updateTodo(todoId: number) {
//   try {
//     const updatedTodo = await prisma.todo.update({
//       data: {
//         done: true,
//       },
//       where: {
//         id: todoId,
//       },
//     });
//     console.log({
//       msg: "Todo updated successfully",
//       todo: updatedTodo,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// /*
//  *  Get all the todos of a given user
//  * Should return an array of todos
//  * [{
//  *  title: string,
//  *  description: string,
//  *  done: boolean,
//  *  id: number
//  * }]
//  */
// export async function getTodos(userId: number) {
//   try {
//     const allTodos = await prisma.todo.findMany({
//       where: {
//         userId: userId,
//       },
//     });
//     console.log(allTodos);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getTodos(1);
