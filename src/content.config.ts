import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const data = defineCollection({
    loader: file("src/data/rock.json"),
/*     schema: z.object({
        id: z.string(),
        maker: z.string(),
        img: z.string(),
        url: z.string(),
        title: z.string(),
        description: z.string(),
    }), */
});

export const collections = { data };
