use admin
db.createUser(
   {
     user: "admin",
     pwd: "a23sdfr!1",
     roles:
       [
         { role: "readWrite", db: "CorrectionUIdb2" }
       ]
   }
)