import connectMongo from "../../../database/connTable";
import { getUsers, postUser, putUser, deleteUser } from "../../../database/controllerTable";
import Cors from 'cors';

const cors = Cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed HTTP methods
});

export default async function handler(req, res) {
  await cors(req, res); // Apply the CORS middleware

  connectMongo().catch(() => res.status(405).json({ error: "Error in the Connection" }));

  // type of request
  const { method } = req;

  switch(method){
    case 'GET':
      getUsers(req, res);
      break;
    case 'POST':
      postUser(req, res);
      break;
    case 'PUT':
      putUser(req, res);
      break;
    case 'DELETE':
      deleteUser(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
