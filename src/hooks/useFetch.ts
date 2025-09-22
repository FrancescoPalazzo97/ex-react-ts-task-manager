import type { FormDataType } from "../types";

export default async function useFetch(URL: string, method?: string, obj?: FormDataType): Promise<unknown> {
    let methodObj = {};

    switch (method) {
        case 'POST':
            methodObj = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            };
            break;
        case 'DELETE':
            methodObj = {
                method: 'DELETE'
            };
            break;
        case 'PUT':
            methodObj = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            };
            break;
        default:
            methodObj = {};
    }

    const res = await fetch(URL, methodObj);
    if (!res.ok) throw new Error('Errore nel recupero dei dati!')
    return await res.json();
}