import { connectdb } from "../db/connectdb.mjs";

export const getPaises = async (req, res) => {

    try {
        const { rows } = await connectdb.query("select * from paises");
        return res.status(200).json({
            messager: rows
        });
    } catch (error) {
        console.log(error);
    }


}