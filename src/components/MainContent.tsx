import { IonIcon } from "@ionic/react";
import "./../assets/styles/MainContent.css"

interface journalEntry {

    imgSrc: string

    country: string
    mapRef: string
    place: string

    startDate: Date
    endDate: Date
    placeText: string
}

let arr: journalEntry[] = [
    {
        imgSrc: "https://source.unsplash.com/WLxQvbMyfas",
        
        country: "Japan",
        mapRef:"https://www.google.com/maps/place/Monte+Fuji/",
        place: "Mount Fuji",

        startDate: new Date("2021-01-12"),
        endDate: new Date("2021-01-24"),
        placeText: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
    },
    {
        imgSrc: "https://source.unsplash.com/JmuyB_LibRo",
        
        country: "Australia",
        mapRef:"https://www.google.com/maps/place/%C3%93pera+de+Sydney",
        place: "Sidney Opera House",

        startDate: new Date("2021-05-27"),
        endDate: new Date("2021-06-08"),
        placeText: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
    },
    {
        imgSrc: "https://source.unsplash.com/3PeSjpLVtLg",
        
        country: "Norway",
        mapRef:"https://www.google.com/maps/place/Fiorde+de+Geiranger",
        place: "Geirangerfjord",

        startDate: new Date("2021-10-01"),
        endDate: new Date("2021-11-18"),
        placeText: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
    }
]

export default function MainContent() {

    return (
        <div className="MainContent">
                {arr.map((item, index) => {
                    return (
                        <div className="centered">
                            <Entry key={index} {...item}/>
                        </div>
                    )
                })}
        </div>
    )
}

function Entry(props: journalEntry) {
    return (
        <div className="Entry">
            <img className="Entry--img" src={props.imgSrc} />
            <Content {...props}/>
        </div>
    )
}

function Content (props: journalEntry) {

    return (
        <div className="Content">
            <ContentData {...props}/>
            <ContentText {...props}/>
        </div>
    )
}

function ContentData ({country, mapRef, place}: journalEntry) {
    return (
        <div className="ContentData">
            <div className="ContentData--country">
                <IonIcon name="location" className="location-icon"/>
                <p className="location-country">{country.toUpperCase()}</p>
                <a className="location-link" href={mapRef}>View on Google Maps</a>
            </div>
            <h2 className="ContentData--place">{place}</h2>
        </div>
    )   
}

function ContentText ({startDate, endDate, placeText} : journalEntry){

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


    return (
        <div className="ContentText">
            <p className="ContentText--date">{startDate.getDate()} {months[startDate.getMonth()]}, {startDate.getFullYear()} - {endDate.getDate()} {months[endDate.getMonth()]}, {endDate.getFullYear()} </p>
            <p className="ContentText--text">{placeText}</p>
        </div>
    )
}

