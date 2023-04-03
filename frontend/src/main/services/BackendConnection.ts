import axios from "axios";


const backendUrl = `${window._env_.BACKEND_HOST}:${window._env_.BACKEND_HOST_PORT}`;

export class BackendConnection {

    /**
     * Check if the backend is listening.
     */
    async livelinessProbe(): Promise<string> {
        return new Promise<string>(async resolve => {
            axios.get<string>(`${backendUrl}/api/is-alive`)
                .then((response) => {
                    resolve(response.data);
                })
                .catch(error => {
                    console.log(error);
                    resolve('Not connected to backend');
                })
        })
    }
}