function mostrar() {
    var anclasDiv = document.getElementById("anclas");
    if (anclasDiv.style.display === "none" || anclasDiv.style.display === "") {
        anclasDiv.style.display = "block";
    } else {
        anclasDiv.style.display = "none";
    }
}

let ctx = document.getElementById('myChart');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Operaciones Bancarias', 'Educación', 'Ver Peliculas/Videos', 'Trámites/Turnos Medicos', 'Comunicación', 'Buscar Información'],
        datasets: [{
            label: 'Razones del uso de la tecnologia por personas mayores',
            data: [60.0,71.2,60.6,82.3,88.3,88.6],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 205, 86)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]

    }
})