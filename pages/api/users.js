const users = [
  {
    name: "Daniel",
    userName: "DanielMeza"
  },
  {
    name: "Ricardo",
    userName: "Ricardo2"
  },
  {
    name: "Lorena",
    userName: "Lore"
  }
];

export default function usersHandler(req, res) {
  const { method } = req;
  if (method === "GET") {
    res.status(200).json(users);
  }

  if (method === "POST") {
    const { body } = req;
    users.push(body);
    return res
      .status(200)
      .json({ message: "Usuario agregado con éxito", data: users });
  }

  if (method === "PUT") {
    const { body } = req;
    const newUsers = users.map(user =>
      user.userName === body.toUpdateUserName
        ? { ...user, name: body.data.name }
        : { user }
    );
    users = newUsers;

    return res
      .status(200)
      .json({ message: "Usuario agregado con éxito", data: users });
  }
}
