import { createClient } from "next-sanity";
import createImageUrl from "@sanity/image-url"

export const config = {
    // after setting up the environment variables
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2022-03-25",
    useCdn: process.env.NODE_ENV === "production"
}

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)

// Set up helper functions for fetching images from cms and turn them into url that can be used in the front end
export const urlFor = (source: any) =>
    createImageUrl(config).image(source);

