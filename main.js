import { fetchData } from "./modules.js";

const load = document.getElementById("load");
const clear = document.getElementById("clear");
const output = document.getElementById("output");

load.addEventListener("click", async () => {
    try {
        const data = await fetchData();

        const disneyMovies = [
            "Frozen",
            "Moana",
            "Tangled",
            "The Lion King",
            "Zootopia"
        ];

        let html = `
            <table>
                <tr>
                    <th>User ID</th>
                    <th>Task ID</th>
                    <th>Title</th>
                    <th>Status</th>
                </tr>
        `;

        data.slice(0, 5).forEach((todo, index) => {
            html += `
                <tr>
                    <td>${todo.userId}</td>
                    <td>${todo.id}</td>
                    <td>${disneyMovies[index]}</td>
                    <td>${todo.completed ? "Completed" : "Not yet Completed"}</td>
                </tr>
            `;
        });

        html += "</table>";
        output.innerHTML = html;

    } catch (error) {
        output.innerHTML = "Error loading data.";
        console.log(error);
    }
});

clear.addEventListener("click", () => {
    output.innerHTML = "";
});