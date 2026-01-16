import crypto from "crypto";
import { loadLinks, getLinkbyShorturl } from "../model/Shortner.model.js";

export const postShortnerController = async (req, res) => {
    try {
        const { url, urlshorten } = req.body;

        if (!url) {
            return res.status(400).send("URL is required");
        }

        const finalshort =
            urlshorten && urlshorten.trim()
                ? urlshorten.trim().toLowerCase()
                : crypto.randomBytes(4).toString("hex");

        console.log("FINAL SHORTCODE =>", finalshort);

        const existing = await getLinkbyShorturl(finalshort);
        console.log("EXISTING =>", existing);

        if (existing) {
            return res.status(400).send("Custom shortcode already in use");
        }

        await loadLinks({ url, finalshort });
        return res.redirect("/");
    } catch (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
    }
};
