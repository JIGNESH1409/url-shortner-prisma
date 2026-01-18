import { getLinkbyShorturl } from "../services/shortner.service.js";

export const RendertoshortUrlController = async (req, res) => {
    try {
        const { shortcode } = req.params;

        if (!shortcode) {
            return res.status(400).send("Invalid short URL");
        }

        const link = await getLinkbyShorturl(shortcode);

        if (!link) {
            return res.status(404).send("Short url not found");
        }

        return res.redirect(link.originalUrl);
    } catch (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
    }
};
