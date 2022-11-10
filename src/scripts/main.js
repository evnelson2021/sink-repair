import { fetchRequests } from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"
import { fetchPlumbers } from "./dataAccess.js"
import { fetchCompletions } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
        .then(() => fetchPlumbers())
        .then(
            () => {
                mainContainer.innerHTML = SinkRepair()
            }
        )
        .then(() => fetchCompletions())
}

render()

mainContainer.addEventListener(
    "stateChanged",
    (customEvent) => {
        render()
    }
)