import { useEffect, useState } from "react";
import { RAPID_API_KEY } from "@env";
import axios from "axios";
import { Alert } from "react-native";

const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint: string, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com${endpoint}`,
        headers: {
            "x-rapidapi-key": rapidApiKey,
            "x-rapidapi-host": "jsearch.p.rapidapi.com",
        },
        params: {...query},
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);

            const fetchedData = Array.isArray(response.data.data)
                ? response.data.data
                : (response.data.data ? [response.data.data] : []);

            setData(fetchedData);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData()
    }, [endpoint, JSON.stringify(query)]);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
        setIsLoading(false);
    }

    return { data, isLoading, error, refetch };
};

export default useFetch;
