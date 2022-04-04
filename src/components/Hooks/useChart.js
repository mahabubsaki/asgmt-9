import { useEffect, useState } from "react"

const useChart = () => {
    const [chart, setChart] = useState([])
    useEffect(() => {
        fetch('chartData.json')
            .then(response => response.json())
            .then(data => setChart(data))
    }, [])
    return [chart,]
}
export default useChart