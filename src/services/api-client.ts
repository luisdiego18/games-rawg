import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'cf1aba989d0a41e1b36c54faec3a02de'
    }
})