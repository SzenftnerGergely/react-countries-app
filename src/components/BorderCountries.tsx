
type CountryProp = {
    borders: string[]
}

const BorderCountries = ({ borders }: CountryProp) => {

    console.log(borders)

    return (
        <div>
            Border Countries:
        </div>
    )
}

export default BorderCountries
