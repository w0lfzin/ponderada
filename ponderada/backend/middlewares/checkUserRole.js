// const checkUserRole = (allowedRoles) => {
//   return (req, res, next) => {
//     const userRole = req.user.role;

//     if (allowedRoles.includes(userRole)) {
//       next();
//     } else {
//       res.status(403).json({ error: 'Acesso proibido. Você não tem permissão para acessar este recurso.' });
//     }
//   };
// };

// export default checkUserRole;
