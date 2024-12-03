import Papa from "papaparse";

const useFetch = () => {
    const sanitizeColumns = (data) => {
        return data.map((item) => {
            const sanitizedItem = {};
            Object.keys(item).forEach((key) => {
                const sanitizedKey = key.toLowerCase().replace(/(\s|-)+/g, "_");
                sanitizedItem[sanitizedKey] = item[key] === "t" ? 0 : item[key];
            });
            return sanitizedItem;
        });
    };

    const fetchCsvData = async (filePath, voidCallback) => {
        const response = await fetch(filePath);
        const reader = response.body.getReader();
        const result = await reader.read();
        const decoder = new TextDecoder("utf-8");
        const csvString = decoder.decode(result.value);
        const { data } = Papa.parse(csvString, {
            header: true,
            dynamicTyping: true,
        });

        const sanitizedData = sanitizeColumns(data);
        voidCallback(sanitizedData);
    };
    return { fetchCsvData };
};

export default useFetch;
