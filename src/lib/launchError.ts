export default function launchError(string: string | Error = 'Errore generico!'): void {
    const message = `Error: ${string}`;
    console.error(message);
    alert(message);
}