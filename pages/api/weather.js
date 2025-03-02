export default async function handler(req, res) {
    const apiKey = 'API_KEY_ANDA'; // Ganti dengan API key OpenWeatherMap Anda
    const city = req.query.city || 'Jakarta'; // Default city jika tidak ada query
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
}