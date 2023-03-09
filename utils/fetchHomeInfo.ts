import { HomeInfo } from "../typings";

export const fetchHomeInfo = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`)

    const data = await res.json()
    const homeInfo: HomeInfo = data.homeInfo

    console.log("fetching", homeInfo)

    return homeInfo

}