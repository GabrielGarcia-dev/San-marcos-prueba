


Implementar Footer a las vistas: 

* Recordar quitar el estilo css del footer en dado caso que tuviera alguno, ya que 
se esta cargando desde el archivo footer.css

* Agregar el siguiente codigo en el archivo css donde se quiera mostrar el footer

    <link rel="stylesheet" href="./Footer/footer.css">

* Agregar el siguiente script en el archivo html donde se quiera mostrar el footer
junto con el div que contendra el footer

    <div id="footer"></div>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            fetch('./Footer/footer.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('footer').innerHTML = data;
                })
                .catch(error => console.error('Error al cargar el footer:', error));
        });
    </script>



Implementar Header a las vistas:

* Recordar quitar el estilo css del header en dado caso que tuviera alguno, ya que
se esta cargando desde el archivo header.css

* Agregar el siguiente codigo en el archivo html donde se quiera mostrar el header

    <link rel="stylesheet" href="./Header/header.css">

* Agregar el siguiente script en el archivo html donde se quiera mostrar el header

    <div id="header-placeholder"></div>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            fetch('/San Marcos Web En/Views/Header/header.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('header-placeholder').innerHTML = data;
    
                    // Ejecutar los scripts en el HTML inyectado
                    const scripts = document.querySelectorAll('#header-placeholder script');
                    scripts.forEach(script => {
                        const newScript = document.createElement('script');
                        newScript.textContent = script.textContent;
                        document.body.appendChild(newScript);
                    });
    
                    // Agregar eventos o manipular elementos si es necesario
                    const menuIcon = document.getElementById('menuIcon');
                    const menuDropdown = document.getElementById('menuDropdown');
                    menuIcon.addEventListener('click', function() {
                        if (menuDropdown.style.display === "none" || menuDropdown.style.display === "") {
                            menuDropdown.style.display = "block";
                        } else {
                            menuDropdown.style.display = "none";
                        }
                    });
                })
                .catch(error => console.error('Error fetching header:', error));
        });
    </script>