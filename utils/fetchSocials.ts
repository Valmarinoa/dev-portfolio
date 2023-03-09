import { Social } from "../typings";

export const fetchSocials = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)
    debugger
    console.log(res)

    const data = await res.json()
    const socials: Social[] = data.socials


    // const data = await res.json()
    // const socials: Social[] = data.socials

    // console.log("fetching", data)

    return socials

}