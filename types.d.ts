import { type } from "os"

type ExploreData = {
    distance: string
    img: string
    location: string
}

type CardsData = {
    img: string
    title: string
}

type SearchResultsData = {
    description: string
    img: string
    lat: number
    location: string
    long: number
    price: string
    star: number
    title: string
    total: string
}

export {ExploreData, CardsData, SearchResultsData}