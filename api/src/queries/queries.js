
require("dotenv").config();

async function  getFunctions(context) {
    try {        

        const data = await context.mongo
        .db("sekyoor")
        .collection("functions")
        .find()
        .map(({ _id, ...secfunctions }) => ({ ...secfunction, id: _id }))
        .toArray();
  
        return data;        
    } catch (err) {
        console.dir(err);
    } 
}
module.exports = {
    getFunctions: getFunctions
}