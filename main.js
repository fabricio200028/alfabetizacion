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
            label: 'RAZONES DEL USO DE LA TECNOLOGIA POR PERSONAS MAYORES',
            data: [60.0,71.2,60.6,82.3,88.3,88.6],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 2
        }]

    }
})