import { connectdb } from "../db/connectdb.mjs"

export const redes = async (facebook, instagram, x, tikTok, persona) => {

    const query = {
        text: "INSERT INTO redessociales(redsocial, usuario, persona) values('facebook', $1, $5), ('instagra', $2,$5), ('x(Antiguo twitter)',$3,$5),('tiktok', $4,$5)",
        values: [facebook, instagram, x, tikTok, persona]

    }

    const { rows } = await connectdb.query(query)
    return rows[0];
}