import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();


export const LoadFile = async () => {
    // const [rows] = await db.execute(
    //     "SELECT shorturl, url FROM url_short_link ORDER BY id DESC"
    // );
    // return rows;

    const allurls = await prisma.shortened_urls.findMany();

    return allurls;
};

export const getLinkbyShorturl = async (shortcode) => {
    const link = await prisma.shortened_urls.findUnique({
        where:{
            shortCode: shortcode
        },
    })
    return link;
};

export const loadLinks = async ({ originalUrl, finalshort }) => {
    // await db.execute(
    //     "INSERT INTO url_short_link (shorturl, url) VALUES (?, ?)",
    //     [finalshort, url]
    // );

    const addLink = await prisma.shortened_urls.create({
        data:{
            originalUrl: originalUrl,
            shortCode: finalshort,
        }
    });
    return addLink;
};

export { prisma };




