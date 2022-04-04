import { useEffect, useState } from "react"

const useReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => setReviews(data))
    }, [])
    return [reviews,]
}
export default useReviews